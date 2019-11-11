import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import colorPick from '../../constants/styles/color';

import HomeScreen from './Home';
import UIDemo1 from '../UIDemo1';
import MobXDemo from '../MobXDemo';

const AppNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  UIDemo1: {
    screen: UIDemo1,
    navigationOptions: {
      header: null,
    }
  },
  MobXDemo: MobXDemo,
},
{
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colorPick.darkGreen 
  },
    headerTintColor: 'white',
    headerBackTitle: null,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
  },
  }
},
)

export default createAppContainer(AppNavigator);