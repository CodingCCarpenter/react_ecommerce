// firebase base import
import firebase from 'firebase/app';

import 'firebase/firestore';
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
  }

  firebase.initializeApp(config);