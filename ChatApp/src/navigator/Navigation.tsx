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
import Counter from '../containers/Counter/Counter';
import Filters from '../containers/Counter/Filters';
import Toast from '../containers/Counter/Toast';
// import ColorMAtrix from '../containers/Counter/';

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
        Counter: Counter,
        Filters: Filters,
        Toast: Toast,

    },
    {
        initialRouteName: 'Filters',
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
        initialRouteName: 'MainStack',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            headerShown: false,
        }),
    }
));
