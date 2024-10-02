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


// Recap -
// Objects, Inheritance, Assign, Create
// Functions, overloading, 
// Closures
// Literals
// CallBack-Nesting
// Hoisting
// Datatypes
// Modules

// Context - 

// class Calculator { 
//     //<this>

//     const pi = 3.14123;
//     const margins = +5,-5;
//     const userList = require("./user.json")

//     public List UserDetails(){
//         return this.userList
//     }
//     public Addition(a,b){
//     }
//     public Substraction(c,d){
//     }
// }

// var ObjCalc = new Calculator()
// ObjCalc.Substraction();

//function global() { //in the given module
    
pi = 3.141

function UserDetails(){
    return this.userList
}

function Addition(margin, n_margin){    
    //return a+b+pi+e;

    return this.firstValue + this.secondValue + margin - n_margin + pi
}

function Substraction(c,d){
    return c+d;
}

Addition(5,6)

var CalculateValue = {firstValue : 5, secondValue : 6}

Addition.call(CalculateValue,0,0) //set the context of addition function to - CalculateValue

//}

//context - refers to the accesibility of the variables properties functions callbacks in the function which it can use at the time of execution
// by default - global (module)/windows are the context of any js functions
// context in js is refered with the keyword - this and it is highly dynamic in nature
// execution context - the context we change to get the desire behaviour from the funtion and is the most updated value of the context

// context, execution context and scope are used interchangeably and referred with the keyword - this