//Every file in JS is known as module
// this can contain one line or thousands of line of code

// we can access data from another file by using require, module

// when we require from a file it makes available all the modules exported from that file/module

// var User3 = require("./literal") //normalized path

// console.log(User3.getUserDetails())

var {User, User4, User3, User2} = require("./literal")


console.log(User)
console.log(User2)
console.log(User4) //imported object name should match to the exported one in case of multiple exports
console.log(User3.getUserDetails())