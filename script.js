// Selectors
const form = document.querySelector("#form");
const test = document.querySelector("#test");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getValue();
});

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let guessCount = 0;

function getValue() {
  const numberGuessed = document.getElementById("numberGuessed").value;
  guessCount++;
  if (randomNumber == numberGuessed) {
    test.textContent = `Det var skrivet i stjärnorna att du skulle gissa rätt! Antal försök ${guessCount}`;
    console.log("Rätt");
  } else if (randomNumber < numberGuessed) {
    test.textContent =
      "Den som siktar mot månen hamnar bland sjärnorna...gissa lägre!";
    console.log("lägre");
  } else if (randomNumber > numberGuessed) {
    test.textContent = "Venus står i retrograd, gissa högre!";
    console.log("högre");
  } else {
    text = "Nu blev något knasigt, testa igen";
  }
}

function resetGame() {
  form.reset();
  console.clear();
  guessCount = 0;
  randomNumber = Math.ceil(Math.random() * 100);
  console.log(randomNumber);
  test.textContent = "";
}

const button = document.querySelector("#btn");

button.addEventListener("click", resetGame);
