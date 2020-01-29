import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import FlatlistData from './FlatlistData';
import InboxFlatList from './InboxFlatList';
import Styles from './Styles';
import { Images, Strings, Color } from '../../../constants';
import PicModal from '../PicModal/PicModal'

export interface AppProps {
  navigation?: any,
  uid: string,
  email: string,
  updateUser: Function,
  isOnline: Function,
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
  show: boolean,
  animate: boolean,
  modalVisible: boolean,
  lastImg: any,
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      list: [], reRender: false,
      uid: this.props.uid,
      lastMsgData: [], currentUser: '', roomID: '',
      chatEmpty: false, show: false, animate: false,
      modalVisible: false, lastImg: null
    };
  }
  componentDidMount() {
    this.fetchInbox()
    this.props.isOnline()
  }
  componentWillUnmount() {
    FirebaseServices.refOff()
    this.props.isOnline()
  }

  fetchInbox = () => {
    FirebaseServices.inboxList(this.state.uid, (data: any) => {
      if (data !== null) {
        var objData = Object.keys(data).map(function (key) {
          return data[key]
        })
        this.setState({
          chatEmpty: false,
          lastMsgData: objData,
        }, () => this.fetch())
      } else {
        this.setState({
          chatEmpty: true
        })
      }
    })
  }

  fetch = () => {
    var newData: Array<any> = []
    FirebaseServices.fetchList((user: any) => {
      if (this.props.uid !== user.key) {
        newData = newData.concat(user)
      } else {
        this.props.updateUser(user)
      }
    })
    setTimeout(() => {
      this.setState({ list: newData })
    }, 500);
  }

  showAllUsers = () => {
    this.setState({
      show: !this.state.show
    }, () => {
      if (this.state.show) { this.fetch() }
    })
  }

  chatRoom = (user: any) => {
    let chatRoomId: string
    if (user.key > this.props.uid) {
      chatRoomId = user.key.concat(this.props.uid)
    } else {
      chatRoomId = this.props.uid.concat(user.key)
    }
    this.setState({ roomID: chatRoomId, show: !this.state.show })
    this.props.navigation.navigate('ChatMain', { type: 'normal', roomID: chatRoomId, reciverId: user.key, receiverName: user.displayName, reciverAvatar: user.photoURL })
  }

  existingChatRoom = (type: string, id: string, name: string, avatar: string, roomID: string) => {
    this.props.navigation.navigate('ChatMain', { type: type, roomID: roomID, reciverId: id, receiverName: name, reciverAvatar: avatar })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={Styles.separator}
      />
    );
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

  headerItems = () => {
    return (
      <View style={Styles.mainView}>
        <TouchableOpacity activeOpacity={1} style={Styles.txt} onPress={() => { this.setState({ show: !this.state.show }), this.props.navigation.navigate('Group', { list: this.state.list }) }}>
          <View style={Styles.msgView}>
            <Text style={Styles.nameStyle}>{Strings.createGrp}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderInbox = (rowData: any) => {
    const { key, item } = rowData
    return (
      <InboxFlatList
        item={item}
        openChat={this.existingChatRoom}
        uid={this.props.uid}
        openModal={(img: any) => this.setState({ modalVisible: true, lastImg: img })}
      />
    )
  }

  public render() {
    return (
      <View style={Styles.outerMainView}>
        <ActivityIndicator animating={this.state.animate} size={"large"} style={Styles.indicator} color={Color.tealBlue} />
        <View style={Styles.header}>
          <TouchableOpacity style={Styles.addBtn} onPress={() => this.showAllUsers()}>
            <Image source={this.state.show ? Images.minus : Images.plus} style={Styles.addImg} />
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
            alwaysBounceVertical={false}
            data={this.state.lastMsgData}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            keyExtractor={(item, key) => key.toString()}
            renderItem={this.renderInbox}
            bounces={false}
          />}
        {this.state.show && <FlatList
          alwaysBounceVertical={false}
          style={Styles.flatStyle}
          ListHeaderComponent={this.state.list !== null ? this.headerItems : null}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          data={this.state.list}
          renderItem={this.renderItems}
        />}
        {
          this.state.modalVisible &&
          <PicModal
            image={this.state.lastImg}
            visible={this.state.modalVisible}
            handleAction={() => this.setState({ modalVisible: false })}
          />
        }
      </View>
    );
  }
}
