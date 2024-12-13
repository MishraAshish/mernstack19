//hooks are the independent functions build perform the tasks we have to do with states, reducers etc
import React, {useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUserToStore, SaveUserToDBUsingAxios } from "../../State/User/UserActions";

let UserHooksComponent = (props)=>{

    //to subscribe we need to implement - mapStateToProps and its equivalent hook is useSelector
    let user = useSelector((store)=>store.userReducer.user)
    //console.log(user)

    //to make component a publisher we need to implement mapDispatch to props - useDispatch
    let dispatcher = useDispatch();


    // initializes state and returns a callback which we can use to update the state
    let [uName, setUserName] = useState(user.userName) //user.userName - defined in userReducer 
    let [pass, setPassword] = useState(user.password)
    let [street, setStreet] = useState(user.street)
    let [mobile, setPhone] = useState(user.mobile) 

    let onTextChange =(evt)=>{
        let val = evt.target.value
        setUserName(val)
        evt.preventDefault()
    }

    let loginUser = (evt)=>{
        let userObj = {
            userName : uName,
            password : pass,
            street,
            mobile
        }

        alert(JSON.stringify(userObj));
        
        dispatcher(SaveUserToDBUsingAxios(userObj))

        evt.preventDefault();
    }

    //useRef - works as a reference to html element and allows us to update the value as well creates un-contorlled component
    //let userName = useRef(null);

    //useEffect - checks for any data change or UI interaction and allows to call for re-render on state change
    //useEffect - is used to implement three life cycle methods <shouldComponentUpdate, componentDidMount, componentWillUnmount>
    //componentDidMount - life cycle method allows us to access html and setdata
    // useEffect(()=>{
    //     userName.current.value = user.userName;

    //     //returning a call back works as destructure life cycle method
    //     return ()=>{
    //         //this function acts as component will unmount
    //         console.log("Component Unmounted")
    //     }
    // },[]) //when we set [] or any array this initializes the state values and userEffect acts as componentDidMount
    
    // let updateToStore = (evt)=>{
    //     let user = {userName : userName.current.value}
    //     alert(JSON.stringify(user))
    //     dispatcher(AddUserToStore(user))
    //     evt.preventDefault()
    // }    

    return(
        <>
            <h1>User Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" 
                                value={uName} //state to update the userName
                            placeholder="User Name" onChange={onTextChange} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" 
                                value={pass} 
                            placeholder="Password" onChange={(evt)=>setPassword(evt.target.value)} maxLength={20}/>
                    </div>
                    <div className="col-md-12">
                            <b>Street </b>
                                <input type="text" className="form-control col-md-6 street" 
                                value={street} 
                            placeholder="Street Name" onChange={(evt)=>setStreet(evt.target.value)} />
                    </div>
                        
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" 
                            value={mobile} placeholder="Mobile" maxLength={11}
                            onChange={(evt)=>setPhone(evt.target.value)} />
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={loginUser}/>
                </div>
            </section>

            {/* uncontrolled way by using ref keyword */}
            {/* <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={sessionName}
                    placeholder="Please enter session name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                        <b>Password :</b>
                        <input type="password" className={"form-control col-md-12"} ref={todaysTopic} 
                                placeholder="Please enter today's topic" maxLength={20} required/>
                    </label>
                    <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>  */}

            {/* <input type="text" placeholder="Please type userName" ref={userName} maxLength={20}/>
            <button onClick={updateToStore} >Submit</button> */}
        </>
    )
}

export default UserHooksComponent;