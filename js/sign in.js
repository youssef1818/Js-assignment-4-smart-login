var success = document.querySelector(".success")
var req = document.querySelector(".req")
var notExisted = document.querySelector(".notExisted")
var signinEmail=document.getElementById("signinEmail");
var signinPass=document.getElementById("signinPass");
var loginBtn=document.getElementById("button")
var welcome=document.getElementById("welcome");
var container = [];

if (localStorage.getItem("users") != null) {
    container = JSON.parse(localStorage.getItem("users"))
}
function signIn(){
    
    var userExist = false;
    if (signinEmail.value == "" || signinPass.value == "" ) {
        success.classList.add("d-none");
        req.classList.remove("d-none");
        existed.classList.add("d-none");
    }
    else{
        for (var i = 0; i < container.length; i++) {
            if (container[i].email === signinEmail.value && container[i].pass==signinPass.value) {
    
                userExist = true;
                localStorage.setItem("username", container[i].name);
                window.location.href = "home.html";
                break;
            }
        }
        if (!userExist) {
            // loginBtn.setAttribute("href","home.html")
            success.classList.add("d-none");
            req.classList.add("d-none");
            notExisted.classList.remove("d-none");
        }
       
    }

}