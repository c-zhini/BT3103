import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCS4yHQJbxbZDNJzw8-qUmIa5C7t-z_ea8",
  authDomain: "bt3103-fb450.firebaseapp.com",
  databaseURL: "https://bt3103-fb450.firebaseio.com",
  projectId: "bt3103-fb450",
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;