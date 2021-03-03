var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyC003a4RDfl_eSBfkEGuZ6Xg4Wr0xQyDJw",
  authDomain: "practicalwork-bc2b2.firebaseapp.com",
  databaseURL: "https://practicalwork-bc2b2-default-rtdb.firebaseio.com",
  projectId: "practicalwork-bc2b2",
  storageBucket: "practicalwork-bc2b2.appspot.com",
  messagingSenderId: "933839384927",
  appId: "1:933839384927:web:c380e4363debfe6e6f86ea",
  measurementId: "G-3NN5GWF6R7"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


