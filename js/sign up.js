var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPass = document.getElementById("inputPass");
var inputRole = document.getElementById("inputRole"); // ✅ New line

var success = document.querySelector(".success");
var req = document.querySelector(".req");
var existed = document.querySelector(".existed");

var container = [];
if (localStorage.getItem("users") != null) {
    container = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
    var exist = false;

    // ✅ Fix typo here: inputPass.pass → inputPass.value
    if (inputName.value == "" || inputEmail.value == "" || inputPass.value == "" || inputRole.value == "") {
        success.classList.add("d-none");
        req.classList.remove("d-none");
        existed.classList.add("d-none");
    } else {
        var upInputs = {
            name: inputName.value,
            email: inputEmail.value,
            pass: inputPass.value,
            role: inputRole.value // ✅ Add role to stored user
        };

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
        } else {
            existed.classList.add("d-none");
            req.classList.add("d-none");
            success.classList.remove("d-none");

            container.push(upInputs);
            localStorage.setItem("users", JSON.stringify(container));
        }
    }
}
