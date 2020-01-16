import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, Animated } from 'react-native';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import Styles from './Styles';
import { vh, Strings } from '../../../constants';

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
}

export default class AppComponent extends React.Component<Props, AppState> {
  Animation: any;
  constructor(props: Props) {
    super(props);
    this.Animation = new Animated.Value(0);
    this.state = {
      email: '', password: '', animate: false
    };
  }

  componentDidMount() {
    this.StartBackgroundColorAnimation();
    FirebaseServices.initializeFireBase()
  }

  componentWillUnmount() {
    FirebaseServices.refOff()
  }

  StartBackgroundColorAnimation = () => {
    this.Animation.setValue(0);

    Animated.timing(
      this.Animation,
      {
        toValue: 1,
        duration: 5000
      }).start(() => { this.StartBackgroundColorAnimation() });
  }

  login = (email: string, password: string) => {
    this.setState({
      animate: true
    })
    let user = { email: email, password: password }
    FirebaseServices.login(user, this.loginSuccess, this.loginFail)
  }

  loginSuccess = (data: any) => {
    console.log('data on success ', data.user.uid)
    this.props.updateEmail(this.state.email)
    this.props.updateUid(data.user.uid)
    console.log('set ', this.props.email, this.props.uid)
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

  public render() {

    const BackgroundColorConfig = this.Animation.interpolate(
      {
        inputRange: [0, 0.5, 1],
        outputRange: ['#08ff4d', '#288f45', '#08ff4d']

      });

    return (
      <Animated.View style={[Styles.mainView, { backgroundColor: BackgroundColorConfig }]}>
        <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator} color='black' />
        <TextInput placeholder={Strings.email} style={Styles.input} onChangeText={(text: string) => this.setState({ email: text })} />
        <TextInput placeholder={Strings.password} style={Styles.input} onChangeText={(text: string) => this.setState({ password: text })} />
        <TouchableOpacity style={Styles.btn} onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={Styles.btnText}>{Strings.signIn}</Text>
        </TouchableOpacity>
        <Text style={{ marginBottom: vh(20), color: 'white' }}>{Strings.or}</Text>
        <TouchableOpacity style={Styles.btn} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={Styles.btnText}>{Strings.signUp}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
