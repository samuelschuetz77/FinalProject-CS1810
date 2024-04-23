// Get elements
const registerButton = document.getElementById('register-button'); // Assuming you have a link to registration
const loginModal = document.getElementById('login-modal');

// Function to check login status (you'll need backend support for this)
function isLoggedIn() {
    // Placeholder - Replace with a call to your backend API
    return localStorage.getItem('isLoggedIn') === 'true'; 
}

// Function to open the login modal
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

// // Close modal when the close button is clicked
// closeBtn.addEventListener('click', () => {
//     loginModal.style.display = 'none';
//     window.location.href = 'index.html'
// });



// Logic inside your login form submit handler:
function handleLoginSubmit(event) {
    event.preventDefault();
    // ... Send login data to backend ...
 
    if (loginSuccessful) { // Replace with your backend success check
        loginModal.style.display = 'none';
        window.location.href = '/registration'; // Redirect to registration
    } else {
        // ... Handle login failure ... 
    }
 }
