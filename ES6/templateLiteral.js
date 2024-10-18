// Template literal in ES6 is used to create a better implementation of strings, html, json data
// without the need of string separaters, html identifiers and new lines

// `` - use back tick or tild operator and write your string, html, variables etc it will return the data in same strucure
// to use objects/variables we should use ${---here the variables---}


let dynVal = 2024;
let AnimalSoundsES6 = require('./shorthand');

let myNormalString ="Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "<h1>Header</h1>"+
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum \n" +
                    JSON.stringify(AnimalSoundsES6);
console.log(myNormalString)


let myTemplateLiteral =`Lorem Lipsum Lorem Lipsum Lorem Lipsum
Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
        Lorem Lipsum Lorem Lipsum Lorem Lipsum
Lorem Lipsum Lorem Lipsum Lorem Lipsum
                    <h1>Header</h1>
Lorem Lipsum Lorem Lipsum Lorem Lipsum
${JSON.stringify(AnimalSoundsES6)}`;

console.log(myTemplateLiteral);

//exercise : write details about yourself using template literal and use variable and objects to show the value