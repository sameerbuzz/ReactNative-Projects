import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import ListDemo from './ShowData';
export default class Data extends Component {

    constructor(){
        super()
        this.state = {
            id : new Date().getTime(),
            name : '',
            email : '',
            designation : '',
            company : '',
            userData: [],
            isHidden : true,
        }
    }

    handleEdit = (key) => {
       currKey = this.state.userData.findIndex(keyy => keyy.id == key)
        this.setState(
            {
                isHidden : false,
                id : this.state.userData[currKey].id,
                name : this.state.userData[currKey].name,
                email : this.state.userData[currKey].email,
                designation : this.state.userData[currKey].designation,
                company : this.state.userData[currKey].company,
                userData : this.state.userData,
            }
        );
    }
 

    deleteData = (key) => {
        temp = this.state.userData;
        // get data in temp where id != key
        temp = temp.filter(temp => temp.id != key)
        this.setState({
            userData : temp,
        })
        this.setState({
            isHidden :true,
            name : '',
            email : '',
            designation : '',
            company : '',
        })
    }

    handleOnClick = () => {
        const {id, name, email, designation, company} = this.state;
       // let st = this.state
    if (name != '' && email != '' && designation != '' && company != '') {
        let payLoad = {
            id : new Date().getTime(),
            name : name,
            email : email,
            designation : designation,
            company : company,
        };
        let userData = this.state.userData;
        userData.push(payLoad);
        this.setState(
            {
            userData: userData,
            }
        );
    }
    
    this.setState({
        name : '',
        email : '',
        designation : '',
        company : '',
    })
}

    handleOnUpdate = () => {
        let st = this.state
    if (st.name != '' && st.email != '' && st.designation != '' && st.company != '') {
        let payLoad = {
            id : st.id,
            name : st.name,
            email : st.email,
            designation : st.designation,
            company : st.company,
        };
        let userData = st.userData;
        userData[currKey] = payLoad;
        this.setState(
            {
            userData: userData,
            }
        );
    }
    this.setState({
        isHidden : true,
        name : '',
        email : '',
        designation : '',
        company : '',
    })
}

    render() {
        return ( 
            <View style = {styles.mainView} >
                <View style = {styles.headerView} >
                    <Text style = {styles.headerText} > LOGIN </Text>  
                </View > 
                <View style = {styles.textViewOne} >
                    <TextInput style = {styles.nameInput} 
                    placeholder = "Enter name here" 
                    placeholderTextColor='#a6c6ff' 
                    onChangeText = {(text) => this.setState({name : text})} 
                    value = {this.state.name} 
                    returnKeyType = 'next' 
                    onSubmitEditing={() => { this.secondInput.focus(); }}
                    />
                </View> 
                <View style = {styles.textViewOne} >
                    <TextInput style = {styles.nameInput} 
                    placeholder = "Enter email here" 
                    placeholderTextColor='#a6c6ff' 
                    onChangeText = {(text) => this.setState({email : text})} 
                    value = {this.state.email}
                    returnKeyType = 'next'
                    ref={(ref) => { this.secondInput = ref; }}
                    onSubmitEditing={() => { this.thirdInput.focus(); }}
                    />
                </View > 
                <View style = {styles.textViewOne} >
                    <TextInput style = {styles.nameInput} 
                    placeholder = "Enter Designation here" 
                    placeholderTextColor='#a6c6ff' 
                    onChangeText = {(text) => this.setState({designation : text})} 
                    value = {this.state.designation}
                    returnKeyType = 'next'
                    ref={(ref) => { this.thirdInput = ref; }}
                    onSubmitEditing={() => { this.fourthInput.focus(); }}
                    />
                </View > 
                <View style = {styles.textViewOne} >
                    <TextInput style = {styles.nameInput} 
                    placeholder = "Enter Company here" 
                    placeholderTextColor='#a6c6ff' 
                    onChangeText = {(text) => this.setState({company : text})} 
                    value = {this.state.company} 
                    returnKeyType = 'next'
                    ref={(ref) => { this.fourthInput = ref; }}
                    onSubmitEditing={(this.state.isHidden == true) ? this.handleOnClick : this.handleOnUpdate}
                    />
                </View > 
                <View style = {styles.textViewOne } >
                    <TouchableOpacity style = {styles.loginBtn } 
                    onPress = {(this.state.isHidden == true) ? this.handleOnClick : this.handleOnUpdate} 
                    >
                    <Text style = {styles.loginText } > {(this.state.isHidden == true) ? 'Show Data' : 'Update Data' } 
        
                    </Text> 
                    </TouchableOpacity > 
                </View>  
                <ListDemo
                    item = {this.state.userData}
                    myfunc = {this.deleteData}
                    myEdit = {this.handleEdit}
                    />       
            </View >    
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
    },
    headerView: {
        alignItems: 'center',
        backgroundColor: '#186cf2',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20,
        color : 'white',
    },
    textViewOne: {
        flexDirection: 'row',
        margin: 20,
    },
    nameText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    nameInput: {
        color: '#186cf2',
        flex: 1.5,
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: -10,
        fontSize: 18,
        borderColor : '#186cf2',
        borderWidth : 2,
        textAlign : 'center',
        fontWeight: 'bold',
        fontFamily : 'Verdana',
    },
    loginBtn: {
        flex : 1,
        backgroundColor: '#186cf2',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        padding: 10,
        width: 200,
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 23,
        color : 'white',
    },
    mainViewTwo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 500,
        marginLeft: 30,
        
    },
    textViewNext: {
        flex: 0.7,
        flexDirection: 'row',
    },
    textViewTwoNext: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
    },
    nameTextNext: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
    },
});