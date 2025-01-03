import * as ActionTypes from "../ActionTypes";

const Initial_State = []

//write callback/ reducer to generate new state upon action change
let CartReducer = (state = Initial_State, action)=>{
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {
        
        case ActionTypes.ADD_ITEM :     
            let newState = state.filter((item)=>item._id != action.payload.selectedProduct._id)
            return [...newState , action.payload.selectedProduct]

        case ActionTypes.UPDATE_ITEM :
            return state.map((item)=>{
                if (item._id == action.payload.productId) { //update the qty of item we want to update with selected id
                    return {...item, qty:action.payload.qty} //...item means {name, desc, rating, qty, price}
                }
                return item;//for all other items in cart do not update anything
            })

        case ActionTypes.EMPTY_CART :
            return []
        
        case ActionTypes.REMOVE_ITEM :
            return state.filter((item)=>item._id != action.payload.productId)

        default:
            return state
    }
}

export default CartReducer;