
// number input : 20
// 
// A 
// AA 
// AAA 
// AAAA 
// AAAAA  
// AAAAAA
// AAAAAAA
// AAAAAAAA
// AAAAAAAAA
// AAAAAAAAAA
// AAAAAAAAAAA
// Q: Write a program that takes a number as input and prints a pattern of the letter "A" in the console. The pattern should consist of the letter "A" repeated in each row, starting from 1 "A" in the first row and increasing by 1 "A" in each subsequent row until it reaches the input number. For example, if the input is 5, the output should be:


let n = prompt("Enter a number:");

if ( n.trim() === "" || !parseInt(n)) {
    alert("Please enter a valid number.");
    window.location.reload();
}


let str = "🙂";  
for(let i = 1; i <= n; i++) {
    console.log(str);
    str += "🙂";
}


for(let i = 0; i <= n; i++) {
    console.log(str);
    str = str.slice(0, -2);
}



"hELLOW"+"World"

let xyz = "Hello";
let abc = "World";


let str3 = xyz +" "+abc;

let st2 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus placeat ipsam odio, dolorem id cumque 
            ${abc} eum vero facere, numquam, 
            
            ${xyz} assumenda. Cumque explicabo blanditiis, sint similique ipsam doloremque deserunt quae.`;

