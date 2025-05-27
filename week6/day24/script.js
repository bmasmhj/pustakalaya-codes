let users = [];

function adduser(){
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    let city = prompt("Enter your city:");
    let user = { 
        "name": name,
        "age": age,
        "city": city
    }
    users.push(user);
    console.log("User added successfully!");
    console.log(users);
}