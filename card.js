var trigger = document.getElementById("trigger");

trigger.addEventListener("click", main);

let chosenArray = [];
let limit;

function main() {
  for (var i = 0; i < 24; i++) {
    console.log(chosenArray);
    if (i >= 0 && i <= 4) {
      min = 1;
      max = 15;
      blockGenerator(max, min, i);
    } else if (i > 4 && i <= 9) {
      min = 16;
      max = 30;
      blockGenerator(max, min, i);
    } else if (i > 9 && i <= 13) {
      min = 31;
      max = 45;
      blockGenerator(max, min, i);
    } else if (i > 13 && i <= 18) {
      min = 46;
      max = 60;
      blockGenerator(max, min, i);
    } else if (i > 18 && i < 24) {
      min = 61;
      max = 75;
      blockGenerator(max, min, i);
    }
  }
  chosenArray = [];
}

function blockGenerator(max, min, i) {
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  if (chosenArray.includes(randomNumber)) {
    blockGenerator(max, min, i);
  } else {
    chosenArray.push(randomNumber);
    document.querySelector("#square" + i).textContent = `${randomNumber}`;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("td").click(function () {
  console.log(event.target.id);
  $(`#${event.target.id}`).toggleClass("myClass");
});
