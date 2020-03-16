import { } from '@react-native-firebase/database';
// import { } from '@react-native-firebase/auth';
// import { } from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';

let userRef = firebase.database().ref('AllUsers/')
let chatRef = firebase.database().ref('Msgs/')
let roomchat = firebase.database()

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
            ? ''
            : '1:409289893036:android:80c0a186841f54147f6b09',
          databaseURL: 'https://crashlyticsdemo-31060.firebaseio.com',
          messagingSenderId: '409289893036',
          projectId: 'crashlyticsdemo-31060',
          storageBucket: 'crashlyticsdemo-31060.appspot.com',
        },
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
}
export default new FirebaseService();