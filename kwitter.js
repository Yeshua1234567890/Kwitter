function log_in() {
    name_user=document.getElementById("user_name").value;
    localStorage.setItem("user_name",name_user);
    window.location="kwitter_room.html";
}