function lightTimer() {
  setTimeout(activeRed, 0);
}

function activeYellow () {
  activeLight('red', 'green', 'yellow', 'yellow');
  setTimeout(restartPage, 2000);
}

function activeGreen() {
  activeLight('red', 'yellow', 'green', 'green');
  setTimeout(activeYellow, 1000)
}


function activeRed() {
  activeLight('green', 'yellow', 'red', 'red');
  setTimeout(activeRedAndYellow, 1000);
}

function activeRedAndYellow() {
  activeLight('green', 'green', 'red', 'yellow');
  setTimeout(activeGreen, 1000)
}

function restartPage() {
  location.reload()
}

function activeLight(divId1, divId2, divId3, divId4) {
  document.getElementById(divId1).classList.remove("active");
  document.getElementById(divId2).classList.remove("active");
  document.getElementById(divId3).classList.add("active");
  document.getElementById(divId4).classList.add("active");
}