import { GetPlayersInfo } from "./checkin-svc.js";

const playerpool = document.getElementById('playerpool');
const playerSearch = document.getElementById('playerSearch');
const registerButton = document.getElementById('register-button');
let originalPlayerData = []; 
let filteredPlayers =[];

registerButton.addEventListener('click', () => {
  window.location.href = './?showLogin=true';
});

const json = await GetPlayersInfo();
originalPlayerData = json;


async function CreatePlayerCard(firstname, lastname, section, school, rating){
    const ppCard = document.createElement('div');
    const namenamename = document.createElement('p');
    const sectionsection = document.createElement('p');
    const schoolschool = document.createElement('p');
    const ratingrating = document.createElement('p');

    ppCard.classList.add('ppCard');
    ppCard.dataset.playerinfo = `${firstname}|${lastname}|${section}`; 
    namenamename.classList.add('nameoncard');
    sectionsection.classList.add('sectiononcard');
    schoolschool.classList.add('schooloncard');
    ratingrating.classList.add('ratingoncard');

    namenamename.textContent = `${firstname} ${lastname}`;
    sectionsection.textContent = `Section: ${section.charAt(0).toUpperCase()}${section.slice(1)}`;
    schoolschool.textContent =`${school}`;
    ratingrating.textContent=`Aprox Elo: ${rating}`;

    ppCard.appendChild(namenamename);
    ppCard.appendChild(ratingrating);
    ppCard.appendChild(sectionsection);
    ppCard.appendChild(schoolschool);

    playerpool.appendChild(ppCard);
}

async function RenderAllCards(json1){
    json1.forEach(record => {
        const firstname = record.firstname; 
        const lastname = record.lastname;
        console.log(firstname,lastname);
        const section = record.section;
        const elo = record.elo;
        const school = record.college;
        CreatePlayerCard(firstname,lastname,section, school, elo);
    });
}
RenderAllCards(originalPlayerData);

playerSearch.addEventListener('input', () => {
    playerpool.innerHTML='';
    const searchTerm = playerSearch.value.toLowerCase();
    filteredPlayers = originalPlayerData.filter(player => {
      return (
        player.firstname.toLowerCase().includes(searchTerm) ||
        player.lastname.toLowerCase().includes(searchTerm) ||
        player.college.toLowerCase().includes(searchTerm)
      );
    });
    RenderAllCards(filteredPlayers);
  });
 

