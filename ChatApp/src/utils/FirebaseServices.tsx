import { } from '@react-native-firebase/database';
import { } from '@react-native-firebase/auth';
import { } from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';

let userRef = firebase.database().ref('AllUsers/')
let chatRef = firebase.database().ref('Msgs/')
let roomchat = firebase.database()
let inbox = firebase.database()
let typingRef = firebase.database().ref('Typing/')
let createGpRef = firebase.database().ref('GroupUsers/')
var AllGroupUsers: Array<any>
var arr: Array<any>
var message: any
const myImage = 'https://firebasestorage.googleapis.com/v0/b/chat-e6b69.appspot.com/o/profilePic%2F0OQWhIgUxKfidUPO0Yi4LfwyDy23?alt=media&token=4f5353fd-3bef-48e2-93e6-eab0a70e11a9'

class FirebaseService {

  constructor() {
    this.initializeFireBase();
  }

  initializeFireBase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyAQSYFYltGodgXvYHwtXkuTFCSPBy9P3cw',
          appId: Platform.OS === 'ios'
            ? '1:25234890207:ios:27cae1999b7edfd8aa386a'
            : '1:601645735289:android:c6ab2bf90d411d055e23a8',
          databaseURL: 'https://chatapp-b103e.firebaseio.com',
          messagingSenderId: '25234890207',
          projectId: 'chatapp-b103e',
          storageBucket: 'chatapp-b103e.appspot.com',
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
    const users = { key: user.uid, displayName: user.name, email: user.email, photoURL: user.avatar === null ? '' : user.avatar }
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
  send = (messages: Array<any>, image?: string, video?: string) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = { text, user, createdAt: new Date().getTime(), image: image, video: video };
      console.log('msg sended ', message)

      if (message.user.type === 'normal') {
        // adding last msg on send msg to sender inbox------
        const sender = { id: message.user.id, name: message.user.name, avatar: message.user.ravatar }
        inbox.ref('Inbox/' + user._id).child(user.roomID).set({
          lastMsg: message.image !== '' ? ('Photo') : (message.video !== '' ? ('Video') : (message.text)),
          createdAt: message.createdAt,
          roomID: user.roomID,
          type: user.type,
          user: sender,
        })

        // adding last msg on send msg to receiver inbox-----
        const receiver = { id: message.user._id, name: message.user._name, avatar: message.user.avatar }
        inbox.ref('Inbox/' + user.id).child(user.roomID).set({
          lastMsg: message.image !== '' ? 'Photo' : (message.video !== '' ? ('Video') : (message.text)),
          createdAt: message.createdAt,
          roomID: user.roomID,
          type: user.type,
          user: receiver,
        })
      } else if (message.user.type === 'group') {

        // adding last msg on send msg to group member's inbox------
        const groupDetails = { id: message.user.id, name: message.user.name, avatar: message.user.ravatar }
        AllGroupUsers.map(function (id) {
          inbox.ref('Inbox/' + id).child(user.roomID).set({
            lastMsg: message.image !== '' ? 'Photo' : (message.video !== '' ? ('Video') : (message.text)),
            createdAt: message.createdAt,
            roomID: user.roomID,
            type: user.type,
            user: groupDetails,
          })
        })
      }

      // sending actual msg -------------------------
      roomchat.ref('chatRoom/' + user.roomID).push(message)

      // typing indicator false ----------------------
      this.falseTypingIndicator(user.roomID, user._id)

    }
  };

  // typing indicator false ----------------------
  falseTypingIndicator = (roomID: string, _id: string) => {
    roomchat.ref('Typing/' + roomID)
      .child(_id).set({
        isTyping: false
      }).then((data) => {
        console.log('false isTyping ', data)
      }).catch((error) => {
        console.warn('error ', error)
      })
  }

  // Load msgs from Database to Chat-------------------
  refOn = (counter: number, id: string, type: string, allUsers: Array<any>, callback: Function) => {
    if (type === 'group') {
      AllGroupUsers = allUsers
    }
    roomchat.ref('chatRoom/' + id)
      .limitToLast(counter === 1 ? 20 : 20 * counter)
      .on('value', (snapshot: any) => { snapshot.val() === null ? callback([]) : callback(this.parse(snapshot)) });
  }

  parse = (snapshot: any) => {
    var result = Object.keys(snapshot.val()).map(key => snapshot.val()[key])
    result.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
    return result;
  }

  refOff() {
    chatRef.off();
    userRef.off();
  }

  // uploading profile pic to firebase storage--------------
  uploadPic = (uid: string, paths: any, callback: Function) => {
    if (!!paths) {
      const imageRef = firebase.storage().ref('profilePic').child(uid);

      return imageRef.putFile(paths, { contentType: 'jpg' })
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
    } else {
      callback(null)
    }
  }

  // uploading msg pic to firebase storage--------------
  uploadMsgPic = (paths: any, callback: Function) => {
    debugger
    if (!!paths) {
      const name = Math.random().toString()
      const imageRef = firebase.storage().ref('msgPics').child(name);

      return imageRef.putFile(paths, { contentType: 'jpg' })
        .then(() => {
          return imageRef.getDownloadURL();
        })
        .then(url => {
          console.log(url);
          callback(url, name)
        })
        .catch(error => {
          console.warn('Error uploading image: ', error);
        });
    } else {
      callback(null)
    }
  }

  // uploading msg video to firebase storage--------------
  uploadMsgVideo = (paths: any, callback: Function) => {
    debugger
    if (!!paths) {
      const name = Math.random().toString()
      const videoRef = firebase.storage().ref('msgVideos').child(name);

      return videoRef.putFile(paths, { contentType: 'mp4' })
        .then(() => {
          return videoRef.getDownloadURL();
        })
        .then(url => {
          console.log(url);
          callback(url, name)
        })
        .catch(error => {
          console.warn('Error uploading video: ', error);
        });
    } else {
      callback(null)
    }
  }

  trueTypingIndicator = (roomID: string, myUID: string) => {
    roomchat.ref('Typing/' + roomID)
      .child(myUID)
      .set({
        isTyping: true
      }).then((data) => {
        console.log('true isTyping ', data)
      }).catch((error) => {
        console.warn('error ', error)
      })
  }

  fetchTyping = (roomID: string, uid: string, callback: Function) => {
    roomchat.ref('Typing/' + roomID)
      .child(uid)
      .on('value', function (snapshot: any) {
        callback(snapshot.val())
      })
  }

  creatingGroup = (gpId: string, allUsers: any, gpPic: string, creator: Object, callback: Function) => {
    const data = { avatar: gpPic === null ? '' : gpPic, creator: creator, AllUsers: allUsers }
    createGpRef.child(`/${gpId}`)
      .push(data)
    callback(data)
  }

  fetchGroupUsers = (roomID: string, callback: Function) => {
    firebase.database().ref('GroupUsers/' + roomID)
      .on('child_added', (snapshot: any) => { callback(snapshot.val()) });
  }

}
export default new FirebaseService();