//Shorthand : Removes the redundant variable, name used as key
//in a json object if the key name and the value for that key if we wish to read both are same then
//shorthand allows us to use just the variable to create complete object

let lion = "roar", birds = "chirp", cow = "moo", dogs = "bark"; 

let animalSound = {
    lion : lion, //key and value of the variable are identical
    birds : birds,
    cow : cow,
    dogs : dogs
}
//console.log(animalSound)

// when using the shorthand we can only use the variable name that holds the value and it works by mapping it self

let animalSoundES6 = {
    lion, //we can just use the variable and it will act as key and value both
    birds,
    cow,
    dogs
}

//console.log(animalSoundES6)

//To print with concatenation
// string + toString() of next object => returns data type
//console.log("Different animal sounds are "+ animalSoundES6)

//if we explicitely concatenate values we must stringify before use
//console.log("Different animal sounds are "+ JSON.stringify(animalSoundES6))

// console.log - method is implementing JSON.stringify() when we use object with , (comma)
//console.log("Different animal sounds are ", animalSoundES6)

//console.log("This is string " + {}.toString())

module.exports = animalSoundES6;