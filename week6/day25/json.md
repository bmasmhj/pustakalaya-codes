# JSON - Javascript Object Notation
Data format for data exchange

JSON 
key : value

Eg : 
name : "John"

<!-- let name = "josh" -->
<!-- person details  -->

<!-- object / object detail -->
let student = {
    name : "John",
    age : 30,
    city : "New York",
}


<!-- array : multiple objects -->
let studentname = [ "John", "Jane", "Mike" ]
//   arrayname  =     0       1       2

let students = [
    {
        name : "John",
        age : 30,
        city : "New York",
    },
    {
        name : "Jane",
        age : 25,
        city : "Los Angeles",
    },
    {
        name : "Mike",
        age : 28,
        city : "Chicago",
    }
]


<!-- json -> point -->

<!-- firsst  -->
studentname[1] // Jane
<!-- second -->
students[1].name // Jane

students[index].key // value

// loop through array
for(let i = 0; i < students.length; i++) {
    console.log(students[i].name); // John, Jane, Mike
}