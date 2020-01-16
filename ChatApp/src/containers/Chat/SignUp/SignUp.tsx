import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';

// custom imports
import Styles from './Styles';
import FirebaseServices from '../../../utils/FirebaseServices';
import { } from '../../../constants';
import { ImagePickerFn } from '../../../components';

export interface AppProps {
  navigation?: any,
  email: string,
  uid: string,
  updateUid: Function,
  updateEmail: Function,
}

export interface AppState {
  email: string,
  password: string,
  animate: boolean,
  name: string,
  source: any,
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: '', password: '', animate: false, name: '',
      source: 'https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png',
    };
  }

  imagePicker = () => {
    ImagePickerFn.getSinglePic((response: string) => {
      console.log(response)
      this.setState({
        source: response
      }, () => FirebaseServices.uploadPic(response, (url: string) => {
        this.setState({
          source: url
        })
      }))
    })
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
    console.log('data on success ', data.user.uid)
    let user = { uid: data.user.uid, avatar: this.state.source, name: this.state.name, email: this.state.email, password: this.state.password }
    FirebaseServices.addingUser(user)
    this.props.updateUid(data.user.uid)
    this.props.updateEmail(this.state.email)
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
        <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator} />
        <TouchableOpacity style={Styles.imgStyle} onPress={() => this.imagePicker()}>
          <Image source={{ uri: this.state.source }} resizeMode='cover' style={Styles.imageStyle} />
        </TouchableOpacity>
        <TextInput placeholder='Enter Name' style={Styles.input} onChangeText={(text: string) => this.setState({ name: text })} />
        <TextInput placeholder='Enter Email' style={Styles.input} onChangeText={(text: string) => this.setState({ email: text })} />
        <TextInput placeholder='Enter Password' style={Styles.input} onChangeText={(text: string) => this.setState({ password: text })} />
        <TouchableOpacity style={Styles.btn} onPress={() => this.signUp()}>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
