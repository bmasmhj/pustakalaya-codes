// string method 

// trim() 
// slice()

/*
Basic String Methods
Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String at() 
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

*/


let str = "Hello World";
console.log(str); // Hello World
console.log(str.length); // 11

let splitStr = str.split(" ");
console.log(splitStr.length); // 2
console.log(splitStr); // ["Hello", "World"]

let trimstr = str.trim();
console.log(trimstr); // Hello World
console.log(trimstr.length); // 11

let uppercase = str.toUpperCase();
console.log(uppercase); //   HELLO WORLD

let lowercase = str.toLowerCase();
console.log(lowercase); //   hello world