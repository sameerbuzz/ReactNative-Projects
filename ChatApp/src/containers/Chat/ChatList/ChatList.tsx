import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import FlatlistData from './FlatlistData';
import InboxFlatList from './InboxFlatList';
import Styles from './Styles';
import { vw, Images, Strings } from '../../../constants';

var shown = false

export interface AppProps {
  navigation?: any,
  uid: string,
  email: string,
  updateUser: Function,
  user: any,
}

export interface AppState {
  list: Array<any>,
  reRender: boolean,
  uid: string,
  lastMsgData: Array<any>,
  currentUser: any,
  roomID: string,
  chatEmpty: boolean,
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      list: [], reRender: false,
      uid: this.props.uid,
      lastMsgData: [], currentUser: '', roomID: '',
      chatEmpty: false,
    };
  }
  componentDidMount() {
    this.fetchInbox()
  }
  componentWillUnmount() {
    FirebaseServices.refOff()
  }

  fetchInbox = () => {
    FirebaseServices.inboxList(this.state.uid, (data: any) => {
      console.log('inbox ', data)
      if (data !== null) {
      var objData = Object.keys(data).map(function (key) {
        return data[key]
      })
      console.log('obj ', objData)

      this.setState({
        chatEmpty: false,
        lastMsgData: objData
      }, () => this.fetch())
    }else{
      this.setState({
        chatEmpty: true
      })
    }
    })
    
  }

  fetch = () => {
    var newData: Array<any> = []
    FirebaseServices.fetchList((message: any) => {
      console.log('msg ', this.props.uid, message.key)
      if (this.props.uid !== message.key) {
        newData = newData.concat(message)
        console.log('new data ', newData)
      } else {
        console.log('incoming msg ', message)
        this.props.updateUser(message)
      }
    })
    setTimeout(() => {
      this.setState({ list: newData })
      console.log('user ', this.props.user)
    }, 500);
  }

  chatRoom = (id: string, name: string) => {
    var chatRoomId: string
    if (id > this.props.uid) {
      chatRoomId = id.concat(this.props.uid)
    } else {
      chatRoomId = this.props.uid.concat(id)
    }
    console.log('roomId ', chatRoomId)
    this.setState({ roomID: chatRoomId })
    this.props.navigation.navigate('ChatMain', { roomID: chatRoomId, reciverId: id, receiverName: name })
  }

  renderItems = (rowData: any) => {
    const { key, item } = rowData
    return (
      <FlatlistData
        item={item}
        openChat={this.chatRoom}
      />
    )
  }

  renderInbox = (rowData: any) => {
    const { key, item } = rowData
    return (
      <InboxFlatList
        item={item}
        openChat={this.chatRoom}
        uid={this.props.uid}
      />
    )
  }

  public render() {
    return (
      <View style={Styles.outerMainView}>
        <View style={Styles.header}>
        <TouchableOpacity style={Styles.addBtn} onPress={() => { shown = !shown, this.fetch()}}>
          <Image source={Images.plus} style={Styles.addImg}/>
        </TouchableOpacity>
        </View>
        <Text style={Styles.chatTxt}>{Strings.chats}</Text>
        {this.state.chatEmpty ? 
        <View style={Styles.noChatView}>
          <Image source={Images.noChat} />
          <Text style={Styles.noChatTxt}>{Strings.noChat}</Text>
        </View> 
        :
        <FlatList
          data={this.state.lastMsgData}
          keyExtractor={(item, key) => key.toString()}
          renderItem={this.renderInbox}
        />}
        {shown && <FlatList
          style={Styles.flatStyle}
          data={this.state.list}
          renderItem={this.renderItems}
        />}
      </View>
    );
  }
}
