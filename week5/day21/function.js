let x = prompt("Enter value of x");
let y = prompt("Enter value of y");

if  (
        x.trim() === "" 
        || y.trim() === "" 
        || !parseInt(x) 
        || !parseInt(y)
    ) {
    alert("Please enter valid numbers.");
    window.location.reload();
}
x = parseInt(x);
y = parseInt(y);

function add(){
    let result = x + y;
    alert(result);
    return result;

}

function subtract(){
    let result = x - y;
    alert(result);
    return result;
}

function multiply(){
    let result = x * y;
    alert(result);
    return result;
}

function divide(){
    if (y === 0) {
        alert("Cannot divide by zero");
        return;
    }
    let result = x / y;
    alert(result);
    return result;
}