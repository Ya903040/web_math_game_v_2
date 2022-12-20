let countdown = 30;


let intervalID = setInterval(function () {
    // Decrement the countdown
    countdown--;

    // Update the countdown on the page
    document.getElementById("timer").innerHTML = countdown;

    // If the countdown reaches zero, redirect the page
    if (countdown === 0) {
        location.href = "../time_is_up.html";
    }
}, 1000);

