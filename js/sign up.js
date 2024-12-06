var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPass = document.getElementById("inputPass");
var success = document.querySelector(".success")
var req = document.querySelector(".req")
var existed = document.querySelector(".existed")

var container = [];
if (localStorage.getItem("users") != null) {
    container = JSON.parse(localStorage.getItem("users"))
}
function addUser() {
    var exist = false;
    if (inputName.value == "" || inputEmail.value == "" || inputPass.pass == "") {
        success.classList.add("d-none");
        req.classList.remove("d-none");
        existed.classList.add("d-none");
    }
    else {
        var upInputs = {
            name: inputName.value,
            email: inputEmail.value,
            pass: inputPass.value,
        }

        for (var i = 0; i < container.length; i++) {
            if (container[i].email === upInputs.email) {

                exist = true;
                break;
            }
        }
        if (exist) {

            success.classList.add("d-none");
            req.classList.add("d-none");
            existed.classList.remove("d-none");
        }
        else {
            existed.classList.add("d-none");
            req.classList.add("d-none");
            success.classList.remove("d-none");
            container.push(upInputs);
            localStorage.setItem('users', JSON.stringify(container))
        }
    }
    

}
