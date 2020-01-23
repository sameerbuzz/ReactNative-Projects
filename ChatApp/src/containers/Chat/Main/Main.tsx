import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import { GiftedChat, Bubble, Composer, InputToolbar, Time, Day } from 'react-native-gifted-chat';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import { Images, vh, Strings } from '../../../constants';
import Styles from './Styles';

export interface AppProps {
  navigation?: any,
  user: any,
  isOnline: boolean,
}

export interface AppState {
  messages: any,
  lastMsg: string,
  typingText: string,
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  giftedChatRef: any
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: [],
      lastMsg: '',
      typingText: '',
    };
  }

  componentDidMount() {
    // Loading msgs-------------
    FirebaseServices.refOn(this.props.navigation.getParam('roomID'), (message: any) => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
        lastMsg: message,
      })
      )
    })
  }

  get user() {
    return {
      _id: this.props.user.key,
      _name: this.props.user.displayName,
      avatar: this.props.user.photoURL,
      id: this.props.navigation.getParam('reciverId'),
      name: this.props.navigation.getParam('receiverName'),
      ravatar: this.props.navigation.getParam('reciverAvatar'),
      email: this.props.user.email,
      roomID: this.props.navigation.getParam('roomID'),
    };
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
        composerHeight={vh(45)}
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

  componentWillUnmount() {
    FirebaseServices.refOff()
  }

  public render() {
    const pic = this.props.navigation.getParam('reciverAvatar')
    return (
      <>
        <View style={Styles.chatHeader}>
          <TouchableOpacity style={Styles.headerView} onPress={() => this.props.navigation.pop()} activeOpacity={1}>
            <Image source={Images.backBtn} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={Styles.headerImgView} onPress={() => this.props.navigation.navigate('PicModal', {avatar: pic === '' ? Images.imgPlaceholder : { uri: pic }}) }>
            <Image source={pic === '' ? Images.imgPlaceholder : { uri: pic }} style={Styles.headerImg} />
          </TouchableOpacity>
          <Text style={Styles.headerName}>{this.props.navigation.getParam('receiverName')}</Text>
          <Text style={Styles.headerName}>{this.props.isOnline ? Strings.isOnline : ''}</Text>
        </View>
        <GiftedChat
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
        />
      </>
    )
  }
}
