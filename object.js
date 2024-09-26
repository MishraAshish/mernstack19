// Object as class, we can create an object with details of key, value pair
// An object is the reference pointer holds the value via properties defined inside the object
// new Object() - instance object, Object.create()
// {} - this is and object

//1. Using two curly brackets
var Employee = {
    Name : "Ben M",
    ID : 2024,
    GroupCode : "Account Systems",
    GetEmployeeInfo : function () { // `` - template literal easy way of writing string and its concatenetion
        return `
                    ${this.Name}
                    ${this.ID} 
                    ${this.GroupCode} 
                    ${this.Salary}
                `
    }
}

//Employee.Salary = "$100000"

//var empObj = new Employee(); //will not work

//console.log(Employee.GetEmployeeInfo())

//use constructor method to create the class - using new keyword
// this method is not a expected way of inheritance as it keeps the same object and no new copy or clone
//2. Software Engineer inherits from Employee

// var SoftwareEngineer = new Object(Employee) // we are setting/injecting Employee object to create a new class using constructor

// SoftwareEngineer.Salary = "$200000"

// console.log(Employee.GetEmployeeInfo())
// console.log(SoftwareEngineer.GetEmployeeInfo())

// The new and more suitable way of implementing inheritance is by using Object.create method where we will have
// separate copy for child class and a protoype chain to link with Parent Class

var SoftwareEngineer = Object.create(Employee)

SoftwareEngineer.Salary = "$200000"
SoftwareEngineer.Tag = "Expert"

// console.log(Employee.GetEmployeeInfo())
// console.log(SoftwareEngineer.GetEmployeeInfo())

//over-riding of the base class method
// SoftwareEngineer.GetEmployeeInfo = function () { 
//     return `
//                 ${this.Name}
//                 ${this.ID} 
//                 ${this.GroupCode} 
//                 ${this.Salary}
//                 ${this.Tag}
//             `
// }

// console.log(Employee.GetEmployeeInfo())
// console.log(SoftwareEngineer.GetEmployeeInfo())

// This inheritance is possible only because of the prototype object present in javascript
//checking the prototype references

// console.log(Employee.__proto__)
// console.log(SoftwareEngineer.__proto__)


//4. When object is empty
var emptyObj = {}  //Object.create({})

//5. Null Prototype object
var nullObj = Object.create(null)


//6. Merging of different object

var User = { name : "Robin", ID : "1234", userType : "Paid" }
var Address = {ID : "4567", Current : "Somewhere on earth"}
var Address2 = {ID : "6789", Delivery : "Somewhere in colorado"}

//var DispatchItem = { User, Address, Address2 }

//Address2.Mobile = 2151451255

//console.log(DispatchItem) //this will reflect the changed value even after merge

//We need to have principle of preservation of immutability so that changed value doesn't reflect and data gets merged avoiding 
// redundancy
var DispatchItem;

Address2.Mobile = 2151451255

DispatchItem = Object.assign(User, Address, Address2)

Address2.Delivery = ""; // this change should not reflect in delivery details <DispatchItem>
//Address2.Mobile = 2151451255

console.log(DispatchItem)

// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another