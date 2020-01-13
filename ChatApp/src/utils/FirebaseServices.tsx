import { } from '@react-native-firebase/database';
import { } from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';

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
    firebase.database().ref('Users/').set({
      email,
      fname,
      lname
    }).then((data) => {
      console.warn('data ', data)
    }).catch((error) => {
      console.warn('error ', error)
    }) 
  }

  // Get data from DB ---------------------
  readUserData(callback: Function) {
    firebase.database().ref('Users/').once('value', function (snapshot: any) {
      callback(snapshot.val())
    })
  }

  // Delete data from DB ------------------
  deleteUserData() {
    firebase.database().ref('Users/').remove();
  }

  // Sign In for Firebase Auth ------------
  login =  (user: any, success_callback: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, (error)=>{
        console.warn(error)
      });
  };

  loadMsgs = (callback: Function) => {
    firebase.database().ref('Users/').once('value', function (snapshot: any) {
      console.warn(snapshot.val())
      callback(snapshot.val())
    })
  }

// Storing msgs on Firebase Database
  send = (messages: any) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {text, user, createdAt: new Date().getTime() };
      console.log('msg sended ', message)
      firebase.database().ref('Users/').push(message)
    }
  };

  parse = (snapshot : any) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: id } = snapshot;
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {id, _id, timestamp, text, user};
    return message;
  };

  // Load msgs from Database to Chat
  refOn = (callback : Function) => {
    // console.warn('inside refon')
    firebase.database().ref('Users/')
      .limitToLast(20)
      .on('child_added', (snapshot: any) => {callback(this.parse(snapshot))});
      // console.warn('leaving refon')
  }

  refOff() {
    firebase.database().ref('Users/').off();
  }

}
export default new FirebaseService();