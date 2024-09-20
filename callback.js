// Callback - is a function which is passed as parameter in another function and will be executed to give
// desired results upon being called

// the callback function keeps holding the scope of the variables or references used in the function

function PrintDetails(heading, dataObject) {
    console.log(heading, dataObject)
}

var userObj = {
    User : "Anthony",
    Id : "Nilay"
}

//callBackFunc - the reusable function to do common implementation

function GetAccountDtails(callBackFunc, data) {
    callBackFunc("Your account details are : ", data);
}

GetAccountDtails(PrintDetails, userObj) //using the callback PrintDetails to print user data

var productObj = {
    ProductName : "Iphone 29",
    Price : "$5000",
    Avaialble : "Yes"
}

function GetProductDtails(callBackFunc, data) {
    callBackFunc("The product details you are looking for are as : ", data);
}

GetProductDtails(PrintDetails, productObj)