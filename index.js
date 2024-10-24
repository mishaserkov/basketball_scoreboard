homeScore = document.getElementById("home_score");
guestScore = document.getElementById("guest_score");

homeCount = 0;
guestCount = 0;

function plusOneHome() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function plusTwoHome() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function plusThreeHome() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function plusOneGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function plusTwoGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function plusThreeGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function gameReset() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
}