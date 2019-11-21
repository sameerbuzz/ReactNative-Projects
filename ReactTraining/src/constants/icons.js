import OcticonsI from 'react-native-vector-icons/Octicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';

export const MaterialCommunityIcons = props => (
    <MaterialCommunityIconsI {...props} />
)

const Octicons = props => <OcticonsI {...props} />
const FontAwesome = props => <FontAwesomeI {...props} />
const MaterialIcons = props => <MaterialIconsI {...props} />

export default  {
    MaterialCommunityIcons,
    FontAwesome,
    Octicons,
    MaterialIcons,
}