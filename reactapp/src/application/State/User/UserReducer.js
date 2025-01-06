//defines the initial state to be used in user component as props and reducers to update the user data
import * as actionTypes from "../ActionTypes";

let initialState = {
    user : {
        userName : "",
        password : "",
        street : "",
        mobile : 0
    }
}

//this will be used by store to map the action type and then update/create new user state
let UserReducer = (state=initialState, action)=>{
    console.log("User Reducer ", action.payload);

    switch (action.type) {
        case actionTypes.ADD_USER_TO_STORE:
            return {...state, user : action.payload}   
             
        default:
            return state;
    }

}

export default UserReducer;