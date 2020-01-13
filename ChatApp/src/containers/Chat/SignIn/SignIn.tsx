import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

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
}

export default class AppComponent extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '', password: ''
    };
  }

  componentDidMount() {
    FirebaseServices.initializeFireBase()
  }

  loginSuccess = (data: any) => {
    console.log('success')
    console.log('data on success ', data.user.uid, this.props.email)
    this.props.updateUid(data.user.uid)
    this.props.navigation.navigate('ChatMain', {userId: data.user.uid})
  }

  login = (email: string, password: string) => {
    this.props.updateEmail(email)
    let user = { email: email, password: password }
    FirebaseServices.login(user, this.loginSuccess)
  }

  public render() {
    return (
      <View style={Styles.mainView}>
        <TextInput placeholder='Enter Email' style={Styles.input} onChangeText={(text: string) => this.setState({ email: text })} />
        <TextInput placeholder='Enter Password' style={Styles.input} onChangeText={(text: string) => this.setState({ password: text })} />
        <TouchableOpacity style={Styles.btn} onPress={() => this.login(this.state.email, this.state.password)}>
          <Text>SignIn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
