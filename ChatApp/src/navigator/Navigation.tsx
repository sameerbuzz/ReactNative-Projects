import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// custom imports
import Main from '../containers/DataBase/Main';
import ChatMain from '../containers/Chat/Main';
import SignIn from '../containers/Chat/SignIn';
import SignUp from '../containers/Chat/SignUp';
import Animate from '../containers/Animation/Animate';
import ChatList from '../containers/Chat/ChatList';

const MainStack = createStackNavigator(
    {
        Main: Main,
        ChatMain: ChatMain,
        Animate: Animate,
        ChatList: {
            screen: ChatList,
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
