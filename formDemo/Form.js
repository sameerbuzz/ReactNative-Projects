import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
    render() {
        return ( 
            
            <View style = {styles.mainView} >
                <View style = {styles.headerView} >
                    <Text style = {styles.headerText} > First Sample </Text>  
                </View > 
                <View style = {styles.textViewOne} >
                    <Text style = {styles.nameText}> NAME </Text> 
                    <TextInput style = {styles.nameInput} placeholder = "Enter name here" placeholderTextColor='green' />
                </View> 
                <View style = {styles.textViewOne} >
                    <Text style = {styles.nameText} > PASSWORD </Text> 
                    <TextInput style = {styles.nameInput} placeholder = "********" placeholderTextColor='green' />
                </View> 
                <View style = {styles.textViewOne } >
                    <TouchableOpacity style = {styles.loginBtn } >
                        <Text style = {styles.loginText } > Login </Text> 
                    </TouchableOpacity > 
                </View> 
            </View >
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
    },
    headerView: {
        alignItems: 'center',
        backgroundColor: '#15e8e8',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20,
    },
    textViewOne: {
        flexDirection: 'row',
        margin: 20,
    },
    nameText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'
    },
    nameInput: {
        color: 'red',
        flex: 1,
        height: 50,
        paddingLeft: 20,
        paddingRight:15,
        backgroundColor: '#c0c2c2',
        borderRadius: 25,
        marginTop: -10,
        fontSize: 18,
    },
    loginBtn: {
        flex: 1,
        backgroundColor: '#389111',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        padding: 10,
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 23,
    },
});