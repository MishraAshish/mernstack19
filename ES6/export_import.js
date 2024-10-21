//export, import keywords are used to export and import the properties, functions, classes from 1 module to another module
// if we are importing from node library we will directly import from the module name e.g. import("react"), import("react/hoooks")
//when we import from the local modules (file or a file with many features) then we need to pass the absolute path - shorthand
// let { AnimalSoundsES6 } = import from "./shorthand"; //file extension is optional

//our file is -- user.js
//default - import : it is imported without brackets {} and with the name of file
import constant from "./constant";

//named imports can be imported many but should always be in brackets
import { pie, printUser } from "./constant";

//default and named can be imported togather
import constant, { pie, printUser } from "./constant";

//to import same name data/property/function/class/variable from two different files
// we can use alias
import { pie as dataPie } from "./data";

// import all named exports in star / wild card import
import *  as constants from "./constant";

//constants.pie;
//constants.printUser()


//the other file is constant.js
//default export - generally similar to the name of file and is allowed to be 1 in a file
let constant = 2024.2
export default constant;

//named exports - this can be many from one file
export let pie = "3.141";
export let printUser = (user)=>console.log(user);


//the other file is data.js
//export let pie = "9.452"