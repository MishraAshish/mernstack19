// - commenting - single line comment (ctrl+/ - toggle)
/*
comments for the code
*/

// semi-colons (;) are optional

console.log("Hello World!!")

// 
var i = 1000; // var keyword is used to initialize the variables in js

//built in loop function
// setInterval(function() {
//   console.log(++i)

// }, 1000)

//REPL - Read, Evaluate, Print and Loop
//stop execution - ctrl + c

console.log(sum(6, 10)) //error, 16(calls the function before declaration), - hoisting

function sum(a,b) {
    //console.log(this)
    return a + b
}

//Arithmatic - is class and sum is class member (gives behaviour)
// Arithmatic obj = new Arithmatic()
// obj.sum(5,6);

console.log(sum(6, 10)) //function invocation, calling

var sumValue = sum(6, 10)
console.log(sumValue)

sumValue = 2000;

console.log(sumValue) //

sumValue = "This was initialized as number but now is a string";

console.log(sumValue) //