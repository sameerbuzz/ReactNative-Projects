import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import { Images } from '../../../constants';

export interface AppProps {
  item: any,
  openChat: Function,
}

export interface AppState {
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    const { item } = this.props
    return (
      <View style={Styles.mainView}>
        <View>
          <Image source={item.photoURL === '' ? Images.imgPlaceholder : { uri: item.photoURL }} style={Styles.imgProfile} />
        </View>
        <TouchableOpacity activeOpacity={1} style={Styles.txt} onPress={() => this.props.openChat(item)}>
          <View style={Styles.msgView}>
            <Text style={Styles.nameStyle}>{item.displayName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
