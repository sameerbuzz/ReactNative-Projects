import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Navigator from './Navigator'

export interface AppProps {
  showView: Function,
  view: boolean,
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
      <View style={{ flex: 1 }}>
        <Navigator />
        {this.props.view && 
        <View style={{height: 300}}></View>
  }
      </View>
    );
  }
}
