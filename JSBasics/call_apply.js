//Call and Apply are the functions attached to function (keyword-function), this helps the function in question to
//change the context (this, scope, execution cotext, scope object) - to return desired object values
//both call and apply - immediately execute, change the context and return value

//only difference between call and apply is - apply accepts parameters in the form of array

// name = "Nilay"
// age = 22
// address = "Somewhere in Germany"

var User1 = {name : "Micheal", age : 18, address : "Somewhere in Mauritius"}
var User2 = {name : "Mark", age : 19, address : "Somewhere in France"}

function PrintInfo(heading) {
        //console.log(this) //this - is refered as dynamic context and is changeable as per the context setting
        console.log(`
                ${heading}
                ${this.name}
                ${this.age}
                ${this.address}
            `)
}

// PrintInfo("no context set, default context is global"); //if we don't provide any context to the function it takes global object as its context <window, node global>

// PrintInfo.call(User1, "Setting context to User1") //PrintInfo will have User1 as its context
// PrintInfo.call(User2, "Setting context to User2") //PrintInfo will have User2 as its context


// UserInfo usrObj = new UserInfo(); { <-- --> }
// usrObj.PrintInfo(); //this


function PrintSessionInfo(heading, session1, session2, session3, session4, session5) {
    //console.log(this) //this - is refered as dynamic context and is changeable as per the context setting
    console.log(`
            ${this.name}
            ${this.age}
            ${this.address}
        `)

        console.log(`
            Session Details are below :-
            ${heading}
            ${session1}
            ${session2}
            ${session3}
            ${session4}
            ${session5}
        `)
}

var sessionListSept = ["Context is USer1", "First", "MERNStack", "DSA", "Java", "AWS"]
var sessionListOct = ["Context is USer1", "Algo", "MERNStack", "DSA", "Java", "AWS"]

//PrintSessionInfo.call(User1, "Context is USer1", "First", "MERNStack", "DSA", "Java", "AWS")

//Apply takes function parameters as array and applies the context same way we do with call
//PrintSessionInfo.apply(User1, sessionListSept)
PrintSessionInfo.apply(null, sessionListOct) //it sets the context to null


//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases



var index = 0

for (index = 0; index < 5; index++) {   
    //setTimeout executes the call back function passed as first parameter 
    //after the milliseconds passed as second param - for one time only 
    setTimeout(function(){
        console.log(index)
    }, 2000);
}

console.log(index)