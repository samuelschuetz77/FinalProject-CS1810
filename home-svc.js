export async function GetLoginCredentials() 
{
    var CredResult = null;
    
    await fetch("http://chess-tournament-hub.azurewebsites.net/usercredentials")
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error("Invalid request, server error code!");
            }
            return response.json();
        })
        .then((responseData) => {
            CredResult = responseData;
            console.log(CredResult);
        })
        .catch(e => {
            var exmsg = "";
            if (e.message) exmsg += e.message;
            if (e.stack) exmsg += ' | stack: ' + e.stack;
            console.log(exmsg);
        });

    return CredResult;
}
export async function AuthenticateUser(email, password){
    const userCreds = await GetLoginCredentials();
    return userCreds.some(cred => cred.email === email && cred.password === password);
}