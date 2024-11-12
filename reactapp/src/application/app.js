import React from "react";

export default class Application extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userName : "Duncan"
        }
    }

    onclick = (evt)=>{
        console.log("Name change click is clicked")
        this.setState({
            userName : "Sierra"
        })

        evt.preventDefault();
    }

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        let myname = "Windiee - JSX => Javascript Like XML Structure"
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "Everyone else"]
        let nameListWorking = []
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
            <hr/>
            <h2>{this.state.userName}</h2>
            <button onClick={this.onclick}> Change Name</button>
        </>)
    }
}