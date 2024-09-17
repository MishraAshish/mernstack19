// Javascript is a interpreted language <no compiletime error, line by line execution and results on the fly>
// Hoisting - feature allows functions to get executed even before their declaration, 
// Due to hoisting feature JS is also said to be a partially compiled language

// single line ctrl+/
/*
    multiline comments
*/

//case sensitive
var name = "some name"
var Name = "Some More Name"
//console.log(name, Name)

//we can use special chars ($,_)
//var name$, _Name
//var New Name, NewName@, #newName  //(space and other special chars are not allowed except *(for generator function))

// this can be alphanumeric, literal name should not be starting with number
//var name1 //, 1name (not allowed)

//keywaords - 
//var (classical or vanilla js)
//let and const (from ES6)

//expressions and operators
// && - and, || - or, ! - not, =, ==, ===, ? (ternary operator)
// >, <, >=, <=

var myName = "Test"
var age = "18" //type is string

// == : compares the value
// === : compares the type and the value both

if (myName == "Test" || age === 20) //myName == "Test" && age === 20) {
    console.log("Your name and age are correct")
else 
    console.log("Your name/age are incorrect")


//condition ? the result if condition is true : the result if condition is false

age >= 20 ? console.log("Valid voter") : console.log("InValid Voter")

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// while (condition) {
    
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// array.forEach(element => {
    
// });

var x = 21==="21" //true //false

console.log(x)
console.log(typeof x)

// dynamic type change (type casting), assignment

x = "Ben Ma"
console.log(x)
console.log(typeof x)