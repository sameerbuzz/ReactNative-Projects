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
                    <Text style={styles.nameTextOne}>{data.item.name}</Text>
                    <Text style={styles.lineText}>___________________________</Text>
                    <Text style={styles.nameText}>{data.item.email} </Text>
                    <Text style={styles.nameText}>{data.item.designation} </Text>
                    <Text style={styles.nameText}>{data.item.company} </Text>
                    <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btnDel}  
                            onPress={() => this.props.myfunc(data.item.id)}>
                        <Text style={styles.btnStyle}>Delete</Text>
                    </TouchableOpacity>
                    <Text style={styles.btnStyleTwo}> </Text>
                    <TouchableOpacity style={styles.btnEdit} 
                            onPress={() => this.props.myEdit(data.item.id)}>
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
        shadowColor : '#fabe75',
        shadowOpacity : 30,
        shadowRadius: 5,
        shadowOffset:{  width: 15,  height: 15,  }
    },
    textViewNext: {
        flex: 1,
        flexDirection: 'column',
        borderColor : '#e3891b',
        borderWidth : 5,
        borderRadius : 25,
        backgroundColor: 'white',
        borderTopLeftRadius: 0,
    },
    nameText: {
        fontSize: 18,
        textAlign : 'center',
        padding : 5,
        color : '#e3891b',
        fontWeight: 'bold',
    },
    nameTextOne: {
        fontSize: 30,
        marginTop : 5,
        textAlign : 'center',
        color : '#e3891b',
        fontWeight : 'bold',
        },
    lineText: {
        fontSize: 22,
        textAlign : 'center',
        color : '#e3891b',
        fontWeight : 'bold',
        },
    flatStyle: {
        flex: 1,
        height: 250,
    },
    btnStyle: {
        fontSize: 20,
        padding: 10,
        color : 'white',
        fontWeight : '700',
    },
    btnDel: {
        backgroundColor: '#e3891b',
        flex: 1,
        borderBottomStartRadius: 20,
        alignItems: 'center',
    },
    btnEdit: {
        backgroundColor: '#e3891b',
        flex: 1,
        borderBottomEndRadius: 20,
        alignItems: 'center',
    },
    btnView: {
        flexDirection: 'row',
    },
});