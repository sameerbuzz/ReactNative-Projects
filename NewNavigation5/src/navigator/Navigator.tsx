import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../screens/SignIn/SignIn'
import SignUp from '../screens/SignUp'
import ResetPassword from '../screens/ResetPassword'
import Home from '../screens/Home/Home'
import IDNow from '../screens/IDNow/IDNow'

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator headerMode='screen' initialRouteName="SIGNIN">
    <AuthStack.Screen name={"SIGNIN"} component={SignIn} />
    <AuthStack.Screen name={"SIGNUP"} component={SignUp} />
    <AuthStack.Screen name={"RESETPASSWORD"} component={ResetPassword} />
  </AuthStack.Navigator>
);

const HomeNavigator = () => (
  <HomeStack.Navigator headerMode='screen' initialRouteName="HOME">
    <HomeStack.Screen name={"HOME"} component={Home} />
    <HomeStack.Screen name={"IDNow"} component={IDNow} />
  </HomeStack.Navigator>
);

export interface Props {
  token: string
}

export default class Navigator extends React.PureComponent<Props>  {
  render() {
    // console.warn('my token ', this.props.token, this.props.token === ''); 
    return (
      <NavigationContainer>
        <RootStack.Navigator headerMode='none' initialRouteName="AuthNavigator">
          {this.props.token === '' ?
            <RootStack.Screen name="AuthNavigator" component={AuthNavigator} /> :
            <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />}
        </RootStack.Navigator>
      </NavigationContainer>
    )
  }
}