import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface AppProps {
    id: any,
    email: string,
    openChat: Function
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
      <View style={{flex: 1, borderWidth: 2, margin: 10}}>
          <TouchableOpacity style={{padding: 10}} onPress={() => this.props.openChat(this.props.id)}>
         <Text>{this.props.email}</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
