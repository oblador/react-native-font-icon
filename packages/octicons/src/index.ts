/**
 * This is a generated file. If you modify it manually, your changes will be lost!
 * Instead, modify the template in `generator-react-native-vector-icons`.
 *
 * Octicons icon set component.
 * Usage: <Octicons name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from '@react-native-vector-icons/common';
import glyphMap from '../glyphmaps/Octicons.json';

const Icon = createIconSet(glyphMap, {
  postscriptName: 'Octicons',
  fontFilename: 'Octicons.ttf',
  fontSource: require('../fonts/Octicons.ttf'),
});

export default Icon;
