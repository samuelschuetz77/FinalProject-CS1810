import { GetLoginCredentials, AuthenticateUser } from './home-svc.js';


// Get elements
const registerButton = document.getElementById('register-button'); 
const loginModal = document.getElementById('login-modal');
var closebtn = document.getElementById('close-btn');
console.log(closebtn);




let LoggedIn = false;
function isLoggedIn(){
    return LoggedIn
}

function showLoginModal() {
    loginModal.style.display = 'block';
}

function hideModal(){
    loginModal.style.display = 'none';
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

// Close modal when the close button is clicked
closebtn.addEventListener('click', () => {
   hideModal();
});

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; ///// 4/24 4:58 pm ////////////////////////////////////////////////////// 
    const authenticated = await AuthenticateUser(email, password);

    if(authenticated){
        //alert("authenticated successfully")
        window.location.href = 'register.html';

    }
    else{
        console.log(authenticated);
        alert("did not work!");
    }

});


 checkForLoginRedirect();
