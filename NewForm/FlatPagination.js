import React, { Component } from 'react';
import { 
    View, 
    Text,
    SafeAreaView,
    Image,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';
import axios from 'axios';

export default class FlatPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      isLoading: true,
      isRefreshing: false,
      pageNum : 1
    };
  }

  loadUsers = () => {
    this.setState({ isLoading: true });

    axios.get('https://reqres.in/api/users?delay=3')
    .then(response => {
        const userData1 = response.data.data;
        this.setState({
          userData:this.state.userData.concat(userData1),
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

componentDidMount(){
  this.hitAPI()
}

hitAPI = () => {

  <ActivityIndicator size='large' hidesWhenStopped='true' color='red' animating={this.state.isLoading} style={styles.loading}/>

  this.setState({ isLoading: true });

  axios.get('https://reqres.in/api/users?delay=2')
  .then(response => {
      const userData1 = response.data.data;
      this.setState({
        userData:userData1,
        isLoading: false,
        isRefreshing: false,
      });  
    }).catch(err => {
        console.warn("err", err)
  })
}

  render() {
    const { isRefreshing } = this.state;
    return (
      <SafeAreaView>
        <View style={{ height: "100%"}}>
        <FlatList 
            ListFooterComponent={
              <ActivityIndicator size='large' 
              hidesWhenStopped='true' 
              color='red' 
              animating={this.state.isLoading}
              />
            }
            data = {this.state.userData}
            renderItem = {({item})=>(
                <View style={styles.card}>
                    <Image 
                      onLoad={(e) => this.setState({isLoading: false})}
                      onError={(e) => this.setState({isLoading: false})}
                      onLoadStart={(e) => this.setState({isLoading: true})}
                      source={{uri: item.avatar}} 
                      style={{height: 60, width: 60, borderRadius: 10}} 
                      defaultSource={require('./download3.jpeg')}
                      />
                    <Text style={{paddingTop: 15,}}>{item.first_name} {item.last_name}</Text>
                </View>
            )} 
            keyExtractor = {(item, index) => index.toString()}
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.01}
            />
          {/* <TouchableOpacity style={styles.topBtn}>
            <Image source={require('./top.png')}/>
            </TouchableOpacity> */}

          </View>
      </SafeAreaView>
    );
  }
}
styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
},
  card: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#78a6f0',
    borderRadius: 20,
    padding: 20
},
topBtn:{
  backgroundColor: 'red', 
  height: 40, 
  width: 40, 
  position: 'absolute', 
  bottom: 20, 
  right: 10, 
  borderRadius: 20
}
})