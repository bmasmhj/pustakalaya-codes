let number = Math.floor(Math.random() * 100) + 1;
let mode = "easy";

let first = number-10;
let last = number+10;
let between = "1 - 100";

if(mode === "easy") {
    between = `${first} - ${last}`;
}

let guess = prompt(`Guess a number ${between}`);



if ( guess.trim() === "" || !parseInt(guess)) {
    alert("Please enter a valid number.");
    window.location.reload();
}

if(parseInt(guess) === parseInt(number)) {
    alert("Congratulations! You guessed the right number.");
}else{
    alert("Sorry, the correct number was " + number + ".");
    alert("Please try again.");
    window.location.reload();
}
