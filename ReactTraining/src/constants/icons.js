import OcticonsI from 'react-native-vector-icons/Octicons'
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5'
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';

export const MaterialCommunityIcons = props => (
    <MaterialCommunityIconsI {...props} />
)

const Octicons = props => <OcticonsI {...props} />
const Ionicons = props => <IoniconsI {...props} />
const FontAwesome = props => <FontAwesomeI {...props} />
const FontAwesome5 = props => <FontAwesome5I {...props} />
const MaterialIcons = props => <MaterialIconsI {...props} />

export default  {
    MaterialCommunityIcons,
    FontAwesome,
    FontAwesome5,
    Octicons,
    MaterialIcons,
    Ionicons
}