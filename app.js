function signUp() {
    var signUpEmail = document.getElementById("signUpEmail");
    var signUpPassword = document.getElementById("signUpPassword");
    var newUserEmail = signUpEmail.value;
    var newUserpassword = signUpPassword.value;
    localStorage.setItem("email", newUserEmail);
    localStorage.setItem("password", newUserpassword);
    window.location.replace("signIn.html");

    event.preventDefault();
}