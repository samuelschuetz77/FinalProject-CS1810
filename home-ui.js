import { GetLoginCredentials, AuthenticateUser } from './home-svc.js';


// Get elements
const registerButton = document.getElementById('register-button'); //
const loginModal = document.getElementById('login-modal');
let Loggedin = false; 

function isLoggedIn(){
    return Loggedin; 
};

function showLoginModal() {
    loginModal.style.display = 'block';
}
// Show modal when the registration link is clicked
registerButton.addEventListener('click', () => {
    if (Loggedin){
        window.location.href = 'register.html';    
    }
    else {
        showLoginModal();
    }
});

function checkForLoginRedirect() { 
    const urlParams = new URLSearchParams(window.location.search); // Get query params
    const showLogin = urlParams.get('showLogin');

    if (showLogin === 'true') {
        showLoginModal();
    }
}

// // Close modal when the close button is clicked
// closeBtn.addEventListener('click', () => {
//     loginModal.style.display = 'none';
//     window.location.href = 'index.html'
// });

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; ///// 4/24 4:58 pm ////////////////////////////////////////////////////// 
    const loginSuccessful = await AuthenticateUser(email, password);
    console.log(AuthenticateUser);
    if (loginSuccessful){
        Loggedin= true;
        console.log("login successful");
        alert("Log in successful");
        window.location.href='/register.html';
    }
    else{
        console.log(AuthenticateUser);
    }
});


 checkForLoginRedirect();
