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

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: [],
      lastMsg: ''
    };
  }

  componentDidMount() {
    console.log(this.props.user.key, this.props.navigation.getParam('reciverId'), this.props.navigation.getParam('receiverName'))
    // Loading msgs-------------
    FirebaseServices.refOn(this.props.navigation.getParam('roomID'), this.props.navigation.getParam('reciverId'), (message: any) => {
      console.log('msg ', message)
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
      _name: this.props.user.displayName,
      name: this.props.navigation.getParam('receiverName'),
      email: this.props.user.email,
      avatar: this.props.user.photoURL,
      _id: this.props.user.key,
      id: this.props.navigation.getParam('reciverId'),
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
