import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

// custom imports
import FirebaseServices from '../../utils/FirebaseServices';
import Styles from './Styles';

export interface AppProps {
    navigation: any
}

export interface AppState {
    email: string,
    password: string
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
        email: '', password: ''
    };
  }

  componentDidMount(){
    FirebaseServices.initializeFireBase()
  }

  loginSuccess = () => {
      console.warn('success')
      this.props.navigation.navigate('ChatMain')
  }

  loginFail = () => {
    console.warn('failed')
}

  login = (email: string, password: string) => {
    let user = {email: email, password: password }
    FirebaseServices.login(user, this.loginSuccess, this.loginFail)
  }

  public render() {
    return (
        <View style={Styles.mainView}>
        <TextInput placeholder='Enter Email' style={Styles.input} onChangeText={(text: string) => this.setState({email: text})} />
        <TextInput placeholder='Enter Password' style={Styles.input} onChangeText={(text: string) => this.setState({password: text})} />
        <TouchableOpacity style={Styles.btn} onPress={() => this.login(this.state.email, this.state.password)}>
          <Text>SignIn</Text>
          </TouchableOpacity>
     </View>
    );
  }
}
