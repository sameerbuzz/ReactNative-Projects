import * as React from 'react';
import { View, Text, NativeModules, Button } from 'react-native';

const {ToastModule} = NativeModules

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

  callingToast = () => {
      console.warn('ok')
    ToastModule.showText('This is Android Toast Message', ToastModule.LENGTH_SHORT)
  }

  public render() {
    return (
      <View>
         <Button title='Toast' onPress={() => this.callingToast()} />
      </View>
    );
  }
}
