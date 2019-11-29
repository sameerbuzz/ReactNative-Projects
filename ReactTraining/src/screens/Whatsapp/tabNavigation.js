import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { totalSize } from 'react-native-dimension';

import whatsappHome from './whatsappHome';
import whatsStatus from './whatsStatus';
import whatsCall from './whatsCall';
import colorPick from '../../constants/styles/color';
import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const NavTabBar = createMaterialTopTabNavigator({
  
  whatsappHome: {
    screen: whatsappHome,
  },
  whatsStatus: {
    screen: whatsStatus
  },
  whatsCall: {
    screen: whatsCall
  },
},
  {
    initialRouteName: 'whatsappHome',
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: screenHeight/50,
      },
      showIcon: false,
      style: {
        backgroundColor: '#005F53',
        marginLeft: screenWidth/8,
        height: screenWidth/8,
       
      },
      indicatorStyle: {
        backgroundColor: 'white',
        height: totalSize(0.4),
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.5,
        elevation: 0.5,
      },
    },
    swipeEnabled: true,
  },
)

export default createAppContainer(NavTabBar);