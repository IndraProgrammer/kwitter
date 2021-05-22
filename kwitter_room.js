//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAP4tPxTbNmUs-8DtSxJIlQJbLS4eYAiP0",
      authDomain: "kwitter-31430.firebaseapp.com",
      databaseURL: "https://kwitter-31430-default-rtdb.firebaseio.com",
      projectId: "kwitter-31430",
      storageBucket: "kwitter-31430.appspot.com",
      messagingSenderId: "237812982911",
      appId: "1:237812982911:web:80a4cd3a80f73b08100b4a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
console.log(user_name);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

      function getData() {
            console.log("getData");
            firebase.database().ref("/").on('value', function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        //Start code
                        console.log(Room_names);
                        row = "<div class='room_name' id=" + Room_names + " onclick='redirect_to_room_name(this.id)'>#" + Room_names + "</div><hr>";
                        document.getElementById("output").innerHTML+=row;
                        //End code
                  });
            });
      }
      getData();
      function redirect_to_room_name(name){
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html"
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }