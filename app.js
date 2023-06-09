function SignUp() {
    var signUpEmail = document.getElementById("signUpEmail");
    var signUpPassword = document.getElementById("signUpPassword");
    var newUserEmail = signUpEmail.value;
    var newUserpassword = signUpPassword.value;
    localStorage.setItem("email", newUserEmail);
    localStorage.setItem("password", newUserpassword);
}
SignUp();
function signIn() {
    var signInEmail = document.getElementById("signInEmail");
    var signInPassword = document.getElementById("signInPassword");
    var userEmail = signInEmail.value;
    var userPassword = signInPassword.value;
    



    
}
signIn()