let hoursHand = document.querySelector("#hhand");
let minutesHand = document.querySelector("#mhand");
let secondsHand = document.querySelector("#shand");
setInterval(() => {
    let time = new Date();
    let tHours = time.getHours();
    let tMinutes = time.getMinutes();
    let tSeconds = time.getSeconds();
    hoursHand.style.transform = `rotate(${(((tHours - 3) * 360) / 12)}deg)`;
    minutesHand.style.transform = `rotate(${(((tMinutes - 15) * 360) / 60)}deg)`;
    secondsHand.style.transform = `rotate(${(((tSeconds - 15) * 360) / 60)}deg)`;
    console.log(tHours + ":" + tMinutes + ":" + tSeconds);

}, 1000);