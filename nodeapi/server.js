const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sayhello', function (req, res) {
  res.send('Say Hello - Hello World')
})

app.get('/getjson', function (req, res) {
  res.json({
    api : "express",
    automated : "yes",
    toolName : "nodemon"
  })
})

//star or wild card operator
app.get('*', function (req, res) {
  res.send('API is not ready yet')
})


console.log('API is listening at port 3000')
app.listen(3000)