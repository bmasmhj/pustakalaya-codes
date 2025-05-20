let times = prompt("Enter the number of times to repeat the message:");

//  check if the input is not empty or not a number 
if ( times.trim() === "" || !parseInt(times)) {
    alert("Please enter a valid number.");
    window.location.reload();
}

for(let i = 0; i < times; i++) {
    console.log("Hello, World!" , i);
}

