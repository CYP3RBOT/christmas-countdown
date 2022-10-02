const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
const dates = document.getElementsByClassName("date");

let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString();
    document.getElementById("hours").textContent = hours.toString();
    document.getElementById("mins").textContent = minutes.toString();
    document.getElementById("secs").textContent = seconds.toString();

}, 1000);

