import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyBBtAHdjpTEafOL5aBl5bFqrIfT6qayyKI",
    authDomain: "chatapp-b103e.firebaseapp.com",
    databaseURL: "https://chatapp-b103e.firebaseio.com",
    storageBucket: "chatapp-b103e.appspot.com",
    messagingSenderId: "25234890207"
};
firebase.initializeApp(config);

export default firebase;