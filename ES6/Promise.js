//Promises - in javascript are the objects which help us making the decision on the basis of response object we get
// Promise acts as a wrapper to the actual task that we want to do
// This wrapper allows us to add statuses and make our process asynchronous

//Example - Sign in process to the application :=> 

//1. AuthenticationAPI(username, password) => {sign-in and return the token (AuthToken)} 
//2. AuthorizationAPI(AuthToken) => {create the user session retun the userRole}
//3. RedirectionAPI(AuthToken, userRole) => {the premiumum application services or normal services page}

//1. CallBack - way <when we can't initiate all the calls in parallel>

// SignInUser(AuthenticationAPICallbak, SignUpUsrCallBack, AuthorizationAPI, RedirectionAPI, RedirectToPage)
// {
//     let response = AuthenticationAPICallbak(username, password) //call to server (async)
//     if (response == null) {
//         SignUpUsrCallBack(userObject)
//     } else {
//         let userRoleData = AuthorizationAPI(response.authToken); //call to server (async)
//         if (userRoleData == null) {
//             SignInUser(AuthenticationAPICallbak, SignUpUsrCallBack, AuthorizationAPI, RedirectionAPI)
//         } else {
//             let nextPage = RedirectionAPI(response.authToken, userRoleData.userRole); //call to server (async)
//             if (nextPage == null) {
//                 SignInUser(AuthenticationAPICallbak, SignUpUsrCallBack, AuthorizationAPI, RedirectionAPI)
//             } else {
//                 RedirectToPage(nextPage.pageLink);
//             }
//         }
//     }
// }

//call back hell - situation happens if any of the dependent output are not having the correct status in response

//2. Promise Object - Resolve and reject are main callbacks of js-promise lib and it allows us to add the statuses as well

let authPromise = new Promise((resolve, reject)=>{

    // let authToken = AuthenticationAPI(username, password)
    //     if (authToken != null) {
    //         resolve({
    //             tokencode : authToken.token,
    //             status : authToken.succes,
    //             msg : authToken.msg
    //         })            
    //     } else {           
    //         reject({
    //             tokencode : "token failure",
    //             status : authToken.error,
    //             msg : authToken.msg
    //         })
    //     }

    // resolve({
    //     authToken : "asdas545d3a54das54d3as",
    //     status : "success immediately",
    //     msg : "Athentication Successful at server"
    // })

    setTimeout(() => {
        resolve({
            authToken : "asdas545d3a54das54d3as",
            status : "success",
            msg : "Athentication Successful at server"
        })
    }, 2000);

    setTimeout(() => {
        reject({
            authToken : "token failure",
            status : "error",
            msg : "Athentication Failed at server - PROD2512"
        })
    }, 1990);
})

console.log(authPromise)

//once we get response we can decide to move to next call
authPromise.then((data, error)=>{//result of successful promise - resolved
    console.log(data) 
    console.log(error)
}) 
.catch((data, error)=>{ //result of failed promise - rejected
    console.log(data)
    console.log(error)
}) 


//Create a student promise object and it should return the resolve and reject data after two seconds
//It should be named as student info