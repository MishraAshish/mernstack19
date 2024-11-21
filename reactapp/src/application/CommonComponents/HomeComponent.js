import React, { Component, PureComponent } from "react";

//class based component - base class is component which defines many life cycle methods and state management
//export default class Home extends Component {

//PureComponent - implements the should component update to do the deep comparison of each state and props for every state change
export default class Home extends PureComponent {    
    //creation life cycle
    //initialization of state and variables - first to get called and only once
    constructor(props){
        //sending props back to super constructor so that updated values of props are in sync 
        super(props);

        this.state= {
            firstName : "First Name",
            lastName : "Last Name",
            age : 19,
            user : this.props
        }

        this.newAddress = "Somewhere on earth!!";
        
        this.incrementAgeLoop = null;
        this.incrementAgeVal = 17;
        this.incrementAge();
    }

    //Creation LC - last one in creation life cycle method/hook and also called once after the render
    //html is rendered and we can make api call here - to do some change in state
    componentDidMount(){
        console.log("componentDidMount method is called")

        setTimeout(() => {
            this.setState({
                firstName : "The changed name"
            })
        }, 3000);
    }

    //update life cycle methods- are called for every change of state and tracks the state and prop changes
    //shouldComponentUpdate - is used to keep a check for every state change before calling render
    //this must return true to call render method else false
    // shouldComponentUpdate(nextPops, nextState){
    //     console.log("shouldComponentUpdate method is called")
    //     console.log("nextPops ", nextPops)
    //     console.log("nextState ", nextState)

    //     if (this.state.firstName == nextState.firstName ) {
    //         return false // should not call render method to create virtual dom - as no change in firstName
    //     } else {
    //         return true // keep calling render method     
    //     }
    // }

    onclick = (evt)=>{
        console.log("Name change click is clicked")
        
        //this.state.firstName = "Christopher"
        this.newAddress = "Somewhere on France!!"

        // the advised way to show the change value in react rendering
        this.setState({
            firstName : "Sierra"
        })

        //console.log("After setstate called", this.state.userName)
        evt.preventDefault();
    }

    
    incrementAge = ()=>{

        this.incrementAgeLoop = setInterval(()=>{ //continous loop
            this.incrementAgeVal++
            this.setState({
                age : this.incrementAgeVal
            })

            console.log(this.incrementAgeVal)
        }, 2000) //runs every  2 seconds forever - unless cleared

        // setTimeout(()=>{
        //     clearInterval(this.incrementAgeLoop)
        // },5000)
    }
    
    //update life cycle methods called after render
    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }

    //destruction
    //in this LC method we must remove all subscriptions and server calls made in the component
    componentWillUnmount(){
        console.log("componentWillUnmount is called")
        clearInterval(this.incrementAgeLoop)
    }


    //is used to render the html first time with creation LC, for every change of state to show the updated value
    render()
    {
        console.log("Render method is called")
        return(
            <>
                <h1>Home Component</h1>
                <h2>
                {this.state.age}
                <hr/>
                    {this.state.firstName}
                    <hr/>
                    {this.newAddress}
                </h2>
                <button onClick={this.onclick}>Change First Name</button>
            </>
        )
    }
}