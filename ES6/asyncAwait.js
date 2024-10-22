// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

//150 request/second - main thread <>
//120-130 req/sec
//sub threads - 
//50 req/sec  - async operation, await to return back to execution context
//50 req/sec  - async operation, await to return back to execution context
//50 req/sec  - async operation, await to return back to execution context

function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved',
                    "task" : "Learning async await"
                    });
            }, 2000);
    });
}

console.log("async Execution starts");

//async creates a new thread to execute API's that we see will take some time

async function asyncCall() {

    console.log("Before await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before second await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After second await - thread executes one by one")
}

asyncCall()

console.log("async Execution Ends");


//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)

// create and example of arithmatic operations (addition, substraction, multiply, division), using generator function