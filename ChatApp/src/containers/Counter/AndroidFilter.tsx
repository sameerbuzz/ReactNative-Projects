import * as React from 'react';
import { View, StyleSheet, Text, NativeModules } from 'react-native';

const {ToastModule} = NativeModules

export interface AppProps {
}

export interface AppState {
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  callingFilter = () => {

  }

  public render() {
    return (
      <View>
         <Text>App Component</Text>
      </View>
    );
  }
}
