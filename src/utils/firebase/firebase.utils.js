// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQP3DWIKRCZQ2OrSBkLf-pVYrBdlcxLbs",
  authDomain: "ztm-crown-clothing-649a5.firebaseapp.com",
  projectId: "ztm-crown-clothing-649a5",
  storageBucket: "ztm-crown-clothing-649a5.appspot.com",
  messagingSenderId: "173275941906",
  appId: "1:173275941906:web:59d896ab4b282d735b5ccb",
  measurementId: "G-KN4CFSC0SH"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);