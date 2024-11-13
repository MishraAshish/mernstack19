import React from "react";

let Header = (props) => {
    
    return(
        <>
            <h2>This is my first react Header page </h2>
            <h2>This name we are getting from parent - {props.myname}</h2>
            <h3>JSX means Javascript Like XML Structure</h3>
        </>
    )
}

export default Header;