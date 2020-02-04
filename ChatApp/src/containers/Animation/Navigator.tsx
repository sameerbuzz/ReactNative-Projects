import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Page1 from './Page1Index'
import Page2 from './Page2'

const NavTabBar = createBottomTabNavigator({
  
  Page1: {
    screen: Page1,
  },
  Page2: {
    screen: Page2
  },
},
  {
    initialRouteName: 'Page1',
  },
)

export default createAppContainer(NavTabBar);