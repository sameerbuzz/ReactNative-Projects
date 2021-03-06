import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { incrementCounter, checkState, checkingState, mydataArray } from '../action/action';
import CheckBox from 'react-native-check-box';

import { width, totalSize } from 'react-native-dimension';
import FlatListComponent from './FlatListComponent';


class home extends Component {

  constructor(props) {
    super(props);
  }

  toggleState (id ) {
    let temp = this.props.dataArray
    let index = temp.findIndex(a => a.id === id)
        if (index !== -1){
          temp[index].isCompleted = !temp[index].isCompleted
            this.props.checkingState(temp[index].isCompleted)
        }       
}

renderItem = (rowData) => {
  const {item} = rowData
  return(
    <FlatListComponent 
    onClick = {() => this.toggleState(item.id)}
    onChecked = {item.isCompleted}
    />
  );
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={this.props.incrementCounter} title='Press' />
        <Text>Counter = {this.props.counter + "  " + this.props.length}</Text>
        <CheckBox
          checkBoxColor='black'
          onClick={this.props.checkState}
          isChecked={this.props.isChecked}
        />
        <Button
          onPress={this.props.mydataArray} title='Add'
        />
        <FlatList
          ref={(ref) => { this.myFlatlist = ref }}
          numColumns={2}
          data={this.props.dataArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { counter, isChecked, isChecking, dataArray, length } = state.countereducer;
  return {
    counter,
    isChecked,
    isChecking,
    dataArray,
    length,
  };
};

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  checkState: () => dispatch(checkState()),
  checkingState: (index) => dispatch(checkingState(index)),
  mydataArray: () => dispatch(mydataArray()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);

const styles = StyleSheet.create({
  textView: {
    flexDirection: 'row',
    margin: totalSize(2),
    marginBottom: totalSize(5),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textSize: {
    borderWidth: 1,
    width: "80%",
    padding: width(4),
    borderRadius: 10,
    fontSize: totalSize(2),
  },
  
  cardText: {
    fontSize: totalSize(2),
    color: 'white',
    padding: 10,
  },
})