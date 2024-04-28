import { RegisterPlayer, getCheckedRadioValue } from "./register-svc.js";



// Radios
const sectionRadios = document.querySelectorAll('input[name="ToI"]');
const byeRequest = document.querySelectorAll('input[name="need-bye"]');
const byeRound = document.querySelectorAll('input[name="bye-round"]');


function handleBiYesNO(){
    const needByeYes = document.getElementById("need-bye-yes");
    const byeRoundOptions = document.getElementById("bye-round-options");
    needByeYes.addEventListener('change', () => {
        if (needByeYes.checked) {
            byeRoundOptions.style.display = 'block'; 
        } else {
            byeRoundOptions.style.display = 'none'; 
        }
    });
}

async function FormRegisterPlayer(){
    const form = document.getElementById('reg-form');
    form.addEventListener('submit', (event) =>{   //firstname, lastname, college, section, elo, bi, biround
        event.preventDefault();
        const section = getCheckedRadioValue(sectionRadios);
        const bi = getCheckedRadioValue(byeRequest);
        let biround = getCheckedRadioValue(byeRound);
        const firstname = document.getElementById('fname').value;
        const lastname = document.getElementById('lname').value;
        const college = document.getElementById('college').value;
        const elo = document.getElementById('rating').value;
        if (bi === "no"){
            biround = 0;
        }
        console.log(firstname, lastname, college, section, elo, bi, biround);
        

        RegisterPlayer(firstname, lastname, college, section, elo, bi, biround);
        
    });
}
FormRegisterPlayer();

handleBiYesNO();


