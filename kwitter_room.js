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
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
       room_name = document.getElementById("room_name").value;
       localStorage.setItem("room_name", room_name);
 
       firebase.database( ).ref("/").child(room_name).update({
             purpose : "adding room name"
       });
 
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=' "+Room_names + " ' onclick='redirectToRoomName(this.id)'># " + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}