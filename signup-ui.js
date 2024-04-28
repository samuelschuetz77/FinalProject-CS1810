import { GetCredentials, PostCredentials } from "./signup-svc.js";

export function RegisterUser(){
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 
        const email = document.getElementById('email').value;
        console.log("Email entered:", email); // Add this line for debugging
        const confirmEmail = document.getElementById('confirm-email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        let isValid = true;
        if (email !== confirmEmail) {
            alert("Emails don't match!"); 
            isValid = false;
        }
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            isValid = false;
        }
        const emailExists = await CheckEmailExists(email);
        if (emailExists) {
            alert("Email is already associated with an account. Please use a different email address.");
            return; 
        }
        if (isValid) {
             await PostCredentials(email, password);
             //alert("Successfully Created Your Account!");
             window.location.href = './?showLogin=true'; // Redirect to Login modal with query param
        }
    });

}  

async function CheckEmailExists(email) {
    const CredentialArray = await GetCredentials();
    return CredentialArray.some(userCreds => userCreds.email === email);
}



RegisterUser();
