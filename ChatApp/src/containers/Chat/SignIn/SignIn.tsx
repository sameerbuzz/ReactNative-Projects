import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import {vh, vw} from '../../../constants';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import Styles from './Styles';

export interface Props {
  navigation ?: any,
  updateEmail: Function,
  updateUid: Function,
  email: string,
}

export interface AppState {
  email: string,
  password: string,
  animate: boolean,
}

export default class AppComponent extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '', password: '', animate: false
    };
  }

  componentDidMount() {
    FirebaseServices.initializeFireBase()
  }

  componentWillUnmount() {
    FirebaseServices.refOff()
  }
  
  loginSuccess = (data: any) => {
    console.log('success')
    console.log('data on success ', data.user.uid, this.props.email)
    this.props.updateUid(data.user.uid)
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

  login = (email: string, password: string) => {
    this.setState({
      animate: true
    })
    this.props.updateEmail(email)
    let user = { email: email, password: password }
    FirebaseServices.login(user, this.loginSuccess, this.loginFail)
  }

  public render() {
    return (
      <View style={Styles.mainView}>
        <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator}/>
        <TextInput placeholder='Enter Email' style={Styles.input} onChangeText={(text: string) => this.setState({ email: text })} />
        <TextInput placeholder='Enter Password' style={Styles.input} onChangeText={(text: string) => this.setState({ password: text })} />
        <TouchableOpacity style={Styles.btn} onPress={() => this.login(this.state.email, this.state.password)}>
          <Text>SignIn</Text>
        </TouchableOpacity>
        <Text style={{marginBottom: vh(20)}}>or</Text>
        <TouchableOpacity style={Styles.btn} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
