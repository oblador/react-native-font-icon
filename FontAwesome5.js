/**
 * FontAwesome5 icon set component.
 * Usage: <FontAwesome5 name="icon-name" size={20} color="#4F8EF7" />
 */

import React, {PureComponent} from 'react';

import {
  Platform,
  Text
} from 'react-native';

import PropTypes from 'prop-types';

import createIconSet, {
  DEFAULT_ICON_COLOR,
  DEFAULT_ICON_SIZE
} from './lib/create-icon-set';

import glyphMap from './glyphmaps/FontAwesome5.json';

import createIconButtonComponent from './lib/icon-button';
import createTabBarItemIOSComponent from './lib/tab-bar-item-ios';
import createToolbarAndroidComponent from './lib/toolbar-android';

export const FA5Types = {
  regular: 0,
  light: -1,
  solid: 1,
  brand: 2
};

export function FA5iconSet(pro_version = false) {
  const version = pro_version ? 'Pro' : 'Free';
  const familyName = 'Font Awesome 5 ' + version;

  const BrandsSet = createIconSet(
    glyphMap,
    'Font Awesome 5 Brands',
    'FontAwesome5_Brands.otf'
  );

  const RegularSet = createIconSet(
    glyphMap,
    familyName,
    'FontAwesome5_Regular.otf'
  );

  const LightSet = pro_version
    ? createIconSet(
      glyphMap,
      familyName,
      'FontAwesome5_Light.otf'
    )
    : RegularSet;

  const SolidSet = createIconSet(
    glyphMap,
    familyName,
    'FontAwesome5_Solid.otf'
  );

  class FA5icon extends PureComponent {
    static propTypes = {
      brand: PropTypes.bool,
      light: PropTypes.bool,
      solid: PropTypes.bool,
      type: PropTypes.oneOf(Object.keys(FA5Types)),
      name: PropTypes.oneOf(Object.keys(glyphMap)),
      size: PropTypes.number,
      color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      children: PropTypes.node,
      style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    };

    static defaultProps = {
      size: DEFAULT_ICON_SIZE,
      allowFontScaling: false,
      color: DEFAULT_ICON_COLOR,
      type: FA5Types.regular,
      brand: false,
      light: false,
      solid: false
    };

    static Brands = BrandsSet;
    static Light = LightSet;
    static Regular = RegularSet;
    static Solid = SolidSet;

    render() {
      var weight;
      var IconSet;

      var type = this.props.type;

      const brand = this.props.brand;
      const light = this.props.light;
      const solid = this.props.solid;

      if (brand)
        type = FA5Types.brand
      else if (pro_version && light)
        type = FA5Types.light;
      else if (solid)
        type = FA5Types.solid;

      switch (type) {
        case FA5Types.brand:
          weight = '500';
          IconSet = BrandsSet;
          break;
        case FA5Types.light:
          weight = '200';
          IconSet = LightSet;
          break;
        case FA5Types.solid:
          weight = '700';
          IconSet = SolidSet;
          break;
        default:
          weight = '400';
          IconSet = RegularSet;
          break;
      }

      return (
        <IconSet {...this.props} extraStyle={{
          fontWeight: Platform.OS === 'ios' ? weight : 'normal'
        }} />
      );
    }
  }

  return FA5icon;
}

const iconSet = FA5iconSet(false);

export default iconSet;
