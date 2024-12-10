const express = require('express') //import package
const app = express() //initialzing the express application
const defaultRoutes = require("./Routes/defaultRoute")
const userRoutes = require("./Routes/userRoute")

//we can have multiple express applications running in our single project
const adminApp = express() //initialzing the express application
const userApp = express()
//user, product, cart
//const router = express.Router({})

//application mounting 
app.use("/admin", adminApp)

adminApp.get("/hello",(req, res)=>{
  console.log(req)
  res.send("This response comes from Admin App")
})

app.use("/user", userApp)
userApp.use("/", userRoutes);//redirecting all the calls having user in it to user router

app.use("/", defaultRoutes)

//star or wild card operator
app.get('*', function (req, res) {
  res.send('API is not ready yet')
})

console.log('API is listening at port 9000')
app.listen(9000)

//create an api to read data via query parameter and save that information to a file on the server