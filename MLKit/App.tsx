import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// custom imports
import MLKit from './src/containers/MLKit';
import TextRecognition from './src/containers/MLKit/TextRecognition/Main'

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator initialRouteName="MLKit">
      <RootStack.Screen name={"MLKit"} component={MLKit} />
      <RootStack.Screen name={"TextRecognition"} component={TextRecognition} />
    </RootStack.Navigator>
  </NavigationContainer>
  )
}
