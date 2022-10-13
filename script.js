// Selectors
const form = document.querySelector("#form");
const test = document.querySelector("#test");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);
let guessCount = 0;
// behöver sätta guessCount tillbaks till 0 i resetfunktionen

function getValue() {
  const numberGuessed = Number(document.getElementById("numberGuessed").value);
  guessCount++; //inkrementerar vid varje submit
  if (randomNumber == numberGuessed) {
    test.textContent = `Det var skrivet i stjärnorna att du skulle gissa rätt! Antal försök: ${guessCount}`;
    console.log("Rätt");
  } else if (randomNumber < numberGuessed) {
    test.textContent =
      "Den som siktar mot månen hamnar bland sjärnorna...gissa lägre!";
    console.log("lägre");
  } else if (randomNumber > numberGuessed) {
    test.textContent = "Venus står i retrograd, gissa högre!";
    console.log("högre");
  } else {
    test = "Nu blev något knasigt, testa igen";
  }
}
