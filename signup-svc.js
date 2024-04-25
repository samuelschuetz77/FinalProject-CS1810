export async function GetCredentials() 
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

export async function PostCredentials( email, password) 
{
    var newUserCredentials = {
        email, password
    };

    await fetch(`http://localhost:5147/usercredentials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserCredentials)
    });
}