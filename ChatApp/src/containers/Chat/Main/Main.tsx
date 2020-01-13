import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import FirebaseServices from '../../../utils/FirebaseServices';
import { firebase } from '@react-native-firebase/auth';
import index from './index';

export interface AppProps {
  navigation?: any,
  uid: any
}

export interface AppState {
  uid: string,
  messages: any
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      uid: this.props.navigation.getParam('userId'),
      messages: []
    };
  }

  componentDidMount() {
    console.log('userId -> ', this.props.navigation.getParam('userId'))
    FirebaseServices.refOn((message: any) => {
      console.warn('messages are -> ', message)
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      })
      )
    }
  );

    // FirebaseServices.loadMsgs((message: Array<any>) => {
    //   this.setState(previousState => ({
    //     messages: GiftedChat.append(previousState.messages, message),
    //   })
    //   )
    // }
    // )

  }

  componentWillUnmount(){
    FirebaseServices.refOff()
  }

  public render() {
    return <GiftedChat
      messages={this.state.messages}
      onSend={FirebaseServices.send}
      user={{
        _id: this.state.uid,
        name: 'Sameer',
        avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
      }}
    />;
  }
}
