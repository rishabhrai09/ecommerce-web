import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
const config={
    apiKey: "AIzaSyCiysi65aRMT1N2kvC3HLliNiKuFcBNde0",
    authDomain: "web-ecommerce-93477.firebaseapp.com",
    databaseURL: "https://web-ecommerce-93477.firebaseio.com",
    projectId: "web-ecommerce-93477",
    storageBucket: "web-ecommerce-93477.appspot.com",
    messagingSenderId: "479769733178",
    appId: "1:479769733178:web:edc4beeb34b4dcc0d86d03",
    measurementId: "G-0EH3GLJSRN"
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore =firebase.firestore();
  

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase