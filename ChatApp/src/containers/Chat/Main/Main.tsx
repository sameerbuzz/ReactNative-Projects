import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import FirebaseServices from '../../../utils/FirebaseServices';

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

  public render() {
    return <GiftedChat
      messages={this.state.messages}
      onSend={FirebaseServices.send}
      user={this.user}
    />;
  }
}
