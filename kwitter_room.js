
var  firebaseConfig = {
      apiKey: "AIzaSyA4Gl7ujMZsyDwPPjW7ppck0upPEES6W1s",
      authDomain: "yeshuachat.firebaseapp.com",
      databaseURL: "https://yeshuachat-default-rtdb.firebaseio.com",
      projectId: "yeshuachat",
      storageBucket: "yeshuachat.appspot.com",
      messagingSenderId: "1025126917196",
      appId: "1:1025126917196:web:07883e8140a089662c80e9"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
