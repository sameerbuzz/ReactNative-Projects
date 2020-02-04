import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Color } from '../constants'

// custom imports
import Main from '../containers/DataBase/Main';
import ChatMain from '../containers/Chat/Main';
import SignIn from '../containers/Chat/SignIn';
import SignUp from '../containers/Chat/SignUp';
import Animate from '../containers/Animation/Animate';
import ChatList from '../containers/Chat/ChatList';
import Group from '../containers/Chat/Group'
import BottomNavigation from '../containers/Animation/BottomIndex';


const MainStack = createStackNavigator(
    {
        Main: Main,
        ChatMain: {
            screen: ChatMain,
            navigationOptions: {
                headerShown: false,
            }
        },
        Animate: Animate,
        BottomNavigation: BottomNavigation,
        ChatList: {
            screen: ChatList,
            navigationOptions: {
                headerShown: false,
            }
        },
        Group: {
            screen: Group,
            navigationOptions: {
                headerShown: false,
            }
        },
    },
    {
        initialRouteName: 'ChatList',
    },
);

const AuthStack = createStackNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                headerShown: false
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                headerShown: false
            }
        },
    },
    {
        initialRouteName: 'SignIn',
    },
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthStack: AuthStack,
        MainStack: MainStack,
    },
    {
        initialRouteName: 'AuthStack',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            headerShown: false,
        }),
    }
));
