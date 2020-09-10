// BASE IMPORT FOR FIREBASE
import firebase from 'firebase/app';

// IMPORT DB STORAGE FOR FIREBASE
import 'firebase/firestore';
// IMPORT AUTH FOR FIREBASE
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChejeKqYbUA68cXfQNpsVXhEOwk71KjdU",
    authDomain: "ecommerce-db-6e0ad.firebaseapp.com",
    databaseURL: "https://ecommerce-db-6e0ad.firebaseio.com",
    projectId: "ecommerce-db-6e0ad",
    storageBucket: "ecommerce-db-6e0ad.appspot.com",
    messagingSenderId: "802519036365",
    appId: "1:802519036365:web:9a661a025ede901d12d484",
    measurementId: "G-GVCGBHT7NJ"
};

// TAKE USER AUTH OBJECT FROM GOOGLE AND ALLOW US TO STORE IN FIREBASE DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // CREATE A REFERENCE FOR THE USERS DOCUMENT IN FIREBASE
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // CREATE A SNAPSHOT REFERENCE
    const snapShot = await userRef.get();

    // CHECK IF SNAPSHOT ALREADY EXISTS FOR USER
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // IF USER DOES NOT ALREADY EXIST, CREATE IT
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

// INITIALIZE FIREBASE WITH ABOVE CONFIG OBJECT
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;