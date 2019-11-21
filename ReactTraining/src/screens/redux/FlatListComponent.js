import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import CheckBox from 'react-native-check-box';
import { width, height, totalSize } from 'react-native-dimension';
import colorPick from '../../constants/styles/color';

export default class FlatListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.cardView}>
        <CheckBox
          checkBoxColor='white'
          onClick={this.props.onClick}
          isChecked={this.props.onChecked}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cardView: {
        padding: width(2),
        margin: width(5), borderRadius: 10,
        backgroundColor: colorPick.darkGreen,
        width: screenWidth / 2.35,
        marginRight: 0,
        marginBottom: 0,
        height: screenWidth / 2.35,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
})