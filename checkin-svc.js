export async function GetPlayersInfo() 
{
    var PlayerInfoPull = null;
    
    await fetch("http://localhost:5147/registeredplayers")
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error("Invalid request, server error code!");
            }
            return response.json();
        })
        .then((responseData) => {
            PlayerInfoPull = responseData;
            console.log(PlayerInfoPull);
        })
        .catch(e => {
            var exmsg = "";
            if (e.message) exmsg += e.message;
            if (e.stack) exmsg += ' | stack: ' + e.stack;
            console.log(exmsg);
        });

    return PlayerInfoPull;
}
