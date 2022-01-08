const firebaseConfig = {
    apiKey: "AIzaSyA-0n51djULIZlwWllROCYPwNZjGS4un0M",
    authDomain: "letschat-ee2db.firebaseapp.com",
    databaseURL: "https://letschat-ee2db-default-rtdb.firebaseio.com",
    projectId: "letschat-ee2db",
    storageBucket: "letschat-ee2db.appspot.com",
    messagingSenderId: "1036250295495",
    appId: "1:1036250295495:web:f6464d84d694c3a4cb62e2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}