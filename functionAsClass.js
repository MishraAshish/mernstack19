//We have a different type of functions that we can use to behave like class and this kind of function definition
//is termed as --> constructor function
//protype : in js is a object associated to each function and object, which provides us inheritance, by chaining parent child

var funcAsClass = function(name, age, address){
    //this : is the scope of function in which it executes (this - keyword)
    this.name = name;
    this.age = age;
    this.address = address;

    this.getUserDetails = function (isAdmin) {
        return {
            name : this.name,
            age : this.age,
            session : this.session
        }
    }
}

funcAsClass.prototype.session = "Javsacript Basics!!!";

var funcObj = new funcAsClass("Bryan", 20, "US")
console.log(funcObj.getUserDetails(true))


//new class
var objOfFuncConstructor = new funcAsClass("Arda", 19.6, "Somewhere on earth")

console.log(objOfFuncConstructor.address);
console.log(objOfFuncConstructor.getUserDetails())

//using protoype we can add properties in child class or object
//objOfFuncConstructor.__proto__.hobbies
objOfFuncConstructor.hobbies = "Reading, Playing Soccer";

objOfFuncConstructor.getHobbies = function (params) {
    console.log("Hobbies are "+ this.hobbies)
}

objOfFuncConstructor.getHobbies()

//console.log(funcObj.getHobbies())

//able to override the method
objOfFuncConstructor.getUserDetails = function () {
    return {
        name : this.name,
        age : this.age,
        session : this.session,
        hobbies : this.hobbies
    }   
}

console.log(objOfFuncConstructor.getUserDetails())
console.log(funcObj.getUserDetails())
//console.log(funcObj.hobbies) //undefined

//create a constructor function to print user details add one information using prototype