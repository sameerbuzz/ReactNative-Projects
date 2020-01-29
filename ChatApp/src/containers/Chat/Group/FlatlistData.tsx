import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import { Images } from '../../../constants';

interface AppProps {
  item: any,
  openChat: Function,
  selectedList: Function,
}

interface AppState {
  isSelected: boolean
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  itemSelection = () => {
    this.setState({ isSelected: !this.state.isSelected }, () => {
      { this.state.isSelected ? this.props.selectedList('select', this.props.item) : this.props.selectedList('unselect', this.props.item) }
    })
  }

  public render() {
    const { item } = this.props
    return (
      <View style={[Styles.mainView, this.state.isSelected ? Styles.selectedStyle : null]}>
        <TouchableOpacity activeOpacity={1} style={Styles.txt} onPress={this.itemSelection}>
          <View>
            <Image source={item.photoURL === '' ? Images.imgPlaceholder : { uri: item.photoURL }} style={Styles.imgProfile} />
            {this.state.isSelected ? <Image source={Images.CheckGreen} style={Styles.checkMark} /> : null}
          </View>
          <View style={Styles.msgView}>
            <Text style={Styles.nameStyle}>{item.displayName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
