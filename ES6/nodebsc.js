//99000+ packages are present to do multiple jobs
console.log("Packages are nothing but the utility modules")

let { log } = require('console'); //using the already installed package/module

log("This we are printing by using console module!!!")

log(__dirname) // gives the absolute path of the directory our file is in
log(__filename) // gives the absolute path of the directory our file is in with current file name

let {test} = require('./node') // we need to run the file so that value assigned to global object
// accessing global data
log(global.connectionString)

// we can pass data via terminal using std.out and std.in which are part of process module
//log(process) //gives information about the node processes

let dataFromTerminal = ""
//callback with data inserted
// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     dataFromTerminal = data.toString();
//     process.exit();
// })
// process.stdin.on('exit', data =>{
//     log("we are exiting")
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// })

// setTimeout(()=>{
//     log(dataFromTerminal)
// },10000)

//REPL - Read Evaluate Print and Loop => type of execution we do with node system
// ctrl+c or ctrl+twice c or cmd+c


let os = require('os')

//log(os.cpus())
// log(os.hostname())
// log(os.machine())
// log(os.version())

let path = require('path')
//path
console.log(`The file name is - ${path.basename(__filename)}`);
console.log(`The file name is abosolute - ${path.isAbsolute(__dirname)}`);
console.log(`The resolved file name is - ${path.resolve(__filename)}`);

let http = require('http')
//const { http, get } = require("http") //helps us build the restful API's

//http.get()
//http.put()
//http.post()
//log(http.METHODS)
//log(http.request())

//to write our own customized events
const {EventEmitter} = require("events")
//event emitter - on is custom event
// EventEmitter.on("request","get",(req, res)=>{
//     res.send("Information to be shared with user")
// })

//utility module
const util = require('util')
// util.log(path.basename(__filename))
// util.log(path.basename(__dirname))
log(util.debuglog())


const v8 = require('v8');

log(v8)

log(v8.getHeapSnapshot())
log(v8.getHeapStatistics())

process.nextTick(()=>{log("Next Tick Called!!")})