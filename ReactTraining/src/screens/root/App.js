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
import FlatlistComponent from '../TodoAsync/FlatlistComponent';
import InstaLogin from '../Instagram/Login';

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
  FlatlistComponent: FlatlistComponent,
  InstaLogin: {
    screen: InstaLogin,
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
    headerTintColor: '#fff',
    headerBackTitleStyle: {
      color: '#fff'
    },
    headerBackTitle: null,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30,
  },
  }
},
)

export default createAppContainer(AppNavigator);