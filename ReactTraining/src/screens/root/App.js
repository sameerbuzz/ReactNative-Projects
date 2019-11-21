import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';

//custom imports
import colorPick from '../../constants/styles/color';
import HomeScreen from './Home';
import UIDemo1 from '../UIDemo1';
import MobXDemo from '../MobXDemo';
import MobXPagination from '../Pagination/MobXPagination';
import TodoSplash from '../TodoAsync/splash';
import TodoListContainer from '../TodoAsync/TodoListContainer';
import FlatlistComponent from '../TodoAsync/FlatlistComponent';
import InstaLogin from '../Instagram/Login';
import WhatsappSplash from '../Whatsapp/whatsappSplash';
import WhatsapptabNavigation from '../Whatsapp/tabNavigation';
import WhatsappHome from '../Whatsapp/home';
import Redux from '../redux/index';

const AppNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  UIDemo1: {
    screen: UIDemo1,
    navigationOptions: {
      header: null,
    }
  },
  MobXDemo: MobXDemo,
  MobXPagination: MobXPagination,
  TodoSplash: TodoSplash,
  TodoListContainer: TodoListContainer,
  InstaLogin: {
    screen: InstaLogin,
    navigationOptions: {
      header: null,
    }
  },
  WhatsappSplash: {
    screen: WhatsappSplash,
    navigationOptions: {
      header: null,
    }
  },
  WhatsapptabNavigation: {
    screen: WhatsapptabNavigation,
  },
  WhatsappHome: WhatsappHome,
  Redux: Redux,
},

{
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colorPick.darkGreen 
  },
    headerTintColor: 'white',
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
  },
  }
},
)

export default createAppContainer(AppNavigator);