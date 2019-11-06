import React, { Component } from 'react';
import { View, 
  Text, 
  FlatList, 
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import axios from 'axios';

export default class ApiHit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: [],
        name: '',
        isLoading: true,
    };
  }



  // showData = ()=> {

  componentDidMount(){

    //Get Request
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
          const userData1 = response.data;
          this.setState({
            userData:userData1,
            isLoading: false,
          });  
      // })

      //POST request
      // axios.post('https://jsonplaceholder.typicode.com/posts')
      // .then(response => {
      //   console.warn("resp", response)
      //     const userData1 = response;
      //     this.setState({
      //       userData:userData1
      //     });  

    // console.warn(`Status code: ${response.status}`);
    // console.warn(`Status text: ${response.statusText}`);
    // console.warn(`Request method: ${response.request.method}`);
    // console.warn(`Path: ${response.request.path}`);
    // console.warn(`Date: ${response.headers.date}`);
    // console.warn(`Data: ${response.data}`);

    //Error
      }).catch(err => {
console.warn("err", err)
      })

// const user={
//   name : this.state.name
// }

//POST request to send data
// axios.post('https://jsonplaceholder.typicode.com/users', {user})
//     .then(response => {
//       console.warn(response)
//       console.warn(response.data)
      
//       console.warn('data',response.data.user.name)
//     })
  }

// showData = ()=> {
  
//       console.warn('nextdata',this.state.name)
// }

static navigationOptions = {
  title: 'Hit an API',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25
  },
};
  render() {
    return (
      <View>
        <SafeAreaView>
          <View style={{flex: 1,}}>
          <ActivityIndicator size='large' hidesWhenStopped='true' color='red' animating={this.state.isLoading}/>
          </View>
        <FlatList 
            data = {this.state.userData}
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {({item})=>(
              
            <View style={styles.mainView}>
                <View style={{flex: 1, backgroundColor: 'red', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, alignItems: 'center'}}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20,}}>
                  Department ID - {item.userId}
                </Text>
                </View>
                <View style={{alignItems: 'center', padding: 10,}}>
                 <Text style={{marginBottom: 3}}>ID : {item.id}</Text>
                 <Text style={{marginBottom: 3}}>TITLE : {item.title}</Text>
                 <Text>COMPLETED : {`${item.completed}`}</Text>
                 </View>
                 {/* <Text style={{alignItems: 'center'}}>
                   ID : {item.id}{"\n"}TITLE : {item.title}{"\n"}COMPLETED : {`${item.completed}`}
                 </Text> */}
            </View>
               
            )}/>

            {/* <TextInput placeholder='Enter Name' value={this.state.name} onChangeText = {(text) => this.setState({name : text})} >

            </TextInput>
            <TouchableOpacity style={{backgroundColor: 'yellow'}} onPress={this.showData}>
              <Text>Submit</Text>
              </TouchableOpacity> */}

             </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    margin: 20,
    shadowColor: '#ed8080',
    shadowOpacity: 3,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 20,
    shadowOffset: {height: 15, width: 15},
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#fac5c5'
  }
})