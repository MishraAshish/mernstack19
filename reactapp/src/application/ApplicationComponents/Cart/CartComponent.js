import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemComponent from "./CartItemComponent";

let CartComponent = (props)=>{

    let cartList = useSelector((state)=>state.cartReducer)

    console.log("cartList", cartList)

    return(
        <div className="col-md-12">
            <h2>Cart Component</h2>

            { cartList && cartList.length > 0 ? 
              <>
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Description</th>
                          <th>Rating</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          {
                              props.readOnly ?  "" : //bydefault false as boolean default is false
                                  <>
                                      <th>Remove</th>
                                      <th>Edit</th>
                                  </>
                          }
                      </tr>
                  </thead>
                  <tbody>
                      {
                        cartList.map((item)=>{
                                return <CartItemComponent item={item} key={item._id} />
                        })
                    }
                </tbody>
            </table>
                    {/* <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} /> */}

                    {
                        props.readOnly ? <></> : 
                            <>
                                <button onClick={() => clickToSaveCart(cartList, user._id)} >
                                            Save Cart
                                    </button>
                                <button onClick={()=>{}} >
                                    Go To Checkout
                                </button> 
                            </> 
                    }
                </> 
            :
            <h4>Please go to product and add item to cart!!!</h4>
            }
        </div>
    )

}

export default CartComponent;