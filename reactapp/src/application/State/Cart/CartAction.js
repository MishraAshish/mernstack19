import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const saveCartForCheckout = (cart, userid)=>{
    console.log("cart List ", cart);

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/cart/api/saveUserCart",
            {cart, userid}
        )
        .then((allData)=>{
            let productresp = allData.data;
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

export const AddItemToCart = (selectedProduct)=>{
    return {
        type : actionTypes.ADD_ITEM,
        payload : {selectedProduct}
    }
}

export const UpdateItemInCart = (productId, qty)=>{
    return {
        type : actionTypes.UPDATE_ITEM,
        payload : {
            productId,
            qty
        }
    }
}

export const RemoveItemFromCart = (productId)=>{
    return {
        type : actionTypes.REMOVE_ITEM,
        payload : {productId}
    }
}

export const EmptyTheCart = ()=>{
    return {
        type : actionTypes.EMPTY_CART
    }
}

export const fetchUserCart = (userid)=>{
    console.log("Cart ");

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/cart/api/getusercart",
            {userid}
        )
        .then((allCartData)=>{
            let cartList = allCartData.data;
            console.log("get products response ", cartList);
            //dispatch(loading(false));
            //need to do this in loop
            for (const item of cartList.cart) {
                console.log("item in for of", item);
                let action = dispatch(AddItemToCart(item));
                dispatch(action);    
            }    
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Product", err)
        })
    }
};
