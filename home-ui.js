import { GetLoginCredentials, AuthenticateUser } from './home-svc.js';


// Get elements
const registerButton = document.getElementById('register-button'); // Assuming you have a link to registration
const loginModal = document.getElementById('login-modal');

var IsLoggedIn = false;

function showLoginModal() {
    loginModal.style.display = 'block';
}
// Show modal when the registration link is clicked
registerButton.addEventListener('click', () => {
    if (isLoggedIn()){
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
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; ///// 4/24 4:58 pm ////////////////////////////////////////////////////// 


});


 checkForLoginRedirect();
