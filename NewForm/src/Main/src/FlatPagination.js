import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import FlatListData from './FlatListData';

const column = 1
const ITEM_HEIGHT = 5

export default class FlatPagination extends Component {
  static navigationOptions = {
    title: 'Pagination',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      isLoading: true,
      isRefreshing: false,
      pageNum: 1
    };
  }

  loadUsers = () => {
    this.setState({ isLoading: true });

    axios.get('https://reqres.in/api/users?delay=3')
      .then(response => {
        const userData1 = response.data.data;
        this.setState({
          userData: this.state.userData.concat(userData1),
          isLoading: false,
          isRefreshing: false,
        });
      }).catch(err => {
        console.warn("err", err)
      })
  }

  handleRefresh = () => {
    this.setState({
      isRefreshing: true,
    }, () => {
      this.hitAPI()
    });
  };

  handleLoadMore = () => {
    this.loadUsers();
  };

  componentDidMount() {
    this.hitAPI()
  }

  hitAPI = () => {

    this.setState({ isLoading: true });

    axios.get('https://reqres.in/api/users?delay=2')
      .then(response => {
        const userData1 = response.data.data;
        this.setState({
          userData: userData1,
          isLoading: false,
          isRefreshing: false,
        });
      }).catch(err => {
        console.warn("err", err)
      })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  }

  renderItems = (rawData) => {
    const { item, index } = rawData
    return (
      <FlatListData 
      item = {item}
      column = {column}
      />
    );
  }

  render() {
    const { isRefreshing } = this.state;
    return (
      <View style={styles.mainView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={column}
            data={this.state.userData}
            renderItem={this.renderItems}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            extraData={this.state}
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0}
            getItemLayout={(data, index) => (
              {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
            )}
            // columnWrapperStyle={styles.wrapper}
            ListFooterComponent={
            <ActivityIndicator size='large' hidesWhenStopped='true' color='red' animating={this.state.isLoading}/>
            }/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  wrapper: {
    backgroundColor: 'red',
    paddingHorizontal: 10
  }
})