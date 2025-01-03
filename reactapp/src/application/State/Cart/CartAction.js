import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const saveCartForCheckout = (product)=>{
    console.log("Product ", product);

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/cart/api/saveCart",
            product
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

export const fetchUserCart = (userId)=>{
    console.log("Cart ");

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/cart/api/getusercart",
            userId
        )
        .then((allCartData)=>{
            let cartList = allCartData.data;
            console.log("get products response ", cartList);
            //dispatch(loading(false));
            //need to do this in loop
            dispatch(AddItemToCart(cartList))
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Product", err)
        })
    }
};
