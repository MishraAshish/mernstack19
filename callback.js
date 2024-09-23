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

function GetProductDtails(abc, data) {
    abc("The product details you are looking for are as : ", data);
}

GetProductDtails(PrintDetails, productObj) //using the callback PrintDetails to print product data

//Question :
//1. create a callback function example for account
//2. PrintAccount details should accept this call back and the account information
//3. Upon executing PrintAccntDetails it should show the account details with a message
//4. Use the same call back to print multiple sessions planned for the day