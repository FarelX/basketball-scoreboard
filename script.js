let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;
let homeScore = 0;

function addOne() {
  homeScoreEl.textContent = "";
  homeScore += 1;
  homeScoreEl.textContent += homeScore;
  highlight();
}

function addTwo() {
  homeScoreEl.textContent = "";
  homeScore += 2;
  homeScoreEl.textContent += homeScore;
  highlight();
}

function addThree() {
  homeScoreEl.textContent = "";
  homeScore += 3;
  homeScoreEl.textContent += homeScore;
  highlight();
}

function addOneGuest() {
  guestScoreEl.textContent = "";
  guestScore += 1;
  guestScoreEl.textContent += guestScore;
  highlight();
}

function addTwoGuest() {
  guestScoreEl.textContent = "";
  guestScore += 2;
  guestScoreEl.textContent += guestScore;
  highlight();
}

function addThreeGuest() {
  guestScoreEl.textContent = "";
  guestScore += 3;
  guestScoreEl.textContent += guestScore;
  highlight();
}

function resetGame() {
  guestScore = 0;
  homeScore = 0;
  guestScoreEl.textContent = "0";
  homeScoreEl.textContent = "0";
  guestScoreEl.classList.remove("highlight");
  homeScoreEl.classList.remove("highlight");
}

function highlight() {
  if (guestScore > homeScore) {
    guestScoreEl.classList.add("highlight");
    homeScoreEl.classList.remove("highlight");
  } else {
    homeScoreEl.classList.add("highlight");
    guestScoreEl.classList.remove("highlight");
  }
}
