import  firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyCW8MoSowocgku-YD5fjVd0hgNK3TeKGEs",
  authDomain: "event-calendar-app-cc208.firebaseapp.com",
  databaseURL: "https://event-calendar-app-cc208-default-rtdb.firebaseio.com",
  projectId: "event-calendar-app-cc208",
  storageBucket: "event-calendar-app-cc208.appspot.com",
  messagingSenderId: "347147357831",
  appId: "1:347147357831:web:3e4c6d8ace83b73cf1b222"
};

    firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();