let age = prompt("Enter your age:");

/*
    •	‘Child’ for ages 0-12
	•	‘Teen’ for ages 13-19
	•	‘Adult’ for ages 20-64
	•	‘Senior’ for ages 65 and above
*/

if (age.trim() === "" || age < 0 || !parseInt(age)) {
    alert("Please enter a valid age.");
    window.location.reload();
}
age = parseInt(age);

if (age > 0 && age <= 12) {
    alert("You are a Child.");
} 
else if (age >= 13 && age <= 19) {
    alert("You are a Teen.");
}
else if (age >= 20 && age <= 64) {
    alert("You are an Adult.");
}
else if (age >= 65) {
    alert("You are a Senior.");
}
else {
    alert("Atti budo vayo ");
}