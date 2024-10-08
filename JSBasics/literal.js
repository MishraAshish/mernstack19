//Literal - is the alphanumeric name for any value we use to declare or define our fields or properties

//User1
var name = "Mark"
var age = 99
var address = "Somewhere on earth"

//User2
var name2 = "Afroz"
var age2 = 98
var address2 = "Somewhere in US"

//Object Literal
var User = {
    name : "Micheal",
    age : 18,
    address : "Eastern America"
}

var User2 = {
    name : "Mark",
    age : 18,
    address : "Eastern America"
}

// console.log(User)
// console.log(User2)

User.name = "Ben"
User2.name = "Nilay"

// console.log(User)
// console.log(User2)

// using object to create a behaviour like java classes

var User3 = {
    name : "Sierra",
    age : 19,
    address : "NYC America",
    getUserDetails : function () {
        return ` 
            ${this.name}
            ${this.age}
            ${this.address}
        `
    }
}

//console.log(User3.getUserDetails())

//to make fields/objects accessible in another file we do module.exports
//module.exports = User3

//multiple exports
module.exports = {
    User,
    User2,
    User3
}