let chance = 20;

let words = [
  "ocean",
  "planet",
  "guitar",
  "wizard",
  "jungle",
  "python",
  "castle",
  "rocket",
  "puzzle",
  "breeze",
  "canyon",
  "banana",
  "dragon",
  "island",
  "shadow"
];

let randomIndex = Math.floor(Math.random() * words.length);
let word = words[randomIndex];
let wordLenth = word.length;
for (let i = 0; i < wordLenth; i++) {
    document.getElementById("word_to_guess").innerHTML += "_ ";
}

function startGame(){
    window.location.reload();
}


// Store the current state of guessed letters
let guessedWord = Array(word.length).fill("_");

function wordguess(letter) {
  letter = letter.toLowerCase(); // Ensure the letter is lowercase
  let found = false;
  // Reveal the guessed letter in the correct positions
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter && guessedWord[i] === "_") {
      guessedWord[i] = letter;
      found = true;
    }
  }
  if (found) {
    document.getElementById("word_to_guess").innerHTML = guessedWord.join(" ");
  } else {
    document.getElementById("wrong_words").innerHTML += letter + " ";
    chance -= 1;
  }
  // Update remaining chances
  document.getElementById("chance_given").innerHTML = chance;
  // Optional: Check for win/lose
  if (chance <= 0) {
    alert("Game over! The word was: " + word);
  }
}
let chancehtml = document.getElementById("chance_given")
chancehtml.innerHTML = chance;