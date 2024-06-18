/**
 * Lucide icon set component.
 * Usage: <Lucide name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from './lib/create-icon-set';
import glyphMap from './glyphmaps/Lucide.json';

const iconSet = createIconSet(glyphMap, 'Lucide', 'Lucide.ttf');

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;

