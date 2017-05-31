/**
 * Catz icon set component.
 * Created by: http://www.flaticon.com/authors/freepik
 * Usage: <Catz name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from './lib/create-icon-set';
import glyphMap from './glyphmaps/Catz.json';

const iconSet = createIconSet(glyphMap, 'Catz', 'Catz.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

