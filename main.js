let button = document.querySelector("button");
let option = document.querySelector(".option");
let level = document.querySelectorAll(".option div");
let levelName = document.querySelector(".levelName");
let secondLevel = document.querySelector(".secondLevel");
let selectWord = document.querySelector(".select");
let words = document.querySelector(".words");
let time = document.querySelector(".time");
let scoreCount = document.querySelector(".count");
let maxWords = document.querySelector(".last-score");
let input = document.querySelector("input");
let winner = document.querySelector(".winner");
let loser = document.querySelector(".loser");
let container = document.querySelector(".container");
let chosen;

let ArrayWord = [
  "Amr",
  "Kallas",
  "Islam",
  "Nassani",
  "Majed",
  "Alaswad",
  "Ibrahim",
  "Alassi",
  "Bashar",
  "Bakaya",
  "Hozaifa",
  "Alahmad",
  "AbdulRahman",
  "Kanawait",
  "Bahaa",
  "Abdo",
  "Abdullah",
  "Alnassan",
  "Baraa",
  "Aldomani",
  "Darkazali",
  "Ahmed",
  "Omar",
  "Najar",
  "Mohammed",
  "Nour",
  "JavaScript",
  "Html",
  "Css",
  "Dolingo",
  "Battle",
  "GitHub",
  "GitLab",
];
container.style.display = "none";
//Chosen Game Level
option.onclick = function (eo) {
  chosen = eo.target.textContent;
  option.style.display = "none";
  levelName.innerHTML = chosen;
  secondLevel.innerHTML = levels[chosen];
  time.innerHTML = levels[chosen];
  maxWords.innerHTML = ArrayWord.length;
  container.style.display = "block";
};

let levels = {
  Easy: 8,
  Normal: 5,
  Hard: 4,
};
let word;
//Generate A Random Word
function Genword() {
  words.innerHTML = "";
  word = Math.floor(Math.random() * ArrayWord.length);
  selectWord.innerHTML = ArrayWord[word];
  //Deleted The Chosen Word From Array
  ArrayWord.splice(word, 1);
  ArrayWord.forEach((word) => {
    let span = document.createElement("span");
    span.innerHTML = word;
    words.appendChild(span);
  });
  playGame();
}
// Start The Game
button.addEventListener("click", () => {
  button.style.display = "none";
  input.focus();

  Genword();
});

function playGame() {
  //Reset The Seconds
  time.innerHTML = levels[chosen];
  let start = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML === "0") {
      clearInterval(start);
      container.style.display = "none";
      loser.style.opacity = "1";
      loser.style.zIndex = "4";
    }
    if (input.value == selectWord.innerHTML) {
      input.value = "";
      scoreCount.innerHTML++;
      if (ArrayWord.length > 0) {
        Genword();
        clearInterval(start);
      } else {
        container.style.display = "none";
        winner.style.opacity = "1";
        winner.style.zIndex = "4";
      }
    }
  }, 1000);
}
