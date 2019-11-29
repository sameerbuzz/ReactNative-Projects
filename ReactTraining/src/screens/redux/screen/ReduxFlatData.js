import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class ReduxFlatData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItems = (rowData) => {
    console.warn('done', 'data ', rowData)
    return(
        <View style={{backgroundColor: 'red', height: 1000}}>
                {/* <Text>{rawData.fn}</Text>
                <Text>{rawData.ln}</Text>
                <Text>{rawData.place}</Text> */}
                <Text>{this.props.showData}</Text>
            </View>
    );

}

  render() {
      console.warn('ok')
    return (
      <View style={{backgroundColor: 'blue', height: 400}}>
      <FlatList
  data = {this.props.newData, console.warn( 'data=> ', this.props.newData)}
  keyExtractor={(item,index) => index.toString}
  renderItem = {this.renderItems()}
/>
  </View>
    );
  }
}
