import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GiftedChat, Bubble, Composer, Send } from 'react-native-gifted-chat';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import { Color, Images, vh, vw, Strings } from '../../../constants';
import Styles from './Styles';

export interface AppProps {
  navigation?: any,
  user: any,
}

export interface AppState {
  messages: any,
  lastMsg: string,
  typingText: string,
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
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

  componentWillUnmount() {
    FirebaseServices.refOff()
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

  customView = (data: any) => {
    console.warn('data -> ', data)
    return (
      <View style={{ backgroundColor: 'red' }}>

      </View>
    )
  }

  customBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        //@ts-ignore
        wrapperStyle={{
          left: {
            backgroundColor: 'white',

          },
          right: {
            backgroundColor: Color.chatGreen,

          }
        }}
      />
    );
  }

  renderSend = (props: any) => {
    return(
      <View style={Styles.sendView}>
    <TouchableOpacity  style={Styles.sendBtn} activeOpacity={1} onPress={() => {}}>
      <Image source={Images.send} />
    </TouchableOpacity>
    </View>
    )
}

renderComposer = (props: any) => {
  return(
    <Composer
        {...props}
       composerHeight={vh(45)}
       placeholder={Strings.typeMsg}
       textInputStyle={Styles.inputText}
      />
  )
}

  public render() {
    return (
      <>
        <View style={Styles.chatHeader}>
          <TouchableOpacity style={Styles.headerView} onPress={() => this.props.navigation.pop()} activeOpacity={1}>
            <Image source={Images.backBtn} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.headerImgView}>
          <Image source = {{uri: this.props.navigation.getParam('reciverAvatar')}} style={Styles.headerImg} />
          </TouchableOpacity>
    <Text style={Styles.headerName}>{this.props.navigation.getParam('receiverName')}</Text>
        </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={FirebaseServices.send}
          user={this.user}
          showAvatarForEveryMessage={false}
          renderAvatarOnTop={true}
          showUserAvatar={true}
          renderBubble={this.customBubble}
          // onInputTextChanged={text => this.setState({typingText: text})}
          renderSend={this.renderSend}
          renderComposer={this.renderComposer}
        />
      </>
    )
  }
}
