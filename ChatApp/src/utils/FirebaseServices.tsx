import { } from '@react-native-firebase/database';
import { } from '@react-native-firebase/auth';
import { } from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';

let userRef = firebase.database().ref('AllUsers/')
let chatRef = firebase.database().ref('Msgs/')
let roomchat = firebase.database()
let inbox = firebase.database()

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
      .then(success_callback).catch(failure_callback)
  };

  //  creating new user ---------------------
  signUp = (user: any, success_callback: any, failure_callback: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failure_callback)
  }

  addingUser = (user: any) => {
    const users = { key: user.uid, displayName: user.name, email: user.email, photoURL: user.avatar }
    userRef.push(users)
  }

  fetchList = (callback: Function) => {
    userRef.on('child_added', (snapshot: any) => { callback(snapshot.val()) })
  }

  loadMsgs = (callback: Function) => {
    chatRef.once('value', function (snapshot: any) {
      console.log(snapshot.val())
      callback(snapshot.val())
    })
  }

  // Storing msgs on Firebase Database---------------
  send = (messages: Array<any>) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = { text, user, createdAt: new Date().getTime() };
      console.log('msg sended ', message)

      // adding last msg on send msg to sender inbox------
      inbox.ref('Inbox/' + user._id).child(user.roomID).set({
        lastMsg: message.text,
        createdAt: message.createdAt,
        user: message.user,
      })

      // adding last msg on send msg to receiver inbox-----
      inbox.ref('Inbox/' + user.id).child(user.roomID).set({
        lastMsg: message.text,
        createdAt: message.createdAt,
        user: message.user,
      })

      // sending actual msg -------------------------
      roomchat.ref('chatRoom/' + user.roomID).push(message)
    }
  };

  // Load msgs from Database to Chat-------------------
  refOn = (id: string, callback: Function) => {
    roomchat.ref('chatRoom/' + id)
      // .limitToLast(20)
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
    userRef.off();
  }

  // fetching last message----------------------------------
  inboxList = (uid: string, callback: Function) => {
    debugger
    inbox.ref('Inbox/' + uid).on('value', function (snapshot: any) {
      console.log(snapshot.val())
      callback(snapshot.val())
    })
  }

  // uploading profile pic to firebase storage--------------
  uploadPic = (uid: string, path: any, callback: Function) => {
    const imageRef = firebase.storage().ref('profilePic').child(uid);

    return imageRef.putFile(path, { contentType: 'jpg' })
      .then(() => {
        return imageRef.getDownloadURL();
      })
      .then(url => {
        console.log(url);
        callback(url)
      })
      .catch(error => {
        console.warn('Error uploading image: ', error);
      });
  }

}
export default new FirebaseService();