export async function GetLoginCredentials(){
    const response = await fetch("http://localhost:5147/usercredentials");
    if (!response.ok){
        throw new Error('Failed Loading Credentials');
    }
    return await response.json;
}
export async function AuthenticateUser(email, password){
    const userCreds = await GetLoginCredentials();
    return userCreds.some(cred => cred.email === email && cred.password === password)
}