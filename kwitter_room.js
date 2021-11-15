// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmZYPgLF02IzNN-qRtz49M3WiCfrAfWHY",
    authDomain: "kwitter-webapp-3b6ad.firebaseapp.com",
    databaseURL: "https://kwitter-webapp-3b6ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-webapp-3b6ad",
    storageBucket: "kwitter-webapp-3b6ad.appspot.com",
    messagingSenderId: "767649661612",
    appId: "1:767649661612:web:8e5ef7171f59c1a60c9509"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room_Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
 });});}
getData();
function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}