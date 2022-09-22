// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAENmmPsJNhGybqD8ZENHPlZIAsySKjhiU",
    authDomain: "letschat-3bb39.firebaseapp.com",
    databaseURL: "https://letschat-3bb39-default-rtdb.firebaseio.com",
    projectId: "letschat-3bb39",
    storageBucket: "letschat-3bb39.appspot.com",
    messagingSenderId: "453700338893",
    appId: "1:453700338893:web:23e87686657c11b0acd584",
    measurementId: "G-F4J2N1SSDH"
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
row = "<div class='room_name' id="+room_name+" onclick=''redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
//End code
 } });  }); }
getData();




