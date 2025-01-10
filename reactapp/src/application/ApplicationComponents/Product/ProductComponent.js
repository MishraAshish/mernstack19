import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../State/Product/ProductAction";
import DisplayProducts from "./DisplayProduct";

let ProductComponent = (props) => {

    let name = useRef(null)
    let price = useRef(null)
    let desc = useRef(null)
    let rating = useRef(null)

    let product = useSelector((state)=>state.productReducer.Product) //product reducer

    let dispatchProduct = useDispatch();

    useEffect(()=>{
        //initializing the values we read from reducer to our product state
        name.current.value = product.name
        price.current.value = product.price
        desc.current.value = product.desc
        rating.current.value = product.rating
    }, [])

    let saveProductClick = (evt)=>{
        //creating product data model to be saved in db using product api
        let productToSave = {
            name : name.current.value,
            price : price.current.value,
            desc : desc.current.value,
            rating : rating.current.value
        }

        alert("We are going to save this product!!! "+ JSON.stringify(productToSave))

        dispatchProduct(saveProduct(productToSave))
        evt.preventDefault();
    }

    return(
        <div className="col-md-12">
            <h1 className="col-md-12">Product component</h1>

            <form className={"form componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 name" ref={name} maxLength={25} 
                        placeholder="Product Name" />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" ref={price} 
                        placeholder="Product Price" />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" ref={desc} 
                        placeholder="Please Describe the product"  />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" ref={rating} 
                        placeholder="Ratings" />
                    </div>

                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Product"} 
                        onClick={saveProductClick}/>
                </div>
            </form>
            <hr/>
            <DisplayProducts />
        </div>
    )

}

export default ProductComponent;