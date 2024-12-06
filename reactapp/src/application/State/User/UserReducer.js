//defines the initial state to be used in user component as props and reducers to update the user data
import * as actionTypes from "../ActionTypes";

let initialState = {
    user : {
        userName : "Reduxer user name",
        password : "",
        street : "",
        mobile :0
    }
}

//this will be used by store to map the action type and then update/create new user state
let UserReducer = (state=initialState, action)=>{

    switch (action.type) {
        case actionTypes.ADD_USER_TO_STORE:
            return {...state, user : action.payload.user}    

            break;
    
        default:
            return state;
            break;
    }

}

export default UserReducer;