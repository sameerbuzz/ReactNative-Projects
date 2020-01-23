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
import PicModal from '../containers/Chat/PicModal/PicModal'

const ModalStack = createStackNavigator(
    {
        PicModal: {
            screen: PicModal,
            navigationOptions: {
                headerShown: false
            }
        },
    },
    {
        initialRouteName: 'PicModal',
        mode: 'modal',
        headerMode: 'none',
        // transparentCard: true,
        // cardStyle: {
        //     opacity: 1,
        //     backgroundColor: Color.transparentBG
        // }
        defaultNavigationOptions: ({ navigation }) => ({
            cardStyle: {
                opacity: 1,
                backgroundColor: Color.transparentBG
            }
        }),

    },
);

const MainStack = createStackNavigator(
    {
        ModalStack: {
            screen: ModalStack,
            navigationOptions: {
                headerShown: false
            }
        },
        Main: Main,
        ChatMain: {
            screen: ChatMain,
            navigationOptions: {
                headerShown: false,
            }
        },
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
        ModalStack: ModalStack,
    },
    {
        initialRouteName: 'AuthStack',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            headerShown: false,
        }),
    }
));
