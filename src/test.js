import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


// TO QUERY WITH FIREBASE DBS WE CHAIN THEM LIKE THE BELOW
firestore.collection('users').doc('cLfxgI7mHPCW3ESS6lp0').collection('cartItems').doc('FaMw2dcdgKrRUIIzPTOD')