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

    renderItems(data){
        return(
<Text>
                 {data.item.name} 
                 {data.item.password} 
            </Text>
        )
    }

    render(){
    return ( 
        <FlatList
            style={{height: 200, width: 200, backgroundColor: '#ccc'}}
            data = {this.props.item}
            renderItem = {this.renderItems}
        />
    );}
}

