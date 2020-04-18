import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TextRecognition from './src/containers/TextRecognition/Main'

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator initialRouteName="TextRecognition" headerMode="none">
      <RootStack.Screen name={"TextRecognition"} component={TextRecognition} />
    </RootStack.Navigator>
  </NavigationContainer>
  )
}

