import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GiftedChat, Bubble, Composer, InputToolbar, Time, Day, GiftedAvatar } from 'react-native-gifted-chat';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import { Images, Strings, vw, vh } from '../../../constants';
import Styles from './Styles';
import PicModal from '../PicModal/PicModal'

interface AppProps {
  navigation?: any,
  user: any,
}

interface AppState {
  messages: any,
  lastMsg: string,
  modalVisible: boolean,
  isTyping: boolean,
  allGroupUsers: Array<any>
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  giftedChatRef: any
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: [],
      lastMsg: '',
      modalVisible: false,
      isTyping: false,
      allGroupUsers: []
    };
  }

  componentDidMount() {

    // fetching all members of group, if type is group
    if (this.props.navigation.getParam('type') === 'group') {
      FirebaseServices.fetchGroupUsers(this.props.navigation.getParam('roomID'), this.setGroupUsers)
    }else{
    // Loading msgs-------------
    this.refOn()
    }

    // fetching typing status
    if (this.props.navigation.getParam('type') === 'normal') {
      FirebaseServices.fetchTyping(this.props.navigation.getParam('roomID'), this.props.navigation.getParam('reciverId'), this.setTyping)
    }
  }

  get user() {
    if (this.props.navigation.getParam('type') === 'normal') {
      return {
        _id: this.props.user.key,
        _name: this.props.user.displayName,
        avatar: this.props.user.photoURL,
        id: this.props.navigation.getParam('reciverId'),
        name: this.props.navigation.getParam('receiverName'),
        ravatar: this.props.navigation.getParam('reciverAvatar'),
        email: this.props.user.email,
        roomID: this.props.navigation.getParam('roomID'),
        type: 'normal',
      }
    } else if (this.props.navigation.getParam('type') === 'group') {
      return {
        _id: this.props.user.key,
        _name: this.props.user.displayName,
        avatar: this.props.user.photoURL,
        id: this.props.navigation.getParam('roomID'),
        name: this.props.navigation.getParam('receiverName'),
        ravatar: this.props.navigation.getParam('reciverAvatar'),
        email: this.props.user.email,
        roomID: this.props.navigation.getParam('roomID'),
        type: 'group',
      }
    }
  }

  refOn = () => {
    FirebaseServices.refOn(this.props.navigation.getParam('roomID'), this.props.navigation.getParam('type'), this.props.navigation.getParam('type') === 'normal' ? [] : this.state.allGroupUsers, (message: any) => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
        lastMsg: message,
      })
      )
    })
  }

  setGroupUsers = (userList: any) => {
    var arr = userList.AllUsers.map((obj: { key: string; }) => obj.key)
    arr = arr.concat(userList.creator.key)
    this.setState({
      allGroupUsers: arr
    }, () => this.refOn())
  }

  setTyping = (data: any) => {
    if (data !== null) {
      this.setState({ isTyping: data.isTyping })
    }
  }

  customBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        //@ts-ignore
        wrapperStyle={{
          left: Styles.bubbleLeft,
          right: Styles.bubbleRight
        }}
      />
    );
  }

  renderSend = (props: any) => {
    const msg = this.giftedChatRef.state.text || '';
    return (
      <View>
        <TouchableOpacity style={Styles.sendBtn} activeOpacity={1} onPress={() => {
          if (msg.trim().length > 0) {
            this.giftedChatRef.onSend({ text: msg.trim() }, true);
          } else { return }
        }}>
          <Image source={Images.send} />
        </TouchableOpacity>
      </View>
    )
  }

  renderComposer = (props: any) => {
    return (
      <Composer
        {...props}
        placeholder={Strings.typeMsg}
        textInputStyle={Styles.inputContainer}
      />
    )
  }

  renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={Styles.footerStyle}
        primaryStyle={Styles.primaryStyle}
      />
    )
  }

  renderTime = (props: any) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: Styles.timeText,
          right: Styles.timeText
        }}
      />
    )
  }

  renderDay = (props: any) => {
    return (
      <Day
        {...props}
        wrapperStyle={Styles.dayStyle}
        textStyle={Styles.dayText}
      />
    )
  }

  renderChatFooter = () => {
    return (
      <View style={Styles.chatFooter} />
    )
  }

  typingIndicator = (text: string) => {
    if (text !== '') {
      FirebaseServices.trueTypingIndicator(this.props.navigation.getParam('roomID'), this.props.user.key)
    }
  }

  componentWillUnmount() {
    FirebaseServices.refOff()
  }

  public render() {
    const pic = this.props.navigation.getParam('reciverAvatar')
    return (
      <>
        <View style={Styles.chatHeader}>
          <TouchableOpacity style={Styles.headerView} onPress={() => this.props.navigation.pop()} activeOpacity={1}>
            <Image source={Images.backBtn} style={Styles.headerBack} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={Styles.headerImgView} onPress={() => this.setState({ modalVisible: true })}>
            <Image source={pic === '' ? Images.imgPlaceholder : { uri: pic }} style={Styles.headerImg} />
          </TouchableOpacity>
          <Text style={Styles.headerName}>{this.props.navigation.getParam('receiverName')}</Text>
          {this.state.isTyping ? <Text style={Styles.headerName}>  ({Strings.typing})</Text> : null}
        </View>
        <GiftedChat
          minComposerHeight={vh(45)}
          maxComposerHeight={vh(75)}
          ref={(ref) => { this.giftedChatRef = ref; }}
          messages={this.state.messages}
          onSend={FirebaseServices.send}
          user={this.user}
          showAvatarForEveryMessage={false}
          renderAvatarOnTop={true}
          showUserAvatar={true}
          renderBubble={this.customBubble}
          renderSend={this.renderSend}
          renderComposer={this.renderComposer}
          renderInputToolbar={this.renderInputToolbar}
          renderTime={this.renderTime}
          renderDay={this.renderDay}
          renderChatFooter={this.renderChatFooter}
          loadEarlier={true}
          // onLoadEarlier={this.refOn()}
          // isLoadingEarlier={true}
          onInputTextChanged={(text: string) => this.typingIndicator(text)}
        />
        {
          this.state.modalVisible &&
          <PicModal
            image={pic === '' ? Images.imgPlaceholder : { uri: pic }}
            visible={this.state.modalVisible}
            handleAction={() => this.setState({ modalVisible: false })}
          />
        }
      </>
    )
  }
}
