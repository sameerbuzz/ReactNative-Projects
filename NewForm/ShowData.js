import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

function Item({myname}) {
    return(
        <View style={styles.mainView}>
               
                <View style={styles.textView}>
                    <View style={styles.textViewTwo}>
                        <Text style={styles.nameText}>{myname}</Text>
                    </View>
                </View>
              
            </View>
    );
}

export default function Listdemo() {
    return ( 
        <FlatList
            data = {DATA}
            renderItem = {({item}) => (
            <Item 
                img = {item.img} 
                myname = {item.myname} 
                mydesc = {item.mydesc} 
                time = {item.time}
            />
        )}/>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 30,
        paddingBottom: 0,
    },
    textView: {
        flex: 0.7,
        flexDirection: 'row',
    },
    textViewTwo: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
    },
})