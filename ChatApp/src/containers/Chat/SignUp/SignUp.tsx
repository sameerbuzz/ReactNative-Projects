import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, TouchableWithoutFeedback, Keyboard, Platform, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

// custom imports
import Styles from './Styles';
import FirebaseServices from '../../../utils/FirebaseServices';
import { Color, Strings, Images } from '../../../constants';
import { ImagePickerFn } from '../../../components';

const colors = [Color.weirdGreen, Color.tealBlue]

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
  bgBorder: number,
  showPassword: boolean,
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  firstInput: any;
  secondInput: any;
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: '', password: '', animate: false, name: '', bgBorder: 0, showPassword: true,
      source: '',
    };
  }

  imagePicker = () => {
    ImagePickerFn.getSinglePic((response: string) => {
      this.setState({
        source: response
      })
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
    FirebaseServices.uploadPic(data.user.uid, this.state.source, (url: string) => {
      let user = { uid: data.user.uid, avatar: url, name: this.state.name, email: this.state.email, password: this.state.password }
      FirebaseServices.addingUser(user)
    })
    this.setState({
      animate: false
    }, () => {
      this.props.updateUid(data.user.uid)
      this.props.updateEmail(this.state.email)
      this.props.navigation.navigate('MainStack')
    })
  }

  loginFail = (data: any) => {
    Alert.alert(
      'Alert!',
      `${data}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    )
    this.setState({
      animate: false
    })
  }

  componentWillUnmount() {
    FirebaseServices.refOff()
  }

  public render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={Styles.outerMainView}>
          <TouchableOpacity style={Styles.headerView} onPress={() => this.props.navigation.pop()} activeOpacity={1}>
            <Image source={Images.backBtn} />
            <Text style={Styles.headerTxt}>{Strings.signInSpace}</Text>
          </TouchableOpacity>
          <View style={Styles.mainView}>
            <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator} color={Color.tealBlue} />
            <Text style={Styles.signupText}>{Strings.signUpSpace}</Text>
            <TouchableOpacity style={Styles.imgStyle} onPress={() => this.imagePicker()} activeOpacity={1}>
              {this.state.source === '' ? <Image source={Images.imgPlaceholder} resizeMode='cover' style={Styles.imageStyle} /> :
                <Image source={{ uri: this.state.source }} resizeMode='cover' style={Styles.imageStyle} />}
              <Image source={Images.edit} style={Styles.edit} />
            </TouchableOpacity>
            <TextInput
              placeholder={Strings.name}
              style={[Styles.input, { borderWidth: 1, borderColor: this.state.bgBorder === 1 ? Color.tealBlue : Color.greyish }]}
              onChangeText={(text: string) => this.setState({ name: text })}
              returnKeyType='next'
              onSubmitEditing={() => { this.firstInput.focus(); }}
              autoCorrect={false}
              keyboardType='default'
              onFocus={() => this.setState({ bgBorder: 1 })}
              onBlur={() => this.setState({ bgBorder: 0 })}
            />
            <TextInput
              placeholder={Strings.email}
              style={[Styles.input, { borderWidth: 1, borderColor: this.state.bgBorder === 2 ? Color.tealBlue : Color.greyish }]}
              onChangeText={(text: string) => this.setState({ email: text })}
              ref={(ref) => { this.firstInput = ref; }}
              returnKeyType='next'
              onSubmitEditing={() => { this.secondInput.focus(); }}
              autoCorrect={false}
              keyboardType='email-address'
              onFocus={() => this.setState({ bgBorder: 2 })}
              onBlur={() => this.setState({ bgBorder: 0 })}
            />
            <View style={[Styles.passwordView, { borderWidth: 1, borderColor: this.state.bgBorder === 3 ? Color.tealBlue : Color.greyish }]}>
              <TextInput
                placeholder={Strings.password}
                style={[Styles.input, Styles.passwordText]}
                onChangeText={(text: string) => this.setState({ password: text })}
                ref={(ref) => { this.secondInput = ref; }}
                returnKeyType='done'
                onSubmitEditing={() => this.signUp()}
                autoCorrect={false}
                keyboardType='default'
                secureTextEntry={this.state.showPassword}
                onFocus={() => this.setState({ bgBorder: 3 })}
                onBlur={() => this.setState({ bgBorder: 0 })}
              />
              <TouchableOpacity
                style={Styles.eyeView}
                activeOpacity={1}
                onPress={() => this.setState({ showPassword: !this.state.showPassword })}
              >
                <Image source={Images.eye} />
              </TouchableOpacity>
            </View>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={Styles.gradient}>
              <TouchableOpacity style={Styles.btn} onPress={() => this.signUp()}>
                <Text style={Styles.btnText}>{Strings.createAcc}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
