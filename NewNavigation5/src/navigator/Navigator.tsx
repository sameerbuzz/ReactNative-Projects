import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import Home from '../screens/Home/Home';
import IDNow from '../screens/IDNow/IDNow';
import APIHit from '../screens/APIHit/APIHit';
import MyMap from '../screens/Maps/GoogleMaps';
import MarkerModal from '../screens/Maps/GoogleMaps/MarkerModal';
import OpenMap from '../screens/Maps/OenLayers/OpenMap';
import test from '../screens/Maps/GoogleMaps/test';
import Notification from '../screens/Notification/Notification';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ModalStack = createStackNavigator();
const RootStack = createStackNavigator();
console.disableYellowBox = true;
const AuthNavigator = () => (
  <AuthStack.Navigator headerMode="screen" initialRouteName="SIGNIN">
    <AuthStack.Screen name="SIGNIN" component={SignIn} />
    <AuthStack.Screen name="SIGNUP" component={SignUp} />
    <AuthStack.Screen name="RESETPASSWORD" component={ResetPassword} />
  </AuthStack.Navigator>
);

const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none" initialRouteName="MyMap">
    <HomeStack.Screen name="HOME" component={Home} />
    <HomeStack.Screen name="IDNow" component={IDNow} />
    <HomeStack.Screen name="APIHit" component={APIHit} />
    <HomeStack.Screen name="MyMap" component={MyMap} />
    <HomeStack.Screen name="OpenMap" component={OpenMap} />
    <HomeStack.Screen name="test" component={test} />
    <HomeStack.Screen name="Notification" component={Notification} />
  </HomeStack.Navigator>
);

const ModalNavigator = () => (
  <ModalStack.Navigator initialRouteName="MarkerModal" mode="modal">
    <ModalStack.Screen
      name={'MarkerModal'}
      component={MarkerModal}
      options={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    />
  </ModalStack.Navigator>
);

export interface Props {
  token: string;
  modalVisible: boolean;
}

export default class Navigator extends React.PureComponent<Props> {
  render() {
    // console.warn('my token ', this.props.token, this.props.token === '');
    return (
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          {this.props.token === '' ? (
            <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
          ) : (
            <>
              <RootStack.Screen
                name="HomeNavigator"
                component={HomeNavigator}
              />
              <RootStack.Screen
                name={'MarkerModal'}
                component={MarkerModal}
                options={{
                  ...TransitionPresets.ModalSlideFromBottomIOS,
                }}
              />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
