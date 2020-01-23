import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles'

export interface AppProps {
    navigation?: any,
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
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.pop()} style={Styles.containerStyle}>
        <TouchableOpacity activeOpacity={1} style={Styles.dialogboxStyle}>
            <Image source={this.props.navigation.getParam('avatar')} resizeMode='cover' style={Styles.pic} />
        </TouchableOpacity>
    </TouchableOpacity>
    );
  }
}
