import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//custom imports
import colorPick from '../../constants/styles/color';
import HomeScreen from './Home';
import UIDemo1 from '../UIDemo1';
import MobXDemo from '../MobXDemo';
import MobXPagination from '../Pagination/MobXPagination';
import TodoSplash from '../TodoAsync/splash';
import TodoListContainer from '../TodoAsync/TodoListContainer';
import InstaLogin from '../Instagram/Login';
import WhatsappSplash from '../Whatsapp/whatsappSplash';
import WhatsapptabNavigation from '../Whatsapp/tabNavigation';
import WhatsappHome from '../Whatsapp/Home';
import Redux from '../redux/index';
import ReduxForm from '../redux/indexForm';
import ApiIndex from '../redux/ApiIndex';
import WhatsAppIndex from '../Whatsapp/index';
// import ChatApp from '../ChatApp/App';
import OnboardingSplash from '../GroupSetGo/OnboardingSplash';
import CreateEventStep2 from '../GroupSetGo/CreateEventStep2';

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
  WhatsAppIndex: {
    screen: WhatsAppIndex,
    navigationOptions: {
      header: null,
    }
  },
  WhatsapptabNavigation: {
    screen: WhatsapptabNavigation,
  },
  WhatsappHome: WhatsappHome,
  Redux: Redux,
  ReduxForm: ReduxForm,
  ApiIndex: ApiIndex,
  WhatsappSplash: WhatsappSplash,
  // ChatApp: ChatApp,
  OnboardingSplash: {
    screen: OnboardingSplash,
    navigationOptions: {
      header: null,
    }
  },
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