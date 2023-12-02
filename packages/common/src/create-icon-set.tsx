import React, { forwardRef, type Ref } from 'react';

import {
  Platform,
  PixelRatio,
  processColor,
  Text,
  type TextProps,
  type TextStyle,
} from 'react-native';

import ensureNativeModuleAvailable from './ensure-native-module-available';
import createIconSourceCache from './create-icon-source-cache';
// import createIconButtonComponent from './icon-button';
import NativeIconAPI from './NativeVectorIcons';

export const DEFAULT_ICON_SIZE = 12;
export const DEFAULT_ICON_COLOR = 'black';

export type IconProps<T> = TextProps & {
  name: T;
  size?: number;
  color?: TextStyle['color'];
  innerRef?: Ref<Text>;
};

export const createIconSet = <GM extends Record<string, number>>(
  glyphMap: GM,
  fontFamily: string,
  fontFile: string,
  fontStyle?: TextProps['style']
) => {
  // Android doesn't care about actual fontFamily name, it will only look in fonts folder.
  const fontBasename = fontFile
    ? fontFile.replace(/\.(otf|ttf)$/, '')
    : fontFamily;

  const fontReference = Platform.select({
    windows: `/Assets/${fontFile}#${fontFamily}`,
    android: fontBasename,
    web: fontBasename,
    default: fontFamily,
  });

  const resolveGlyph = (name: keyof GM) => {
    const glyph = glyphMap[name] || '?';

    if (typeof glyph === 'number') {
      return String.fromCodePoint(glyph);
    }

    return glyph;
  };

  const Icon = ({
    name,
    size = DEFAULT_ICON_SIZE,
    color,
    style,
    children,
    allowFontScaling = false,
    innerRef,
    ...props
  }: IconProps<keyof GM>) => {
    const glyph = name ? resolveGlyph(name as string) : '';

    const styleDefaults = {
      fontSize: size,
      color,
    };

    const styleOverrides: TextProps['style'] = {
      fontFamily: fontReference,
      fontWeight: 'normal',
      fontStyle: 'normal',
    };

    const newProps: TextProps = {
      ...props,
      style: [styleDefaults, style, styleOverrides, fontStyle || {}],
      allowFontScaling,
    };

    // TODO: Why do we disable selectability?
    return (
      <Text ref={innerRef} selectable={false} {...newProps}>
        {glyph}
        {children}
      </Text>
    );
  };

  const WrappedIcon = forwardRef<Text, IconProps<keyof typeof glyphMap>>((props, ref) => <Icon innerRef={ref} {...props} />);
  WrappedIcon.displayName = 'Icon';

  const imageSourceCache = createIconSourceCache();

  const getImageSourceSync = (
    name: keyof GM,
    size = DEFAULT_ICON_SIZE,
    color = DEFAULT_ICON_COLOR
  ) => {
    ensureNativeModuleAvailable();

    const glyph = resolveGlyph(name);
    const processedColor = processColor(color);
    const cacheKey = `${glyph}:${size}:${String(processedColor)}`;

    if (imageSourceCache.has(cacheKey)) {
      // FIXME: Should this check if it's an error and throw it again?
      return imageSourceCache.get(cacheKey);
    }

    try {
      const imagePath =
        NativeIconAPI.getImageForFontSync(
          fontReference,
          glyph,
          size,
          processedColor as number // FIXME what if a non existant colour was passed in?
        );
      console.debug('MOO', imagePath);
      const value = { uri: imagePath, scale: PixelRatio.get() };
      imageSourceCache.setValue(cacheKey, value);
      return value;
    } catch (error) {
      imageSourceCache.setError(cacheKey, error as Error);
      throw error;
    }
  };

  const getImageSource = async (
    name: keyof GM,
    size = DEFAULT_ICON_SIZE,
    color = DEFAULT_ICON_COLOR
  ) => {
    ensureNativeModuleAvailable();

    const glyph = resolveGlyph(name);
    const processedColor = processColor(color);
    const cacheKey = `${glyph}:${size}:${String(processedColor)}`;

    if (imageSourceCache.has(cacheKey)) {
      // FIXME: Should this check if it's an error and throw it again?
      return imageSourceCache.get(cacheKey);
    }

    try {
      const imagePath = await NativeIconAPI.getImageForFont(
        fontReference,
        glyph,
        size,
        processedColor as number // FIXME what if a non existant colour was passed in?
      );
      const value = { uri: imagePath, scale: PixelRatio.get() };
      imageSourceCache.setValue(cacheKey, value);
      return value;
    } catch (error) {
      imageSourceCache.setError(cacheKey, error as Error);
      throw error;
    }
  };

  const loadFont = async (file = fontFile) => {
    if (Platform.OS !== 'ios') {
      return;
    }
    ensureNativeModuleAvailable();

    if (!file) {
      throw new Error('Unable to load font, because no file was specified.');
    }

    const [filename, extension] = file.split('.'); // FIXME: what if filename has two dots?
    if (!extension) {
      throw new Error('Font needs a filename extensison.');
    }

    await NativeIconAPI.loadFontWithFileName(filename!, extension);
  };

  const hasIcon = (name: string) =>
    Object.prototype.hasOwnProperty.call(glyphMap, name);

  const getRawGlyphMap = () => glyphMap;

  const getFontFamily = () => fontReference;

  const IconNamespace = Object.assign(WrappedIcon, {
    getImageSource: getImageSource,
    getImageSourceSync: getImageSourceSync,
    loadFont: loadFont,
    hasIcon: hasIcon,
    getRawGlyphMap: getRawGlyphMap,
    getFontFamily: getFontFamily,
  });

  return IconNamespace;
};