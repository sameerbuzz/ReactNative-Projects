import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export interface AppProps {
    navigation?: any
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
      <View style={Styles.MainView}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('TextRecognition')} style={Styles.cardView} >
             <Text>Image Recognition</Text>
             </TouchableOpacity>
      </View>
    );
  }
}
