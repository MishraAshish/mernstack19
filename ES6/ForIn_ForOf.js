//for ->  array[1].key
//foreach -> (this)
//1. loops through length
//2. to access the value we pass key as index for current object array[1].key , (this)

//the collections or Iterables are array of JSON or JSON of JSON
// let ProductList = [{Prod1},{Prod2}]
// for (let index = 0; index < ProductList.length; index++) {
//     const element = ProductList[index];
//     element["productname"]
// }


//a. for in loop - iterates over the property value, basically meant for json objects with - key values

//for in loop  
let person = {fname:"John", lname:"Doe", age:25, address : {}}; 

//for (const key in person) {
    //if (Object.hasOwnProperty.call(person, key)) { //this is a check to confirm that key is present else set  the context to current key
//        const element = person[key];
//         console.log(`${key}  ${element}`)
//     //}
// }

// console.log("Other Example") 

let arr = [3,5,7]; //{0 : 3, 1 : 5, 2 : 7, newKey : "Sierra"}

//arr.push("Eight")
// arr.newKey = "Sierra"
// arr["NextItem"] = "Mark"

// console.log(arr)

// for (const key in arr) {
//         //console.log(key)
//         const element = arr[key]; 
//         //console.log(element)
//         console.log(`${key}  ${element}`)
// }


//b. For Of Loop
//for of loop : Mainely for arrays, iterates over the property names, more recommended for array of numbers or string instead of objects

console.log("For Of Loop") 

let cars = ['BMW', 'Volvo', 'Mini']; 

//cars[5] = "Toyota"

//cars.newKey = "Range Rover"

cars.push("Range Rover")

//explict key can not be identified via for of loop, for this array indexes are the keys

for (const element of cars) {
    console.log(element)
}


//Create an example of your own for -
// 1. ForOF Loop
// 2. ForIn loop




