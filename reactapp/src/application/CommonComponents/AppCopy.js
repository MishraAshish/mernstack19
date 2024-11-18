import React from "react";

export class AppCopy extends React.Component {
    constructor(props) {
        super(props); //is used to passback data <props -here> so that its udpated in base object for react framework

        //state - object is used to allow udpdation of values via react rendering life cycle
        this.state = {
            userName : "Duncan",
            user : {
                address : "Somewhere on earth",
                session : "Somehwere on webex"
            }
        }
    }

    onclick = (evt)=>{
        console.log("Name change click is clicked")
        
        //this.state.userName = "Christopher"

        //
        this.setState({
            userName : "Sierra"
        })

        console.log("After setstate called", this.state.userName)
        evt.preventDefault();
    }

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        console.log("Render is called!! ", this.state.userName)
        let myname = "Windie"
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "And Everyone else"]
        let nameListWorking = []
        return(
        <>
            {nameList && nameList.map((name)=>{
                return <h2>{name}</h2>}
            )}
            <h3>Still Working</h3>
            {nameListWorking && nameListWorking.map((name)=>{ //nameListWorking && => checks if variable is not null and undefined
                return <b><hr/>{name}</b>})}
            <hr/>
            <h2 name="h2_element">{this.state.userName}</h2>
            <button onClick={this.onclick}> Change Name</button>
        </>)
    }
}