let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;
let homeScore = 0;

function addOne() {
  homeScoreEl.textContent = "";
  homeScore += 1;
  homeScoreEl.textContent += homeScore;
}

function addTwo() {
  homeScoreEl.textContent = "";
  homeScore += 2;
  homeScoreEl.textContent += homeScore;
}

function addThree() {
  homeScoreEl.textContent = "";
  homeScore += 3;
  homeScoreEl.textContent += homeScore;
}

function addOneGuest() {
  guestScoreEl.textContent = "";
  guestScore += 1;
  guestScoreEl.textContent += guestScore;
}

function addTwoGuest() {
  guestScoreEl.textContent = "";
  guestScore += 2;
  guestScoreEl.textContent += guestScore;
}

function addThreeGuest() {
  guestScoreEl.textContent = "";
  guestScore += 3;
  guestScoreEl.textContent += guestScore;
}
