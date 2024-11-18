import React from "react";
import { NavLink } from "react-router-dom";

let Header = (props) => {
    
    let user = {
        userName : "Dummy"
    }
    console.log(user)
    
    const usrName = user && user.userName ? user.userName : props.userName
    
    
    return(
        <>
            <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>
            
            <div>
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/app"  className="button" activeclassname="true"> AppCopy </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink>
            </div>
            <hr/>
        </>
    )
}

export default Header;