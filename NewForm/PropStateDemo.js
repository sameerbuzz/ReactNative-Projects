import React, {
    Component
} from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import ListDemo from './ShowData';
import KeyboardShift from './KeyboardShift';

export default class Data extends Component {

    constructor(){
        super()
        this.state = {
            id : new Date().getTime(),
            name : '',
            email : '',
            phone : '',
            company : '',
            userData: [],
            isHidden : true,
            isValid : true,
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
                phone : this.state.userData[currKey].phone,
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
            phone : '',
            company : '',
        })
    }

    handleOnClick = () => {
        this.allValidation;
        console.warn(this.state.isValid)
        if (this.state.isValid == true) {
        const {id, name, email, phone, company} = this.state;
       // let st = this.state
    if (name != '' && email != '' && phone != '' && company != '') {
        let payLoad = {
            id : new Date().getTime(),
            name : name,
            email : email,
            phone : phone,
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
        phone : '',
        company : '',
    })
}else{
    Alert.alert(
        'ERROR',
        'Please Enter Valid Data',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      ); 
}
}

    handleOnUpdate = () => {
        let st = this.state
    if (st.name != '' && st.email != '' && st.phone != '' && st.company != '') {
        let payLoad = {
            id : st.id,
            name : st.name,
            email : st.email,
            phone : st.phone,
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
        phone : '',
        company : '',
    })
}

allValidation = () =>{

   

    // regexName = '[A-Z][a-zA-Z ]+[a-zA-Z]$'
    // rName = regexName.test(String(this.state.name))
    
    regexEmail = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}'
    

    regexPhone = '[1-9]{1}[0-9]{9}'
    
console.warn(rEmail, rPhone)
    // rCompany = regexName.test(String(this.state.company))
   console.warn(regexEmail.test(this.state.email))
    if (regexEmail.test(this.state.email) && regexPhone.test(this.state.phone)){
        this.setState({
            isValid : true,
        })
    }else{
        this.setState({
            isValid : false,
        })
    }
}

    render() {
        return ( 
            <KeyboardShift>
        {() => (
<ScrollView>
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
                    autoCapitalize='words'
                    autoCorrect={false}
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
                    autoCapitalize='none'
                    autoCorrect={false}
                    />
                </View > 
                <View style = {styles.textViewOne} >
                    <TextInput style = {styles.nameInput} 
                    placeholder = "Enter phone no. here" 
                    placeholderTextColor='#a6c6ff' 
                    onChangeText = {(text) => this.setState({phone : text})} 
                    value = {this.state.phone}
                    returnKeyType = 'next'
                    ref={(ref) => { this.thirdInput = ref; }}
                    onSubmitEditing={() => { this.fourthInput.focus(); }}
                    autoCapitalize='words'
                    autoCorrect={false}
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
                    autoCapitalize='words'
                    autoCorrect={false}
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
            </ScrollView>
            )}
            </KeyboardShift> 
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