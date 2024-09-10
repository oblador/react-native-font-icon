/**
 * This is a generated file. If you modify it manually, your changes will be lost!
 * Instead, modify the template in `generator-react-native-vector-icons`.
 *
 * MaterialIcons icon set component.
 * Usage: <MaterialIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from '@react-native-vector-icons/common';
import glyphMap from '../glyphmaps/MaterialIcons.json';

const Icon = createIconSet(glyphMap, {
  postScriptName: 'Material Icons',
  fontFileName: 'MaterialIcons.ttf',
  fontSource: require('../fonts/MaterialIcons.ttf'),
});

export default Icon;
