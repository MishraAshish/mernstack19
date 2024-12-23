const express = require('express') //import package
const productRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const productDataModel = require('../DataModel/ProductDataModel');


productRouter.post("/api/saveProduct",(req, res)=>{

    let productObj = req.body; //user object passed in the body of sigininup api
    console.log("productObj", productObj)

    let prodSchemaObj = new productDataModel(req.body);//for new user

    prodSchemaObj.save().then((newProd)=>{//will get _id once document is created
        console.log("successfully saved ", newProd);
        res.send(newProd) //{userName : "value"....}
    }).catch((err1)=>{
        console.log("err saving", err1);
        res.send("error while saving product")
    })
})

productRouter.get("/api/getproducts",(req, res)=>{

    productDataModel.find()//find all the products from products collection and send back
    .then((products)=>{
        res.send(products)
    })
    .catch((errr)=>{
        console.log(errr)
        res.send("Error while fetching products")
    })
});

module.exports = productRouter;