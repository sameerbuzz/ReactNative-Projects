import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import ResetPassword from '../screens/ResetPassword'
import Home from '../screens/Home/Home'

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthNavigator = (): React.ReactElement => (
  <AuthStack.Navigator headerMode='screen' initialRouteName="SIGNIN">
    <AuthStack.Screen name={"SIGNIN"} component={SignIn} />
    <AuthStack.Screen name={"SIGNUP"} component={SignUp} />
    <AuthStack.Screen name={"RESETPASSWORD"} component={ResetPassword} />
  </AuthStack.Navigator>
);

const HomeNavigator = (): React.ReactElement => (
  <HomeStack.Navigator headerMode='screen' initialRouteName="HOME">
    <HomeStack.Screen name={"HOME"} component={Home} />
  </HomeStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
        <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>

  )
}