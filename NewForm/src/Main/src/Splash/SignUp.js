import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
GoogleSignin.configure({
    webClientId:'367694714799-poek6kednpdvklqo9kgpeau214bqcfj3.apps.googleusercontent.com'
});

export default class SignUp extends Component {

    static navigationOptions = {
        title: 'Sign Up',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };
  constructor(props) {
    super(props);
    this.state = {
        type: false,
        email: '',
        isSigninInProgress: false,
        user: {
          email: '',
          id: '',
          photo: '', // url
          name: '' // full name
        },
    };
  }

  result = () => {
      this.state.email == null ? null : AsyncStorage.multiSet([['email', this.state.email],['type', JSON.stringify(this.state.type) ]])
      AsyncStorage.multiGet(['type']).then ((result) => {
            console.warn(JSON.parse(result))
            console.warn('normal-> ', this.state.email, this.state.type)
            
          })
          this.props.navigation.navigate('Screen3')
      
        
      
  }

 // check user is already present or not
 checkStatus = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  console.warn('current user -> ', currentUser)
  
  currentUser == null ? this.signIn() : this.getCurrentUserInfo()
}

// normal warnin
normalSignIn = () => {
  this.setState({type: false})
  this.result()
}

// sign in
signIn = async () => {
  try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.warn('signing in')
      this.setState({ 
        user: userInfo.user,
        email: userInfo.user.email
      });

      this.getCurrentUserInfo()

  } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.warn('cancelled the warnin')
      } else if (error.code === statusCodes.IN_PROGRESS) {
          console.warn('sign in is in progress already')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.warn('play services not available or outdated')
      } else {
          console.warn('user cancelled warnin')
    }
  }
};

// get all user data
getCurrentUserInfo = async () => {
  try {
      const userInfo = await GoogleSignin.signInSilently();
      console.warn('getting user data')
      this.setState({ user: userInfo.user, type: true, });
      console.warn('user-> ', this.state.user)
      console.warn('google-> ', this.state.user.email, this.state.type, this.state.user.photo)
      
      this.state.photo == null ? null : AsyncStorage.multiSet([['photo', this.state.photo]])
      this.result()
      
  } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          console.warn('not signed in yet')
          // user has not signed in yet
      } else {
          console.warn('some other error')
          // some other error
      }
  }
};

componentDidMount(){
  
}
  render() {
    return (
      <View style={{justifyContent: 'center',}}>
        <View style={{alignItems: 'center'}}>
        <TextInput 
        placeholder='Enter email here' 
        value={this.state.email} 
        onChangeText={(text)=> this.setState({email: text})} 
        style={styles.field}
        />
        </View>
        <View style={{ alignItems: 'center', }}>
        <TouchableOpacity onPress={this.normalSignIn} style={styles.btn}>
            <Text style={{color: 'white', padding: 10, fontWeight: 'bold', fontSize: 20}}>Sign In</Text>
            </TouchableOpacity>
            </View>
        <View style={{alignItems: 'center', marginTop: 10}}>  
          <Text> or </Text>
          <GoogleSigninButton
              style={{ width: "50%", height: 53, marginTop: 10,}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this.checkStatus}
              disabled={this.state.isSigninInProgress} />
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    field: {
        marginBottom: 10,
        height: 50,
        fontSize: 25,
        padding: 10,
        borderRadius: 15,
        borderWidth: 2,
        marginTop: 30,
        width: "90%",
    },
    btn: {
        height: 50,
        width: 100,
        backgroundColor: '#1cad9a',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
    }
})