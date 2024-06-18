#!/bin/bash -e

rm -rf AntDesign.js.flow Entypo.js.flow EvilIcons.js.flow Feather.js.flow \
    FontAwesome.js.flow FontAwesome5.js.flow FontAwesome5Pro.js.flow \
    Foundation.js.flow Ionicons.js.flow Lucide.js.flow MaterialCommunityIcons.js.flow \
    MaterialIcons.js.flow Octicons.js.flow SimpleLineIcons.js.flow \
    Zocial.js.flow

node bin/generate-flow AntDesign Entypo EvilIcons Feather FontAwesome \
    FontAwesome5 FontAwesome5Pro Fontisto Foundation Ionicons Lucide \
    MaterialCommunityIcons MaterialIcons Octicons SimpleLineIcons Zocial

cp *.js.flow dist/
