document.addEventListener("DOMContentLoaded", function() {
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkPassword = document.getElementById("checkPassword");
let logIn = document.getElementById("submit");
let match;



logIn.addEventListener("click", function() {
    console.log(username + " " + password);
    usernameValidation();
    passwordValidation();
    revisePassword();

});

function revisePassword(){



    if(username.Value === undefined){
    alert("Please enter a username");
    console.log("username is empty")
    }

    else if (password.value !== checkPassword.value) {
        alert("passord does not match")
}else {
match = (password.value === checkPassword.value)
console.log(match);
}
}


function passwordValidation(){
 if (password.length >= 8 && password.length <= 16) {
    console.log("Password length is correct");
}
    else {
        alert("Password length should be between 8 and 16 characters");
        password.focus();
        return false;
    }

}


function usernameValidation(){
    let regex = /^[a-zA-Z0-9]+$/;

    if(username.value === regex) {
        console.log("Username is valid");
    }
    else {
        alert("Username should only contain alphanumeric characters");
        username.focus();
        return false;
    }
}
});