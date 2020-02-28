import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// custom imports
import Main from '../containers/DataBase/Main';
import ChatMain from '../containers/Chat/Main';
import SignIn from '../containers/Chat/SignIn';
import SignUp from '../containers/Chat/SignUp';
import Animate from '../containers/Animation/Animate';
import Reanimated from '../containers/Animation/Reanimated';
import ChatList from '../containers/Chat/ChatList';
import Group from '../containers/Chat/Group'
import BottomNavigation from '../containers/Animation/BottomIndex';
import Counter from '../containers/Counter/Counter';
import Filters from '../containers/Counter/Filters';
import Toast from '../containers/Counter/Toast';
import MLKit from '../containers/MLKit';
import TextRecognition from '../containers/MLKit/TextRecognition/Main'
import FaceDetection from '../containers/MLKit/FaceDetection/FaceDetection'
import APIHit from '../containers/HitAPI/APIHit';

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
        MLKit: MLKit,
        TextRecognition: TextRecognition,
        FaceDetection: FaceDetection,
        Reanimated: Reanimated,
        APIHit: APIHit,
    },
    {
        initialRouteName: 'APIHit',
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
        initialRouteName: 'Main',
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
