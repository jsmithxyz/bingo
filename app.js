var currentNumber, currentLetter, currentBall, chosenBalls;

chosenBalls = [];

document.getElementById("ball").addEventListener("click", ballDrop);

function ballDrop() {
  currentNumber = Math.floor(Math.random() * 75) + 1;

  if (currentNumber < 16) {
    currentLetter = "B";
  } else if (currentNumber >= 16 && currentNumber < 31) {
    currentLetter = "I";
  } else if (currentNumber >= 31 && currentNumber < 46) {
    currentLetter = "N";
  } else if (currentNumber >= 46 && currentNumber < 61) {
    currentLetter = "G";
  } else {
    currentLetter = "O";
  }

  currentBall = `${currentLetter} ${currentNumber}`;
  chosenBalls.push(currentBall);
  console.log(currentBall);
  console.log(chosenBalls);
}
