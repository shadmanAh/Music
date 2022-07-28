import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCIdrCy_Uf6nfUgMpayjDr7INvvINI8kQ4',
  authDomain: 'music-70fad.firebaseapp.com',
  projectId: 'music-70fad',
  storageBucket: 'music-70fad.appspot.com',
  appId: '1:381066599684:web:a8db37bac862f3ea6a4451',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
