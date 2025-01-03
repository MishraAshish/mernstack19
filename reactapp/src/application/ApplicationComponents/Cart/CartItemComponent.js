import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { RemoveItemFromCart, UpdateItemInCart } from "../../State/Cart/CartAction";

let CartItemComponent = (props)=>{
    let item = props.item;

    let [Quantity, setQuantity] = useState(item.qty)

    let dispatchItem = useDispatch();

    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>
                {
                    props.readOnly ? Quantity : //props.readOnly == true 
                    <input type="text" value={Quantity} onChange={(evt)=>{setQuantity(evt.target.value)}}></input>    
                }
            </td>
            <td>{item.qty*item.price //Total price for the selected product
                }</td> 
            {
                props.readOnly ?  "" : //bydefault false as boolean default is false
                    <Fragment>
                        <td><button onClick={()=>dispatchItem(RemoveItemFromCart(item._id))}>Remove</button> </td>
                        <td><button onClick={()=>dispatchItem(UpdateItemInCart(item._id, Quantity))}>Edit</button></td>
                    </Fragment>
            }
        </tr>
    )
}

export default CartItemComponent;