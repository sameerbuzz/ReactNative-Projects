import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
  } from 'react-native';
 class SelectableItem extends React.Component {
    constructor() {
      super();
  
      this.handleOnPress = this.handleOnPress.bind(this);
    }
  
    shouldComponentUpdate(nextProps) {
      const { isSelected } = this.props;
      return isSelected !== nextProps.isSelected;
    }
  
    handleOnPress() {
      const { onPress } = this.props;
      onPress();
    }
  
    render() {
      const { isSelected, text } = this.props;
      const textColor = isSelected ? 'blue' : 'black';
  
      return (
        <TouchableOpacity onPress={this.handleOnPress}>
          <View>
            <Text style={{ color: textColor }}>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  
  export default class ExtraData extends React.Component {
    constructor() {
      super();
  
      this.handleOnPressItem = this.handleOnPressItem.bind(this);
      this.state = {
        selected: new Map(),
      };
    }
  
  
    onPressItem(id) {
      this.setState((state) => {
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id));
        return { selected };
      });
    }
  
  
    renderItem({ item }) {
      const { selected } = this.state;
   
      return (
        <SelectableItem
          id={item.id}
          onPressItem={this.handleOnPressItem}
          selected={!!selected.get(item.id)}
          title={item.title}
        />
      );
    }
  
  
    render() {
      const { data } = this.props;
  
      return (
        <FlatList
          data={DATA}
          extraData={this.state}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      );
    }
  }

  const DATA = [
      {id: 1, title: 'sam'},
      {id: 2, title: 'sam'},
      {id: 3, title: 'sam'},
      {id: 4, title: 'sam'},
      {id: 5, title: 'sam'},
      {id: 6, title: 'sam'},
      {id: 7, title: 'sam'},
      {id: 8, title: 'sam'},
      {id: 9, title: 'sam'},
      {id: 10, title: 'sam'},
  ]
