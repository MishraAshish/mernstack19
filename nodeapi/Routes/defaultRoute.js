const express = require('express') //import package
const expsRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's


expsRouter.get('/', function (req, res) {
    res.send('Hello World')
  })
  
expsRouter.get('/sayhtml', function (req, res) {
  res.send(
    `
      <h1>HTML Response</h1>
      <h2>Must Display html info</h2>
    `
  )
})

// expsRouter.get('/getfile',(req, res)=>{
//     res.sendFile(globalThis.parentDirectory+'/index.html')
// })

// expsRouter.get('/getfile2',(req, res)=>{
//   res.sendFile(globalThis.parentDirectory+'/alert_info.js')
// })

//passing data in url - api : path
//a. query string - ? after the end point then key value pair separated by &
// localhost:3000?name=Jimmy&friend=christopher
expsRouter.get('/query',(req, res)=>{
  //we can read the query string from url by using req - object and req.query property and gives us json object
  let qs = req.query;
  console.log(qs) //converts into json format dynamically
  //res.sendFile(__dirname+'/index.html')
  if (qs.name) {
    //res.send(qs)  
    res.send(`
        <h2>${qs.name}</h2>
        <h2>${qs.friend}</h2>
        <h2>${qs.colleague}</h2>
        <h2>From DEfault route</h2>
      `)
  } else {
    res.send(`<h1>Please add query string to the parameter!!!</h1>`)
  }  
})


//b. route param - id : in the route path with  be treated as route param and will help us read the values dynamically
// localhost:3000/getuserbyid/id
expsRouter.get('/getuserbyid/:id/details/:name',(req, res)=>{
  //we can read the router param from url by using req - object and req.param property and gives us data attached
  let param_id = req.params['id'];
  let param_name = req.params['name'];
  console.log(param_id) 
  if (param_id) {
    //res.send(qs)  
    res.send(`
        <h2>Route Param passed is : ${param_id}</h2>
        <h2>Route Param passed name is : ${param_name}</h2>
      `)
  } else {
    res.send(`<h1>Please add parameter in api route path!!!</h1>`)
  }  
})

expsRouter.get('/getjson', function (req, res) {
  res.json({
    api : "express",
    automated : "yes",
    toolName : "nodemon"
  })
})

module.exports = expsRouter;