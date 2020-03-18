import { } from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

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

  // checking permissions for FCM
  async checkPermission() {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  // getting token for FCM
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');

    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // user has a device token            
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  // requesting permissions
  async requestPermission() {
    try {
      await messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  // foreground notification message
  async readForegroundNotification() {
    messaging().onMessage(async message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  // background notification message
  async readBackgroundNotification() {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
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