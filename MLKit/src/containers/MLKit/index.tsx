import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Styles from './Styles';
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '../../constants';

export interface AppProps {
  navigation?: any
}

export interface AppState {
}

const data = [
  { path: 'TextRecognition', title: 'Image Recognition' },
  // { path: 'FaceDetection', title: 'Face Detection' }, 
]

const colors = [Color.newLightBlue, Color.newBlue]

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  renderItems = (rowData: any) => {
    const { item, index } = rowData
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(item.path)} activeOpacity={0.5} >
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={Styles.cardView}>
          <Text style={Styles.cardText}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>

    )
  }

  public render() {
    return (
      <View style={Styles.MainView}>
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}
