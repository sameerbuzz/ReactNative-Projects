import * as React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Styles from './Styles';
import FirebaseServices from '../../../utils/FirebaseServices';

export interface AppProps {
    navigation?: any,
    updateUid: Function,
    email: string,
    uid: string
}

export interface AppState {
    email: string,
    password: string,
    animate: boolean
}

export default class AppComponent extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            email: '', password: '', animate: false
        };
    }
    
    signUp = () => {
        this.setState({
            animate: true
          })
        let user = { email: this.state.email, password: this.state.password }
        FirebaseServices.signUp(user, this.loginSuccess, this.loginFail)
    }

    loginSuccess = (data: any) => {
        console.log('success')
        console.log('data on success ', data.user.uid, this.props.email)
        this.props.updateUid(data.user.uid)
        FirebaseServices.addingUser(data.user.uid, this.state.email)
        this.setState({
            animate: false
          })
        this.props.navigation.navigate('MainStack')
      }
      loginFail = (data: any) => {
        console.warn(data)
        this.setState({
          animate: false
        })
      }

      componentWillUnmount() {
        FirebaseServices.refOff()
      }

    public render() {
        return (
            <View style={Styles.mainView}>
                <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator}/>
                <TextInput placeholder='Enter Email' style={Styles.input} onChangeText={(text: string) => this.setState({ email: text })} />
                <TextInput placeholder='Enter Password' style={Styles.input} onChangeText={(text: string) => this.setState({ password: text })} />
                <TouchableOpacity style={Styles.btn} onPress={() => this.signUp()}>
                    <Text>SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
