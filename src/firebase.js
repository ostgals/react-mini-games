import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAzosKOuukZQcmcgZMRG15wSv7-YPZToZ4",
  authDomain: "vue-math-training.firebaseapp.com",
  databaseURL: "https://vue-math-training.firebaseio.com",
  projectId: "vue-math-training",
  storageBucket: "vue-math-training.appspot.com",
  messagingSenderId: "739917279758"
};
firebase.initializeApp(config);

export const providers = {
  google:   firebase.auth.GoogleAuthProvider,
  facebook: firebase.auth.FacebookAuthProvider,
  twitter:  firebase.auth.TwitterAuthProvider
};

export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;