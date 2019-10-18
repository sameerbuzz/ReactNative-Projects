import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default class Listdemo extends Component {

    renderItems = (data) => {
        
        return(
            <ScrollView>
            <View style={styles.mainViewTwo}>
                <View style={styles.textViewNext}>
                    <Text style={styles.nameText}>Name : {data.item.name}</Text>
                    <Text style={styles.nameText}>Email : {data.item.email} </Text>
                    <Text style={styles.nameText}>Designation : {data.item.designation} </Text>
                    <Text style={styles.nameText}>Company : {data.item.company} </Text>
                    <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btnDel}  onPress={() => this.props.myfunc(data.item.id)}>
                        <Text style={styles.btnStyle}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnEdit} onPress={() => this.props.myEdit(data.item.id)}>
                        <Text style={styles.btnStyle}>Edit</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }

    render(){
    return ( 
        <FlatList
            style={styles.flatStyle}
            data = {this.props.item}
            keyExtractor={(item,index) => index.toString}
            renderItem = {this.renderItems}
            
        />
    );}
}

const styles = StyleSheet.create({
    mainViewTwo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 30,
    },
    textViewNext: {
        flex: 1,
        flexDirection: 'column',
        borderColor : '#16c6f2',
        borderWidth : 5,
        borderRadius : 25,
        backgroundColor: '#a1f0ee',
    },
    nameText: {
        fontSize: 20,
        padding: 10,
    },
    flatStyle: {
        flex: 1,
        height: 250,
    },
    btnStyle: {
        fontSize: 20,
        padding: 10,
    },
    btnDel: {
        backgroundColor: '#16c6f2',
        flex: 1,
        borderBottomStartRadius: 20,
        alignItems: 'center',
    },
    btnEdit: {
        backgroundColor: '#16c6f2',
        flex: 1,
        borderBottomEndRadius: 20,
        alignItems: 'center',
    },
    btnView: {
        flexDirection: 'row',
    },
});