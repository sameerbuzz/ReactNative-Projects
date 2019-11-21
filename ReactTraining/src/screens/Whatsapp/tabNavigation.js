import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { totalSize } from 'react-native-dimension';

import whatsappHome from './whatsappHome';
import whatsCamera from './whatsCamera';
import whatsStatus from './whatsStatus';
import whatsCall from './whatsCall';

const NavTabBar = createMaterialTopTabNavigator({
  whatsCamera: {
    screen: whatsCamera,
    header: null,
  },
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
      showIcon: true,
      style: {
        backgroundColor: '#005F53',
      },
      indicatorStyle: {
        backgroundColor: 'white',
        height: totalSize(0.3),
        borderRadius: 2,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.5,
        elevation: 0.5
      },
    },
    swipeEnabled: true,
  },
)

export default createAppContainer(NavTabBar);