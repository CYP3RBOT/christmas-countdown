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

    document.getElementById("days").textContent = days.toString()+" Days";
    document.getElementById("hours").textContent = hours.toString()+" Hours";
    document.getElementById("mins").textContent = minutes.toString()+" Minutes";
    document.getElementById("secs").textContent = seconds.toString()+" Seconds";


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

let iter = false;
setInterval(
    () => {
        if (iter) {
            dates[0].style.color="green";
            dates[1].style.color="red";
            dates[2].style.color="green";
            dates[3].style.color="red";
            iter = false;
        } else {
            dates[0].style.color="red";
            dates[1].style.color="green";
            dates[2].style.color="red";
            dates[3].style.color="green";
            iter = true;
        }
    }, 1500);


function copyTimestamp() {
    const copyTime = document.querySelector("#copy-time");

    copyTime.disabled = true;

    let now = new Date().getTime();
    let content = countDownDate-now;

    navigator.clipboard.writeText(content.toString())
    .catch(err => {
        console.log('Error occurred when copying clipboard', err);
    })

    copyTime.textContent = "Copied to Clipboard!";
    setTimeout(()=>{copyTime.textContent = "Copy Timestamp";}, 3000);
    copyTime.disabled = false;

}

