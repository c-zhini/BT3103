import firebase from 'firebase';

/*const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyDR5ZGNKSbpZ71uXOtH99-tX5qSWzgBr9M",
    authDomain: "bt3103-2020.firebaseapp.com",
    databaseURL: "https://bt3103-2020.firebaseio.com",
    projectId: "bt3103-2020"

  };
  */
 const firebaseConfig = {
  apiKey: "AIzaSyCS4yHQJbxbZDNJzw8-qUmIa5C7t-z_ea8",
  authDomain: "bt3103-fb450.firebaseapp.com",
  databaseURL: "https://bt3103-fb450.firebaseio.com",
  projectId: "bt3103-fb450",
};
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;