
const needByeYes = document.getElementById("need-bye-yes");
const byeRoundOptions = document.getElementById("bye-round-options");

needByeYes.addEventListener('change', () => {
    if (needByeYes.checked) {
        byeRoundOptions.style.display = 'block'; 
    } else {
        byeRoundOptions.style.display = 'none'; 
    }
});
