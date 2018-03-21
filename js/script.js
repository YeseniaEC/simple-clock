 const secondHand = document.querySelector('.second-hand');
 const minuteHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');

 function setDate() {

    const now = new Date(); //Grabs the date from the machine.
    // This code grabs the number of seconds, to reflect the seconds hand on the clock
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // 60 seconds in a minute, times 360 degrees, offset the degrees to 90 to reflect a clock hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;//here we rotate the hands according to the degrees
    
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12 ) * 360 ) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    
 }

 setInterval(setDate, 1000);
