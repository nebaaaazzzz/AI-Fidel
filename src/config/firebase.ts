// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmSJqi1gVvI4VTGQ9bdWBy4clkN6dhqdM',
  authDomain: 'fidel-a1b19.firebaseapp.com',
  projectId: 'fidel-a1b19',
  storageBucket: 'fidel-a1b19.appspot.com',
  messagingSenderId: '829991181629',
  appId: '1:829991181629:web:d29b5f6d69cf67c747f954'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
