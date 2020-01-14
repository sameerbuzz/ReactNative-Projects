import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import FirebaseServices from '../../../utils/FirebaseServices';
import FlatlistData from './FlatlistData';
import Styles from '../SignIn/Styles';

export interface AppProps {
    navigation?: any,
    uid: string,
    email: string
}

export interface AppState {
    list: Array<any>,
    show: boolean,
    reRender: boolean
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
        list: [], show: false, reRender: false
    };
  }
  componentDidMount(){
    this.fetch()
  }
  componentWillUnmount() {
    FirebaseServices.refOff()
  }

fetch = () => {
  var newData = this.state.list
     FirebaseServices.fetchList((message: any) => {
       console.log('msg ', message)
        if (this.props.uid !== message.key){
        newData = newData.concat(message)
        }
      })    
      setTimeout(() => {
        this.setState({list: newData})
        console.log('list ', this.state.list)
      },1000);
}

refresh = () => {
  var newData : Array<any> = []
     FirebaseServices.fetchList((message: any) => {
       console.log('msg ', message)
        if (this.props.uid !== message.key){
        newData = newData.concat(message)
        }
      })    
      setTimeout(() => {
        this.setState({list: newData})
        console.log('list ', this.state.list)
      },1000);
}

chatRoom = (id: string) => {
    var chatRoomId : string
    if (id > this.props.uid){
        chatRoomId = id.concat(this.props.uid)
    }else{
        chatRoomId = this.props.uid.concat(id)
    }
    console.log('roomId ',chatRoomId)
    FirebaseServices.addRoom(chatRoomId, this.props.uid)
    this.setState({show: false})
    this.props.navigation.navigate('ChatMain',{roomID: chatRoomId})
}

renderItems = (rawData: any) => {
    const {key, item} = rawData
    return(
        <FlatlistData
        id={item.key}
        email={item.email}
        openChat = {this.chatRoom}
        />
    )
}

  public render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={Styles.addBtn} onPress={() => {this.refresh(), this.setState({show: true})} }>
          <Text style={{fontSize: 40}}>+</Text>
          </TouchableOpacity>
        {this.state.show && <FlatList
         data = {this.state.list}
         renderItem={this.renderItems}
         />}
      </View>
    );
  }
}
