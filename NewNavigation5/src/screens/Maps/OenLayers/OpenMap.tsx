import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface AppProps {
}

export default class OpenMap extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>App Component</Text>
      </View>
    );
  }
}
