// Stack - LIFO, data structure

// callStack - the executing thread allocated some memory to run the interpreter, and works in LIFO fashion
// this also has the access to heap( for larger chunk of data like objects)
// less memory, easily avaiable and gives perfornmance in execution

var myName = "Some Random Name"
console.log(myName)

function Foo() {
    //console.log("We are in FOO")
    //return "Foo"
    throw new Error("Call Stack");
}

function Bar() {
    //console.log("We are in BAR")
    //return "Bar"
    Foo();
}

// var i = 1;
// function Baz() {
//     //console.log("We are in BAZ")
//     //return "Baz"
//     //Bar()
//     i++
//     if (i < 1000) {
//         console.log(i)
//         Baz()
//     }else{
//         console.log(i + "we can further call it in recursive order")
//     }
// }

// //Foo()
// //Bar()
// Baz()

var i = 1;
function Baz() {
    //console.log("We are in BAZ")
    //return "Baz"
    //Bar()
    i++
    //if (i < 1000) {
        console.log(i)
        Baz()
    //}else{
        console.log(i + "we can further call it in recursive order")
    //}
}
//Baz()
// for (let index = 0; index < 500000; index++) {
//     console.log(index)    
// }
