import React from "react";

export default class Application extends React.Component {


    render(){
        let myname = "Windiee - JSX => Javascript Like XML Structure"
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay"]
        let nameListWorking = ["Windie", "Stacy", "Duncan"]
        return(
        <>
            <h2>This is my first react page from application Component</h2>
            <h2>This is my first react page with data {myname}</h2>
            <h3>Done</h3>
            {nameList && nameList.map((name)=>{
                return <b><hr/>{name}</b>})}
            
            <h3>Still Working</h3>
            {nameListWorking && nameListWorking.map((name)=>{
                return <b><hr/>{name}</b>})}
        </>)
    }
}