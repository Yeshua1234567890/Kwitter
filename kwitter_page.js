function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_select");
    window.location="index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyA4Gl7ujMZsyDwPPjW7ppck0upPEES6W1s",
    authDomain: "yeshuachat.firebaseapp.com",
    databaseURL: "https://yeshuachat-default-rtdb.firebaseio.com",
    projectId: "yeshuachat",
    storageBucket: "yeshuachat.appspot.com",
    messagingSenderId: "1025126917196",
    appId: "1:1025126917196:web:07883e8140a089662c80e9"
  };

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_select");
  document.getElementById("wel_come").innerHTML="Welcome"+user_name+"to #"+room_name;

  function send(){
      new_message=document.getElementById("new_msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:new_message,
          like:0
      });
      document.getElementById("new_msg").value="";
      }
      function get_data(){
          firebase.database().ref("/"+room_name).on("value",function(snapshot)){
              document.getElementById("output").innerHTML="";
              snapshot.forEach(function(childsnapshot){
                  child_key=childsnapshot.key;
                  child_data=childsnapshot.val();
                  if(child_key !="purpose")
                  {
                      message_id=child_key;
                      message_data=child_data;

                      name_user=message_data['name'];
                      msg=message_data['message'];
                      yourlikes=message_data['like'];

                      name_tag="<h4>"+name_user+"</h4>";
                      message_tag="<h4>"+msg+"</h4>";

                      like_button="<button class='btn btn-primary' id="+message_id+" onclick = 'update_likes(this.id);' value = "+ yourLikes +" > Likes : "+ yourLikes +" </button> <hr>";

                      row_data=name_tag+message_tag+like_button;

                      document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+row_data;
                    }
              });
          };
      }
      get_data();

      function update_likes(button_id){
          old_likes=document.getElementById(button_id).value;
          update_likes=Number(old_likes)+1;
          firebase.database().ref(room_name).child(button_id).update({
              like:update_like
          });
      }
    