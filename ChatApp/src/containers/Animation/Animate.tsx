import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

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

  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'red', width: 2, justifyContent: 'center', height: 100}}>
         <View style={{}}></View>
      </View>
    );
  }
}
