// To create a variable we only have var keyword in JS and which has some features like var hoisting which sometimes is confusing

// in ES6 we got two new variable types
// Let  - is like var but doesn't support hoisting and has some more features
// Const - is there to create constant declarations to be used in application

//Const - are immutable on direct assignments

//1. Declarations and Assignments - same name variable
// var - we can declare and re-declare as many times as we want
// let/const - we can declare once but can not declare again

// var newVar = "Somevalue"
// var newVar = "Somevalue2"

//let newLet = "SomeValue Let"
//let newLet = "SomeValue Let" //re-declaration not allowed
//newLet = "Somevalue Let "; // re-assignment can be done

//const newConst = "SomeValue Const"
//const newConst = "SomeValue Const" //re-declaration not allowed
//newConst = "SomeValue Const 2" //re-assignment not allowed

const user = {} //[23]

//user = {name : "Jugue"} //[24] //Assignment to constant variable. - not allowed
user.name = "Micheal"  // [23] => [26]{name : "Micheal"} //we are updating value via reference

//console.log(user)

//2. Define and Assign value later
// let newLet2;

// newLet2 = 3 //"SomeValue New LET2"

//const - we need to Assgin the value as soon as we define it

//const newConst2; //not allowed - declaration must be initialized
//newConst2 = "SomeValue New LET2"

//3. var is functional scope, let and const are lexical <block> scope - {}

{ 
    var newVar = "Somevalue4" // var doesn't follow the boundry of block {}, but is limited in function
    let newLet = "SomeValue Let"
    const newConst = "SomeValue Const"

    // console.log(newLet);
    // console.log(newConst);
}

//console.log(newVar);
// console.log(newLet); //can't be accessed out side
// console.log(newConst);

//4. Hoisting not present for let or const
// console.log(newLet); //Cannot access 'newLet' before initialization
// console.log(newConst);

// let newLet = "SomeValue Let"
// const newConst = "SomeValue Const"


//5. Evaluation of let and const are done before passing them to function, 
// this is different in comparison to var where the value is evaluated at the time of function execution


//var index = 1; //function scoped and evaluated at the time of execution

// for (let index = 1; index < 5; index++) {

//     setTimeout(function () {
//         console.log(index) //1,2,3,4  //5,5,5,5
//     }, 3000);
    
//     console.log(index)
// }

//console.log(index) // 5

var j = 1
for (j = 1; j < 5; j++) {

    // setTimeout(function (jk) {
    //     console.log(jk) //1,2,3,4  //5,5,5,5
    // }.bind(j), 3000);
    
    // console.log(j)

    (function(params) {
        setTimeout(function () {
                console.log(params) //1,2,3,4 
            }, 2000);
    })(j) //j - is evaluated immediately
}