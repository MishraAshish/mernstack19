// Hoisting This is kind of a snapshot of all the javascript, functions, variables present in the whole file and 
// gets hoisted on top of file (so we call it partially compiled)
// Hoisting happens in two ways - 
// 1. Function Hoisting - A function gets hosited with its complete definition and so we will be able to execute 
// the same before declaration
// 2. Variable Hoisting - Variable gets hoisted with default value of js (undefined)

//10 - variables
//6 - functions

// console.log(myVar) // undefined

// MyFunc("Hoisted") //This is function hoisting  Hoisted
// MyFunc(myVar) //This is function hoisting  undefined

// function MyFunc(val) {
//     console.log("This is function hoisting ", val)   
// }

// var myVar = "I am a hoisted var"

// console.log(myVar)

// MyFunc(myVar) //This is function hoisting I am a hoisted var


var newVal = "Interesting" //global variable

function Random() {
    // newVal = undefined

    console.log(newVal) // undefined(Yao - if declared within the function ), Interesting(Ben - when no declartion inside the funciton ), 

    var newVal = "Interested"

    VeryRondom()
    function VeryRondom() {

        console.log(newVal) // Interested
    }

    //var newVal = "Interested"
}

Random()
//console.log(newVal)