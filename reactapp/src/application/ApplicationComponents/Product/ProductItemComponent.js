import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { AddItemToCart } from "../../State/Cart/CartAction";

let ProductItemComponent = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

    let dispatchToAddProduct = useDispatch();

    let addItemToCart = (product)=>{
        dispatchToAddProduct(AddItemToCart(product))        
    }

    return(
        <ul className="product col-md-11">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
           {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                    <button onClick={()=>addItemToCart(product)} >Add Item</button>
                </ul>
                 : <div></div>} 
            </li>
        </ul>
    )

}

export default ProductItemComponent;