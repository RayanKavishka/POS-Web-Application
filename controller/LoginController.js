import {saveUserAccount, checkValidUser} from "../model/LoginModel.js"


// Login page show
$('#signupSection').addClass('d-none');
$('#loginSection').removeClass('d-none');


// =======================================  Log In Section =======================================


// Navigation control in log-in
$('#sign-upNavigateBtnInLogin').on('click',  function () {
    $('#signupSection').removeClass('d-none');
    $('#loginSection').addClass('d-none');
});

$('#log-inNavigateBtnInLogin').on('click',  function () {
    $('#signupSection').addClass('d-none');
    $('#loginSection').removeClass('d-none');
});


// Log-in Btn control
$('#loginBtn').on('click', function () {
    let userName = $('#userNameLogin').val();
    let password = $('#passwordLogin').val();

    if (userName === "") {
        Swal.fire({icon: "error", title: "Invalid User Name!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (password === "") {
        Swal.fire({icon: "error", title: "Invalid Password!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (!checkValidUser(userName, password)) {
        Swal.fire({icon: "error", title: "Oops! Something Went Wrong", background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        loginToSystem();
        cleanLogInForm();
    }
});


// Dashboard Load
const loginToSystem = () => {
    window.location.replace('bsms.html');
};


const cleanLogInForm = () => {
    $('#userNameLogin').val("");
    $('#passwordLogin').val("");
};


// =======================================  Sign Up Section =======================================


// Navigation control in sign-up
$('#sign-upNavigateBtnInSignup').on('click',  function () {
    $('#signupSection').removeClass('d-none');
    $('#loginSection').addClass('d-none');
});

$('#log-inNavigateBtnInSignup').on('click',  function () {
    $('#signupSection').addClass('d-none');
    $('#loginSection').removeClass('d-none');
});


// Sign-up Btn control
$('#signUpBtn').on('click', function () {
    let userName = $('#userNameSignup').val();
    let password = $('#passwordSignup').val();
    let confirmPass = $('#confirmPassword').val();

    if (userName === "") {
        Swal.fire({icon: "error", title: "Invalid User Name!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (password === "") {
        Swal.fire({icon: "error", title: "Invalid Password!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (confirmPass === "") {
        Swal.fire({icon: "error", title: "Please Enter Confirm Password!", background: "#2c2c2c", color: "#f1f1f1"});

    } else if (password !== confirmPass) {
        Swal.fire({icon: "error", title: "Oops! Your Passwords Don’t Match. Please Try Again!",
            background: "#2c2c2c", color: "#f1f1f1"});

    } else {
        saveUserAccount(userName, password);

        Swal.fire({icon: "success", title: "Your Account Created Successfully!", background: "#2c2c2c", color: "#f1f1f1"});
        cleanSignUpForm();
    }
});


// Clean sign up form
const cleanSignUpForm = () => {
    $('#userNameSignup').val("");
    $('#passwordSignup').val("");
    $('#confirmPassword').val("");
};


// Do have acc (loginBtn) handle
$('#haveAccBtn').on('click', function () {
    $('#signupSection').addClass('d-none');
    $('#loginSection').removeClass('d-none');
});