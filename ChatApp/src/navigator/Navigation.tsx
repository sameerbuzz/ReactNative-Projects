import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// custom imports
import Main from '../containers/DataBase/Main';
import ChatMain from '../containers/Chat/Main';
import SignIn from '../containers/Chat/SignIn';
import Animate from '../containers/Animation/Animate';

const MainStack = createStackNavigator(
    {
        Main: Main,
        ChatMain: ChatMain,
        Animate: Animate,
    },
    {
        initialRouteName: 'ChatMain',
    },
);

const AuthStack = createStackNavigator(
    {
        SignIn: SignIn,
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
