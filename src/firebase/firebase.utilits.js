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

export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
const userRef= firestore.doc(`user/${userAuth.uid}`);
const snapShot=  await userRef.get();
if(!snapShot.exists){
    const{displayName,email}=userAuth;
    const createdAt = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
        
    } catch (error) {
        console.log("error creating messages",error.message)
    }
}
return userRef

}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore =firebase.firestore();
  

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase