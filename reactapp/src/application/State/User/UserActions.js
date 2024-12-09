//defines user actions which contains action type and payload for each action creator to dispatch to store
import * as actionTypes from "../ActionTypes";

//action accepts payload value/object to be used in user reducer switch
export const AddUserToStore = (user)=>{
    return {
        type : actionTypes.ADD_USER_TO_STORE,
        payload : user
    }
}