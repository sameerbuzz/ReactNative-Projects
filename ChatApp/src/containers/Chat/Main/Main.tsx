import * as React from 'react';
import { View, Text } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

// custom imports
import FirebaseServices from '../../../utils/FirebaseServices';
import {Color, vh, vw} from '../../../constants';
import Styles from './Styles';

export interface AppProps {
  navigation?: any,
  user: any,
}

export interface AppState {
  messages: any,
  lastMsg: string,
}

export default class AppComponent extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: [],
      lastMsg: ''
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
    console.warn('data -> ',data)
    return(
      <View style={{backgroundColor: 'red'}}>
        
        </View>
    )
  }

  customBubble = (props : any) => {
    return (
      <Bubble
        {...props}
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

  public render() {
    return (
    <>
    <View style={Styles.chatHeader}>
      </View>
    <GiftedChat
      messages={this.state.messages}
      onSend={FirebaseServices.send}
      user={this.user}
      showAvatarForEveryMessage={false}
      // renderCustomView={this.customView}
      renderAvatarOnTop={true}
      showUserAvatar={true}
      renderBubble={this.customBubble}
    />
   </>
    )
  }
}
