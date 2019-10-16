import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

export default class Listdemo extends Component {
    render(){
    return ( 
        <FlatList
            data = {this.props.item}
            renderItem = {({itemData}) => (
            <Text 
                name = {itemData.item.name} 
                password = {itemData.item.password} 
            />
        )}/>
    );
}
}

