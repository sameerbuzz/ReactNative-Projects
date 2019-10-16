import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';

export default class Data extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : '',
            password : '',
        }
    }

    handleOnClick() {
        console.warn(this.state.name);
        console.warn(this.state.password);
    }

    render() {
        return ( 
            <View style = {styles.mainView} >
                <View style = {styles.headerView} >
                    <Text style = {styles.headerText} > LOGIN </Text>  
                </View > 
                <View style = {styles.textViewOne} >
                    <Text style = {styles.nameText}> NAME </Text> 
                    <TextInput style = {styles.nameInput} placeholder = "Enter name here" placeholderTextColor='green' onChangeText = {(text) => this.setState({name : text})} />
                </View> 
                <View style = {styles.textViewOne} >
                    <Text style = {styles.nameText} > PASSWORD </Text> 
                    <TextInput style = {styles.nameInput} placeholder = "********" placeholderTextColor='green' onChangeText = {(text) => this.setState({password : text})} />
                </View > 
                <View style = {styles.textViewOne } >
                    <TouchableOpacity style = {styles.loginBtn } onPress = {() => this.handleOnClick()} >
                    <Text style = {styles.loginText } > Show Data </Text> 
                    </TouchableOpacity > 
                    {/* <Button style = {styles.loginBtn } onPress = {() => this.handleOnClick()} title = 'Show Data'/> */}
                </View> 
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
            </View >
            <View style={styles.mainView}>
            <View style={styles.textView}>
                <View style={styles.textViewTwo}>
                    <Text style={styles.nameText}>{myname}</Text>
                </View>
            </View>
        </View>

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
});