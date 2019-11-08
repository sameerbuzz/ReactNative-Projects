import React, { Component } from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    Image,
    StyleSheet
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure({
    webClientId:'367694714799-poek6kednpdvklqo9kgpeau214bqcfj3.apps.googleusercontent.com'
});

export default class GoogleSignIn extends Component {

    static navigationOptions = {
        title: 'Google Sign In',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
      };
    constructor(props) {
        super(props);
        this.state = {
            isSigninInProgress: false,
            user: {
                email: '',
                id: '',
                givenName: '',
                familyName: '',
                photo: '', // url
                name: '' // full name
              },
            isLoginScreenPresented: true,
            signInState: true,
            btnDisable: false,
        };
    }
// sign in
    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('signing in')
            this.setState({ user: userInfo.user });
            this.getCurrentUserInfo()
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('cancelled the login')

            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('sign in is in progress already')

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play services not available or outdated')

            } else {
                console.log('user cancelled login')

            }
        }
    };
// get all user data
    getCurrentUserInfo = async () => {
        this.setState({
            signInState: false
        })
        try {
            const userInfo = await GoogleSignin.signInSilently();
            console.log('getting user data')
            this.setState({ user: userInfo.user });
            console.log('user-> ', this.state.user)
            
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                console.log('not signed in yet')
                // user has not signed in yet
            } else {
                console.log('some other error')
                // some other error
            }
        }
    };
// sign out 
    signOut = async () => {
        this.setState({btnDisable: true})
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ user: '' }); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
        this.setState({
            signInState: true,
            btnDisable: false,
        })
      };

      revokeAccess = async () => {
        try {
          await GoogleSignin.revokeAccess();
          console.log('deleted');
        } catch (error) {
          console.error(error);
        }
      };

      // check user is already present or not
checkStatus = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log('current user -> ', currentUser)
    
    currentUser == null ? this.signIn() : this.getCurrentUserInfo()
}

    render() {
        if (this.state.signInState) {
            // Showing only Sign in
        return (
            <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
                <GoogleSigninButton
                    style={{ width: "60%", height: 53,}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this.checkStatus}
                    disabled={this.state.isSigninInProgress} />
                </View>
            )}
        else{
            // showing only user data and signout btn
        return (
            <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>  
                <Image source={{uri: this.state.user.photo}} style={{height: 200 , width: 200, borderRadius: 100, margin: 10}}/>
                <Text style={styles.info}>{this.state.user.name}</Text>
                <Text style={styles.info2}>{this.state.user.email}</Text>
                <TouchableOpacity onPress={this.signOut} style={styles.signOut} disabled={this.state.btnDisable}>
                    <Text style={{fontSize: 15, color: 'grey', fontWeight: 'bold'}}>Sign Out</Text>
                    </TouchableOpacity>   
                </View>
            );
        }
    }
}

const styles= StyleSheet.create({
    info: {
        fontWeight: 'bold',
        fontSize: 30,
        margin: 10
    },
    info2: {
        
        fontSize: 25,
        margin: 10
    },
    signOut: {
        backgroundColor: 'white', 
        padding: 10, 
        borderRadius: 2, 
        borderWidth: 2, 
        borderColor: 'grey',
    }
})