import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

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
      <View>
         <Text>App Component 1</Text>
          <Button title='Show or Hide' onPress={() => this.props.showView()} />
      </View>
    );
  }
}
