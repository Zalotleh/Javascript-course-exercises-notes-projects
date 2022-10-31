const clock = document.querySelector('.clock-container');
const clockDate = document.querySelector('.date-container')
/*
created a function called tick which we will call it every second, and get the now variable time

*/


const tick = ()=>{
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const d = dateFns.format(now, 'dddd Do');
    const mnth = dateFns.format(now, 'MMMM');
    const yr = dateFns.format(now, 'YYYY')

    html1 = `
        <div class='time-container'> 
            <h1 class='time'>${h}</h1>
        </div>
        <h1 class='time'>:</h1>
        <div class='time-container'> 
        <h1 class='time'>${m}</h1>
        </div>
        <h1 class='time'>:</h1>
        <div class='time-container'> 
        <h1 class='time'>${s}</h1>
        </div>
    `;

    html2= `
    <span class='date'>${d}</span> 
    <span class='date'>${mnth}</span> 
    <span class='date'>${yr}</span>
    `;

    clock.innerHTML=html1;
    clockDate.innerHTML=html2
};

setInterval(tick, 1000);