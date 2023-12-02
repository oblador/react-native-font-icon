import AntD from '@react-native-vector-icons/antdesign';
import Entypo from '@react-native-vector-icons/entypo';
import EvilIcons from '@react-native-vector-icons/evilicons';
import Feather from '@react-native-vector-icons/feather';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import {
  FontAwesome5,
  FontAwesome5Pro,
} from '@react-native-vector-icons/fontawesome5';
import {
  FontAwesome6,
  FontAwesome6Pro,
} from '@react-native-vector-icons/fontawesome6';
import Fontisto from '@react-native-vector-icons/fontisto';
import Foundation from '@react-native-vector-icons/foundation';
import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialIcons from '@react-native-vector-icons/materialicons';
import MaterialCommunityIcons from '@react-native-vector-icons/materialcommunityicons';
import Octicons from '@react-native-vector-icons/octicons';
import SimpleLineIcons from '@react-native-vector-icons/simplelineicons';
import Zocial from '@react-native-vector-icons/zocial';
import AntDGlyphs from '@react-native-vector-icons/antdesign/glyphmaps/AntDesign.json';
import EntypoGlyphs from '@react-native-vector-icons/entypo/glyphmaps/Entypo.json';
import EvilIconsGlyphs from '@react-native-vector-icons/evilicons/glyphmaps/EvilIcons.json';
import FeatherGlyphs from '@react-native-vector-icons/feather/glyphmaps/Feather.json';
import FontAwesome5Glyphs from '@react-native-vector-icons/fontawesome5/glyphmaps/FontAwesome5Free.json';
import FontAwesome5Meta from '@react-native-vector-icons/fontawesome5/glyphmaps/FontAwesome5Free_meta.json';
import FontAwesome5ProGlyphs from '@react-native-vector-icons/fontawesome5/glyphmaps/FontAwesome5Pro.json';
import FontAwesome5ProMeta from '@react-native-vector-icons/fontawesome5/glyphmaps/FontAwesome5Pro_meta.json';
import FontAwesomeGlyphs from '@react-native-vector-icons/fontawesome/glyphmaps/FontAwesome.json';
import FontAwesome6Glyphs from '@react-native-vector-icons/fontawesome6/glyphmaps/FontAwesome6Free.json';
import FontAwesome6Meta from '@react-native-vector-icons/fontawesome6/glyphmaps/FontAwesome6Free_meta.json';
import FontAwesome6ProGlyphs from '@react-native-vector-icons/fontawesome6/glyphmaps/FontAwesome6Pro.json';
import FontAwesome6ProMeta from '@react-native-vector-icons/fontawesome6/glyphmaps/FontAwesome6Pro_meta.json';
import FontistoGlyphs from '@react-native-vector-icons/fontisto/glyphmaps/Fontisto.json';
import FoundationGlyphs from '@react-native-vector-icons/foundation/glyphmaps/Foundation.json';
import IoniconsGlyphs from '@react-native-vector-icons/ionicons/glyphmaps/Ionicons.json';
import MaterialIconsGlyphs from '@react-native-vector-icons/materialicons/glyphmaps/MaterialIcons.json';
import MaterialCommunityIconsGlyphs from '@react-native-vector-icons/materialcommunityicons/glyphmaps/MaterialCommunityIcons.json';
import OcticonsGlyphs from '@react-native-vector-icons/octicons/glyphmaps/Octicons.json';
import SimpleLineIconsGlyphs from '@react-native-vector-icons/simplelineicons/glyphmaps/SimpleLineIcons.json';
import ZocialGlyphs from '@react-native-vector-icons/zocial/glyphmaps/Zocial.json';

const groupGlyphNames = (glyphMap: Record<string, number>) => {
  const result: Record<number, string[]> = {};

  Object.entries(glyphMap).forEach(([glyphName, glyphValue]) => {
    result[glyphValue] ||= [];

    result[glyphValue].push(glyphName);
  });

  return Object.values(result);
};

const iconSets = [
  { name: 'AntD', component: AntD, glyphNames: groupGlyphNames(AntDGlyphs) },
  {
    name: 'Entypo',
    component: Entypo,
    glyphNames: groupGlyphNames(EntypoGlyphs),
  },
  {
    name: 'EvilIcons',
    component: EvilIcons,
    glyphNames: groupGlyphNames(EvilIconsGlyphs),
  },
  {
    name: 'Feather',
    component: Feather,
    glyphNames: groupGlyphNames(FeatherGlyphs),
  },
  {
    name: 'FontAwesome',
    component: FontAwesome,
    glyphNames: groupGlyphNames(FontAwesomeGlyphs),
  },
  {
    name: 'FontAwesome5',
    component: FontAwesome5,
    glyphNames: groupGlyphNames(FontAwesome5Glyphs),
    meta: FontAwesome5Meta,
  },
  {
    name: 'FontAwesome5Pro',
    component: FontAwesome5Pro,
    glyphNames: groupGlyphNames(FontAwesome5ProGlyphs),
    meta: FontAwesome5ProMeta,
  },
  {
    name: 'FontAwesome6',
    component: FontAwesome6,
    glyphNames: groupGlyphNames(FontAwesome6Glyphs),
    meta: FontAwesome6Meta,
  },
  {
    name: 'FontAwesome6Pro',
    component: FontAwesome6Pro,
    glyphNames: groupGlyphNames(FontAwesome6ProGlyphs),
    meta: FontAwesome6ProMeta,
  },
  {
    name: 'Fontisto',
    component: Fontisto,
    glyphNames: groupGlyphNames(FontistoGlyphs),
  },
  {
    name: 'Foundation',
    component: Foundation,
    glyphNames: groupGlyphNames(FoundationGlyphs),
  },
  {
    name: 'Ionicons',
    component: Ionicons,
    glyphNames: groupGlyphNames(IoniconsGlyphs),
  },
  {
    name: 'MaterialIcons',
    component: MaterialIcons,
    glyphNames: groupGlyphNames(MaterialIconsGlyphs),
  },
  {
    name: 'MaterialCommunityIcons',
    component: MaterialCommunityIcons,
    glyphNames: groupGlyphNames(MaterialCommunityIconsGlyphs),
  },
  {
    name: 'Octicons',
    component: Octicons,
    glyphNames: groupGlyphNames(OcticonsGlyphs),
  },
  {
    name: 'SimpleLineIcons',
    component: SimpleLineIcons,
    glyphNames: groupGlyphNames(SimpleLineIconsGlyphs),
  },
  {
    name: 'Zocial',
    component: Zocial,
    glyphNames: groupGlyphNames(ZocialGlyphs),
  },
];

export default iconSets;