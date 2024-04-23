const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true; // Assume valid initially

    // Check if emails match
    if (email !== confirmEmail) {
        alert("Emails don't match!"); // Change to a better error display later
        isValid = false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        isValid = false;
    }

    // If everything is valid, simulate form submission for your demo
    if (isValid) {
        alert("Success! Account would be created."); 
        // When you have a backend, you'd send the data here
    }
});
