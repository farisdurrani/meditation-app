// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT6FVJ8LM-2DpKAzvUdYPGD95WTbleATw",
  authDomain: "meditation-app-eb748.firebaseapp.com",
  projectId: "meditation-app-eb748",
  storageBucket: "meditation-app-eb748.appspot.com",
  messagingSenderId: "442145803304",
  appId: "1:442145803304:web:b7fab742f8cc08ee6b391d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };