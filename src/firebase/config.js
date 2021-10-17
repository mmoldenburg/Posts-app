// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcT7Sh8zH_tRzndAFl26OK16wTxUHLyqs",
    authDomain: "vue-blogapp-204a1.firebaseapp.com",
    projectId: "vue-blogapp-204a1",
    storageBucket: "vue-blogapp-204a1.appspot.com",
    messagingSenderId: "895814958056",
    appId: "1:895814958056:web:eb884935e54fca3f1dc25d"
  };

  firebase.initializeApp(firebaseConfig)

  const appFirebase = firebase.firestore()

  export { appFirebase }