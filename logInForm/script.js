document.addEventListener("DOMContentLoaded", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let checkPassword = document.getElementById("checkPassword");
  let logIn = document.getElementById("submit");
  let match;

  logIn.addEventListener("click", function () {
    console.log(username + " " + password);
    usernameValidation();
    passwordValidation();
    revisePassword();
  });
  //check if passwords match
  function revisePassword() {

    if (password.value !== checkPassword.value) {
      alert("passord does not match");
    } else {
      match = password.value === checkPassword.value;
      console.log(match);
    }
  }

  //validate password length and check password value
  function passwordValidation() {


    if (password.length >= 8 && password.length <= 16) {
      console.log("Password length is correct");
    } else {
      alert("Password length should be between 8 and 16 characters");
      console.log(password.length)
      return false;
    }
  }

  // no symbols can be entered && checks if username is empty
  function usernameValidation() {
    let regex = /^[a-zA-Z0-9]+$/;
    
    
    if (username.value === regex) {
      console.log("Username is valid");
    } else {
      alert("Username should only contain alphanumeric characters");
      return false;
    }
  }
});
