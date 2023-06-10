function signIn() {
    var signInEmail = document.getElementById("signInEmail");
    var signInPassword = document.getElementById("signInPassword");
    var userEmail = signInEmail.value;
    var userPassword = signInPassword.value;
    var newUserEmail = localStorage.getItem("email");
    var newUserpassword = localStorage.getItem("password");
    
    
    console.log(userEmail);
    console.log(userPassword);
    console.log(newUserEmail);
    console.log(newUserpassword);







    if (newUserEmail === userEmail && newUserpassword === userPassword) {
        Swal.fire({
            icon: 'success',
            title: 'successful login',
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email or Password',
            text: 'Please enter valid email address or password',
        })
    }










    event.preventDefault();




}
