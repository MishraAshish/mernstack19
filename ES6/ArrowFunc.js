// Arrow Function is new way of writing functions in ES6, which has two important features
// this is also termed as Fat arrow function because of () before =>
// we don't need function keyword to define the function

//1. Ease of writing - This is a lambda expression and we can write the whole function definition 
// using lambda expression
function Add(a, b) {
    return a+b
}

//if we have no complex logic which requires multiple lines then function can be written in-ine without return
let AddArrow = (a,b)=>a+b

// console.log(Add(5,5))
// console.log(AddArrow(5,5))

// multiple lines funtion 
let UserInfo = (name, age)=>{
    return{
        name, age
    }
}

//console.log(UserInfo("Random Person",55))

//2. This solves the problem of Scope/Context without using bind, by copying the context of immediate parent
// let that = this;
// name = "Some name"

let User = {
    name : "Hongbo",
    age : 21,
    address : "Somewhere in north america",
    //getDetails : () => { // we should avoid using arrow function as parent of all other functions - sets context to global/empty
    
    getDetails : function(){            
        //${that.name}
        console.log(`
            ${this.name}
            ${this.age}
            ${this.address}
            `)

            setTimeout(()=>{
                //arrow function uses the context of immediate parent
                //console.log(this)
                console.log(`
                    Inside set timeout - arrow function
                    ${this.name}
                    ${this.age}
                    ${this.address}
                    `)
            }, 0);

        // setTimeout(function(){
        //     console.log(`
        //         ${this.name}
        //         ${this.age}
        //         ${this.address}
        //         `)
        // }.bind(this), 2000);

        // let that = this; //this - which is parent context is copied into that variable
        // setTimeout(function(){ 
        //     // instead of using dynamic context we are using copied context - that
        //     console.log(`
        //         Inside set timeout
        //         ${that.name}
        //         ${that.age}
        //         ${that.address}
        //         `)
        // }, 2000);
    }
}

User.getDetails()


// repeat and write an arrowfunction to print account information with return, without return
// by creating a account object