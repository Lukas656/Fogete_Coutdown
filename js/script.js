// Contador 
const dayEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secundsEl = document.getElementById("secunds")

const newYears =  "09 july 2022"

function coutdown(){
    
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecunds = (newYearsDate - currentDate)/1000;

   // Contador
    const days = Math.floor(totalSecunds / 3600 / 24);
    const hours = Math.floor(totalSecunds / 3600) % 24;
    const mins = Math.floor(totalSecunds / 60) % 60;
    const secunds = Math.floor(totalSecunds) % 60;

    
    dayEl.innerHTML = days + ' :';
    hoursEl.innerHTML = formatTime(hours) + ' :';
    minsEl.innerHTML = formatTime(mins) + ' :';
    secundsEl.innerHTML = formatTime(secunds);

}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
    
}

coutdown();
setInterval(coutdown, 1000);

// Modal

function iniciaModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'closed'){
            modal.classList.remove('mostrar')
        }
    });
}
const btn = document.querySelector('.modal-btn');
btn.addEventListener('click', () => iniciaModal('modal-promocao'));

