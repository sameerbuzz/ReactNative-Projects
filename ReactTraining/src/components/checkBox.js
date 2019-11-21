import CheckBox from 'react-native-check-box';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class checkBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
       <CheckBox
          checkBoxColor='black'
          onClick={this.props.checkState}
          isChecked={this.props.isChecked}
        />
      </View>
    );
  }
}
