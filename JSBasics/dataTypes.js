// Data Types : are the types of data we can store in the language, e.g. boolean, string, number etc
// 6 valid types present in JS

//undefined - is default value given to any variable in JS

// Primitive Type - stored as value directly on stack
// boolean
// number
// null
// undefined
// string

// Non Primitive Type - store as reference on the heap
// object - {}

// ES6 - symbol type

//console.log(x)  //reference error : x is not defined
//console.log(typeof x) // reference error


console.log(newVar) //undefined
console.log(typeof newVar) //undefined

var newVar = 1000

console.log(newVar)
console.log(typeof newVar)

var newVar = 1000.0002

console.log(newVar) //no concept of integer, long, decimal, we only have number for every number
console.log(typeof newVar)

newVar = 200==201

console.log(newVar) //
console.log(typeof newVar)


newVar = {}
newVar.name = "Jugue"
newVar.age = 19

console.log(newVar) // user object
console.log(typeof newVar)


newVar = null

console.log(newVar) // legitimate value
console.log(typeof newVar) // object 




//ES-6 : Symbol - (ES6 : class based implementation of JS)
// used to create customized variable of our choice
var symbol_1 = Symbol("New Value of my choice")


console.log(symbol_1)
console.log("Data Type ", typeof symbol_1) 