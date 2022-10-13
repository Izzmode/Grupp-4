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

const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function getValue() {
  const numberGuessed = document.getElementById("numberGuessed").value;
  if (randomNumber == numberGuessed) {
    document.getElementById("test").innerHTML =
      "Det var skrivet i stjärnorna att du skulle gissa rätt!";
    console.log("Rätt");
  } else if (randomNumber < numberGuessed) {
    document.getElementById("test").innerHTML =
      "Den som siktar mot månen hamnar bland sjärnorna...gissa lägre!";
    console.log("lägre");
  } else if (randomNumber > numberGuessed) {
    document.getElementById("test").innerHTML =
      "Venus står i retrograd, gissa högre!";
    console.log("högre");
  } else {
    text = "Nu blev något knasigt, testa igen";
  }
}

function resetForm() {
  document.getElementById("form").reset();
  //console.clear(resetForm);
  // document.randomNumber = Math.ceil(Math.random()*100)
}

const button = document.querySelector("#btn");

const clickHandler = () => {};

button.addEventListener("click", () => {
  console.log("click");
});

// function() {

// console.log("Spela igen");
// input.addEventListener("click", resetForm)();

// document.getElementById("form").reset();
// };
