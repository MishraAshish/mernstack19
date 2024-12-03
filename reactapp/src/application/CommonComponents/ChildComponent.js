import React, { useState } from "react";

export default function ChildComponent(props) {//props - a data object to share data from parent to child component
    
    let [newYearMessage, setMessage] = useState("")

    let sendDataBack = ()=>{
        alert(newYearMessage)
        props.callBackEvent(newYearMessage)
    }

    return(
        <>
            <div className="header">
                <input value={newYearMessage} onChange={(evt)=>setMessage(evt.target.value)} placeholder="Type New Year message"></input>
                {/* <button onClick={()=>props.callBackEvent("")} >Send To Parent</button> */}
                <button onClick={()=>sendDataBack()} >Send To Parent</button>
            </div>
        </>
    )
}