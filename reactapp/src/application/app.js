import React from "react";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";

export default class Application extends React.Component {
    constructor(props){
        super(props);

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
        this.setState({
            userName : "Sierra"            
        })

        evt.preventDefault();
    }

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        let myname = "Windie"
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "And Everyone else"]
        let nameListWorking = []
        return(
        <>
            <Header myname={myname}/>
            
            {nameList && nameList.map((name)=>{
                return <Footer id={name} name={name} user={this.state.user}>
                    {/* <h2>Footer Component - H2</h2>
                    <h3>Footer Component - H3</h3> */}
                </Footer>})}
            
            <h3>Still Working</h3>
            {nameListWorking && nameListWorking.map((name)=>{ //nameListWorking && => checks if variable is not null and undefined
                return <b><hr/>{name}</b>})}
            <hr/>
            <h2>{this.state.userName}</h2>
            <button onClick={this.onclick}> Change Name</button>
        </>)
    }
}