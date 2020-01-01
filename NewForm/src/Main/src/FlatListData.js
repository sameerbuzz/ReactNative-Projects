import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const column = 1

export default class FlatListData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {item} = this.props
    return (
        <View style={styles.card}>
        <Image
          source={{ uri: item.avatar }}
          style={{ height: 60, width: 60, borderRadius: 10 }}
          defaultSource={require('../assets/download3.jpeg')}
        />
        <Text style={{ paddingTop: 15, }}>{item.first_name} {item.last_name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        backgroundColor: '#78a6f0',
        borderRadius: 20,
        padding: 20,
        marginVertical: 20,
        marginRight: column === 2 ? 10 : 0,
        width: column === 1 ? 300 : 175
      },
})
