import React, { Component } from "react";
import { connect } from "react-redux";//helps react component to connect with store
import { AddUserToStore, SaveUserToDBUsingAxios, SaveUserToDBUsingFetch } from "../../State/User/UserActions";

class UserComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            userName : props.user.userName, // we need to read from store using props through container
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("username")){
            this.setState({ userName : value })
        }else if (classList.contains("pass")) {
            this.setState({ password : value })
        } else if (classList.contains("street")) {
            this.setState({ street : value })
        } else {
            this.setState({ mobile : value })
        }    

        evt.preventDefault();
    }

    loginUser = (evt)=>{        
        let newUser = this.state;
        alert("Logged Innn -"+JSON.stringify(newUser))

        //upon user action to login we send user to store
        //this.props.addUser(newUser);
        
        //this.props.saveUserToDBUsingFetch(newUser);

        this.props.saveUserToDBUsingAxios(newUser);

        //this.props.loginUser(newUser) //will go to usercontainer => useraction => server(db) => store => userreducer

        evt.preventDefault();
    }


    render(){
        return(
            <>
                <h1>User Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username" 
                                    value={this.state.userName} 
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Password</b>
                                    <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                    placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                            <div className="col-md-12">
                            <b>Street </b>
                                <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                        placeholder="Street Name" onChange={this.onTextChange} />
                            </div>
                        
                            <div className="col-md-12">
                                <b>Mobile </b>
                                <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                                placeholder="Mobile" maxLength="11"
                                onChange={this.onTextChange} />
                            </div>

                            <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={this.loginUser}/>
                                    
                        </div>
                </section>
            </>
        )
    }
}

//mapstatetoprops -- allows component to become subscriber
let mapStateToProps = (store) => { //store is the redux states
    return {
        user : store.userReducer.user
    //user - will be accessed as props.user in component
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
//dispatch - this dispatcher we get from connect to send action to store
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (user)=>{ //action creator
            dispatch(AddUserToStore(user))
        },
        saveUserToDBUsingFetch : (user)=>{
            dispatch(SaveUserToDBUsingFetch(user))
        },
        saveUserToDBUsingAxios : (user)=>{
            dispatch(SaveUserToDBUsingAxios(user))
        }
    }
}

//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)