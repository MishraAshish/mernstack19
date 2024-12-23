import React, { Component, PureComponent } from "react";
import {PropTypes} from "prop-types";

//class based component - base class is component which defines many life cycle methods and state management
export default class Home extends Component {

//PureComponent - implements the should component update to do the deep comparison of each state and props for every state change
//export default class Home extends PureComponent {    
    //creation life cycle
    //initialization of state and variables - first to get called and only once
    constructor(props){
        //sending props back to super constructor so that updated values of props are in sync 
        super(props);

        this.state= {
            title : "Shop with below facilities",
            userName : "Default User Name",
            address : "Default Address",
            session : "Default MERNStack",
            firstName : "First Name",
            lastName : "Last Name",
            age : 19,
            user : props.user, // property we get from parent - app component
        }

        this.newAddress = "Somewhere on earth!!";
        
        this.incrementAgeLoop = null;
        this.incrementAgeVal = 17;
        //this.incrementAge();

        //we can use ref keyword to make direct access of html elements and its events
        //and once done with the udpate of values should put back the data to state
        this.refAddress = React.createRef();
        this.refSession = React.createRef();

        // html can't be accessed as no rendering is done yet
        // this.refAddress.current.value = "New Address",
        // this.refSession.current.value = "React Component"
    }

    //Creation LC - last one in creation life cycle method/hook and also called once after the render
    //html is rendered and we can make api call here - to do some change in state
    componentDidMount(){
        console.log("componentDidMount method is called")
        // setTimeout(() => {
        //     this.setState({
        //         firstName : "The changed name"
        //     })

        //     // this.refAddress.current.value = "New Address",
        //     // this.refSession.current.value = "React Component"
        // }, 3000);
    }

    //update life cycle methods- are called for every change of state and tracks the state and prop changes
    //shouldComponentUpdate - is used to keep a check for every state change before calling render
    //this must return true to call render method else false
    shouldComponentUpdate(nextPops, nextState){
        console.log("shouldComponentUpdate method is called")
        console.log("nextPops ", nextPops)
        console.log("nextState ", nextState)

        if (this.state.firstName == nextState.firstName ) {
            return false // should not call render method to create virtual dom - as no change in firstName
        } else {
            return true // keep calling render method     
        }
    }

    onclick = (evt)=>{
        console.log("Name change click is clicked")
        
        //this.state.firstName = "Christopher"
        this.newAddress = "Somewhere on France!!"

        // the advised way to show the change value in react rendering
        this.setState({
            firstName : "Sierra"
        })

        //force update - api can be used to call render method directly, which skips shouldcomponent update method
        //not a suggested way to udpate the state unless its required to skip
        // this.state.firstName = "Hong Bo"
        // this.forceUpdate();

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
        // console.log("prevState", prevState);
        // console.log("prevProps", prevProps);

        // this.prevUser = prevState.user;
        // this.setState({
        //     user : this.prevUser
        // })

        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        // console.log("prevState",prevState);
        // console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }

    //destruction
    //in this LC method we must remove all subscriptions and server calls made in the component
    componentWillUnmount(){
        console.log("componentWillUnmount is called")
        //clearInterval(this.incrementAgeLoop)
    }

    //is the event listener for any text change on the text. and reviews event object in its callback
    onTextChange = (evt)=>{
        //debugger;
        let target = evt.target; //target is the html element on which event happened
        //console.log(target)
        let classlist = target.classList;
        let updatedValue = target.value;

        console.log(updatedValue)

        if (classlist.contains("userAge")) {
            this.setState({
                age : updatedValue
            })
        } else {   
            //update the userName state with new value so that it recreates the v-dom and renders on the page
            this.setState({
                userName : updatedValue
            })
        }
        evt.preventDefault();
    }

    formSubmit = (evt)=>{
        let address = this.refAddress.current.value
        let session = this.refSession.current.value

        //updating to the state again
        this.setState({
            address,
            session
        })

        // apart from suppressing default behaviour also helps to work with 
        // - event tunnelling
        // - event bubbling (ripple effect)
        //prevents the default behaviour of posting to server
        evt.preventDefault();
    }

    //is used to render the html first time with creation LC, for every change of state to show the updated value
    render()
    {
        console.log("Render method is called")
        return(
            <div className={"loadimage form"} style={{border:"1px solid red"}}>
                <h1>{this.state.title}</h1>
                <b className="feature">{"Product Feature's :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>                
                    <li>Allow user's to add to cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                    <li>Allow users to cancel the order.</li>
                    <li>Allow users to reorder the cart.</li>
                    <li>Add products/items to create product collection.</li>
                    <li>Allow users to give ratings to each product.</li>
                    <li>Have notifications on top right with logout.</li>
                </ul>
            </div>
        )

            {/* <>
                <h1>Home Component</h1>
                <h2>
                {this.state.age}
                <hr/>
                    {this.state.firstName}
                    <hr/>
                    {this.newAddress}
                </h2>
                <h3>{this.state.user&& this.state.user.session}</h3>
                <button onClick={this.onclick}>Change First Name</button> */}

                {/* controlled way of building a component 
                
                <div className="form col-md-12">
                     <div className="form-control">
                         <div className="col-md-3">
                             <b>User Name</b>
                         </div>
                         <div className="col-md-7">
                             <input type="text" className="form-control textbox userName" value={this.state.userName}
                                 placeholder="Please provide user name" onChange={this.onTextChange} maxLength={20}></input>
                         </div>
                         <div className="col-md-3">
                             <b>User Age</b>
                         </div>
                         <div className="col-md-7">
                             <input type="number" className="form-control textbox userAge" value={this.state.age}
                             placeholder="Please provide user age" onChange={this.onTextChange} max={120}></input>
                        </div>

                         <div className="col-md-3">
                         <button className={"form-control btn btn-primary col-md-1"} 
                             onClick={this.onclick} >Update Name </button>
                         </div>
                     </div>
                </div> 
                */}

                {/* creating component in un-controlled way using ref keyword 
                <form className="form-control col-md-12" action="/api/loginuser" 
                                method="post" onSubmit={this.formSubmit}>
                    <b>Address</b>
                    <input type="text" className="form-control" placeholder={"Default User Address"} 
                        ref={this.refAddress} maxLength={20} required></input>
                    <b>Session</b>
                    <input type="email" className="form-control" placeholder={"Default User Session"} 
                        ref={this.refSession} maxLength={20} required></input>

                    <button type="submit"> Save </button>
                </form>

                <label>{this.state.address}</label>
                <hr/>
                <label>{this.state.session}</label>
            </>
            
        )*/}
    }
}


//we should use default props to assign default values to the properties that we use in our component
// Home.defaultProps = {
//     user : {
//         session : "The Default Session Value",
//         address : "The Default Address"
//     }
// }


//proptypes are used to mark the properties we use in the component as required so that it shows waring if not present
//and can be fixed

// Home.propTypes = {
//     user : PropTypes.string.isRequired
// }