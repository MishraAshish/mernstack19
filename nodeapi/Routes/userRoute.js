const express = require('express') //import package
const userRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const userDataModel = require('../DataModel/UserDataModel');


userRouter.post("/api/signinup",(req, res)=>{

    let userObj = req.body; //user object passed in the body of sigininup api
    console.log("userobj", userObj)

    userDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        
        if(existingUser){//user exists so send the user details - sign in
            
            res.send(existingUser)            
        }
        else//user doesn't exists so create one and create one - sign up
        {
            let userSchemaObj = new userDataModel(req.body);//for new user

            userSchemaObj.save().then((newUser)=>{//will get _id once document is created
                console.log("successful signup ", newUser);
                res.send(newUser) //{userName : "value"....}
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }        

    }).catch((error)=>{
        console.log("Error while fetching existing user", error)
        res.send("Error while fetching existing user")
    })   
})

userRouter.get("/api/users",(req, res)=>{

    userDataModel.find()//find all the users from users collection and send back
    .then((users)=>{
        res.send(users)
    })
    .catch((errr)=>{
        console.log(errr)
        res.send("Error while fetching users")
    })
});

module.exports = userRouter;