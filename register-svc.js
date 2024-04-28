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



export async function RegisterPlayer( firstname, lastname, college, section, elo, bi, biround ) 
{
    var playerInformation = {
        firstname, lastname, college, section, elo, bi, biround
    };

    await fetch(`http://localhost:5147/registeredplayers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerInformation)
    });
}

export function getCheckedRadioValue(radios) {
    for (const radio of radios) {
      if (radio.checked) {
        return radio.value;  
      }
    }
    return null;
  }
  
