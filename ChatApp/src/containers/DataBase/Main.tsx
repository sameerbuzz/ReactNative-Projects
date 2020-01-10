import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// custom imports
import FirebaseServices from '../../utils/FirebaseServices';
import Styles from './Styles';

export interface AppProps {
}

interface AppState {
  email: string, 
  fname: string,
  lname: string,
  arr: Array<any>
}

export default class App extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
      arr: []
    }
  }

componentDidMount(){
  FirebaseServices.initializeFireBase()
}

getMsg = (data: any) => {
  this.setState({
    arr: data
  })
}

  public render() {
    return (
      <View style={Styles.mainView}>
         <TextInput placeholder='Enter Email' style={Styles.input} onChangeText={(text: string) => this.setState({email: text})} />
         <TextInput placeholder='Enter First Name' style={Styles.input} onChangeText={(text: string) => this.setState({fname: text})} />
         <TextInput placeholder='Enter Last Name' style={Styles.input} onChangeText={(text: string) => this.setState({lname: text})} />
         <TouchableOpacity style={Styles.btn} onPress={() => FirebaseServices.writeUserData(this.state.email, this.state.fname, this.state.lname)}>
           <Text>Set Data</Text>
           </TouchableOpacity>
           <TouchableOpacity style={Styles.btn} onPress={() => FirebaseServices.readUserData(this.getMsg)}>
           <Text>Get Data</Text>
           </TouchableOpacity>
           <TouchableOpacity style={Styles.btn} onPress={() => FirebaseServices.deleteUserData()}>
           <Text>Delete Data</Text>
           </TouchableOpacity>
           <Text>data: {this.state.arr}</Text>
      </View>
    );
  }
}
