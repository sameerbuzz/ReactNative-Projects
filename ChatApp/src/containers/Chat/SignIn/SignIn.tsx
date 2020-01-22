import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert, TouchableWithoutFeedback, Keyboard, Platform, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import Styles from './Styles';
import { Strings, Color, Images } from '../../../constants';

const colors = [Color.weirdGreen, Color.tealBlue]

export interface Props {
  navigation?: any,
  updateEmail: Function,
  updateUid: Function,
  email: string,
  uid: string,
}

export interface AppState {
  email: string,
  password: string,
  animate: boolean,
  showPassword: boolean,
  bgBorder: number,
}

export default class AppComponent extends React.PureComponent<Props, AppState> {
  Animation: any;
  firstInput: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '', password: '', animate: false, showPassword: true, bgBorder: 0
    };
  }

  componentDidMount() {
    FirebaseServices.initializeFireBase()
  }

  componentWillUnmount() {
    FirebaseServices.refOff()
  }

  login = (email: string, password: string) => {
    this.setState({
      animate: true
    })
    let user = { email: email, password: password }
    FirebaseServices.login(user, this.loginSuccess, this.loginFail)
  }

  loginSuccess = (data: any) => {
    this.props.updateEmail(this.state.email)
    this.props.updateUid(data.user.uid)
    this.setState({
      animate: false
    })
    this.props.navigation.navigate('MainStack')
  }

  loginFail = (error: any) => {
    this.setState({
      animate: false
    })
    Alert.alert(
      'Alert!',
      `${error}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    )
  }

  public render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={Styles.mainView}>
          <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator} color={Color.tealBlue} />
          <View style={Styles.graphicsView}>
          <TouchableOpacity style={Styles.signupView} onPress={() => this.props.navigation.navigate('SignUp')} activeOpacity={1}>
            <Text style={Styles.signupText}>{Strings.signUpSpace}</Text>
          </TouchableOpacity>
          <Image source={Images.graphics} />
          </View>
          <View style={Styles.lowerView}>
          <Text style={Styles.signinText}>{Strings.signInSpace}</Text>
          <Text style={Styles.welcome}>{Strings.welcome}</Text>
          <TextInput
            placeholder={Strings.email}
            style={[Styles.input, { borderWidth: 1, borderColor: this.state.bgBorder === 1 ? Color.tealBlue : Color.greyish }]}
            onChangeText={(text: string) => this.setState({ email: text })}
            returnKeyType='next'
            onSubmitEditing={() => { this.firstInput.focus(); }}
            autoCorrect={false}
            keyboardType='email-address'
            onFocus={() => this.setState({ bgBorder: 1 })}
            onBlur={() => this.setState({ bgBorder: 0 })}
          />
          <View style={[Styles.passwordView, { borderWidth: 1, borderColor: this.state.bgBorder === 2 ? Color.tealBlue : Color.greyish }]}>
            <TextInput
              placeholder={Strings.password}
              style={[Styles.input, Styles.passwordText]}
              onChangeText={(text: string) => this.setState({ password: text })}
              ref={(ref) => { this.firstInput = ref; }}
              returnKeyType='done'
              onSubmitEditing={() => this.login(this.state.email, this.state.password)}
              autoCorrect={false}
              keyboardType={Platform.OS === 'android' ? 'visible-password' : 'default'}
              secureTextEntry={this.state.showPassword}
              onFocus={() => this.setState({ bgBorder: 2 })}
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
            <TouchableOpacity style={Styles.btn} onPress={() => this.login(this.state.email, this.state.password)}>
              <Text style={Styles.btnText}>{Strings.submit}</Text>
            </TouchableOpacity>
          </LinearGradient>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
