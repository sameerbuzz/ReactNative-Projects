import { } from '@react-native-firebase/database';
import { } from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';

let userRef = firebase.database().ref('AllUsers/')
let chatRef = firebase.database().ref('Msgs/')
let roomchat = firebase.database()
let inbox = firebase.database()

var roomUid = ''

class FirebaseService {

  constructor() {
    this.initializeFireBase();
  }

  initializeFireBase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyBD-hkynfptGEvUQTngmUERlYCHcTPQ3mI',
          appId: Platform.OS === 'ios'
            ? '1:601645735289:ios:1d3732df4a5311de5e23a8'
            : '1:601645735289:android:c6ab2bf90d411d055e23a8',
          databaseURL: 'https://chat-e6b69.firebaseio.com',
          messagingSenderId: '601645735289',
          projectId: 'chat-e6b69',
          storageBucket: 'chat-e6b69.appspot.com',
        },
        'Chat'
      );
    }
  }

  // Add data in DB ----------------------
  writeUserData(email: string, fname: string, lname: string) {
    chatRef.set({
      email,
      fname,
      lname
    }).then((data) => {
      console.log('data ', data)
    }).catch((error) => {
      console.warn('error ', error)
    })
  }

  // Get data from DB ---------------------
  readUserData(callback: Function) {
    chatRef.once('value', function (snapshot: any) {
      callback(snapshot.val())
    })
  }

  // Delete data from DB ------------------
  deleteUserData() {
    chatRef.remove();
  }

  // Sign In for Firebase Auth ------------
  login = (user: any, success_callback: any, failure_callback: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failure_callback)
  };

  signUp = (user: any, success_callback: any, failure_callback: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failure_callback)
  }

  addingUser = (uid: string, email: string) => {
    const users = { key: uid, email: email }
    userRef.push(users)
  }

  fetchList = (callback: Function) => {
    userRef.on('child_added', (snapshot: any) => {callback(snapshot.val())})
  }

  loadMsgs = (callback: Function) => {
    chatRef.once('value', function (snapshot: any) {
      console.log(snapshot.val())
      callback(snapshot.val())
    })
  }

  // Storing msgs on Firebase Database---------------
  send = (messages: Array<any>) => {
    inbox
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = { text, user, createdAt: new Date().getTime() };
      console.log('msg sended ', message)
      roomchat.ref('chatRoom/'+roomUid).push(message)
    }
  };

  // Load msgs from Database to Chat-------------------
  refOn = (id: string,callback: Function) => {
    console.log('id ',id)
    roomUid = id
    roomchat.ref('chatRoom/'+id)
    //   // .limitToLast(20)
      .on('child_added', (snapshot: any) => { callback(this.parse(snapshot)) });
  }

  parse = (snapshot: any) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: id } = snapshot;
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = { id, _id, timestamp, text, user };
    return message;
  };

  refOff() {
    chatRef.off();
  }

  addRoom = (roomId: string, uid: string) => {
    const lastMsg = {roomId: roomId, msg: 'Last msg'}
    inbox.ref('Inbox/'+uid).push(lastMsg)
  }

}
export default new FirebaseService();