const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand'); 
const hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);

function setDate() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDegree = (sec / 60) * 360;
    secondHand.style.transform = `rotate(${secDegree + 90}deg)`;

    const min = now.getMinutes();
    const minDegree = ((min / 60) * 360) + ((sec/60)*6);
    minHand.style.transform = `rotate(${minDegree + 90}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + ((min/60)*30);
    hourHand.style.transform = `rotate(${hourDegree + 90}deg)`;
};