/* Open Nav */
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

/* Open RSVP */
function openRsvp() {
  document.getElementById("rsvp").style.opacity= "1";
}

/* Close */
function closeRsvp() {
  document.getElementById("rsvp").style.opacity = "0";
}

/* Countdown Timer */
const second = 1000,
  minute = second * 60;

let countDown = new Date('Sep 6, 2019 06:30:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('minutes').innerText = Math.floor(distance / (minute)),
      document.getElementById('seconds').innerText = Math.floor(distance / (second));

    if (distance < 0) {
       clearInterval(x);
      '0';
      }

    }, second)
