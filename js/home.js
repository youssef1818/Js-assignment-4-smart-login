document.addEventListener("DOMContentLoaded", function () {
    var welcome = document.getElementById("welcome");
    var username = localStorage.getItem("username"); // Retrieve username from localStorage

    if (username && welcome) {
        welcome.textContent = username;
    }
});
var logout=document.getElementById("logout");
logout.addEventListener("click",function(){
    window.location.href = "index.html";

})