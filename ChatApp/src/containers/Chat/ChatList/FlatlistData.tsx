import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export interface AppProps {
  item: any,
  openChat: Function,
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
      <View style={Styles.mainView}>
        <TouchableOpacity style={Styles.txt} onPress={() => this.props.openChat(this.props.item.key, this.props.item.displayName)}>
          <Text style={{ color: 'white' }}>{this.props.item.displayName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
