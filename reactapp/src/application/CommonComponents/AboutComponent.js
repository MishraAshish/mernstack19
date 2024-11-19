import React, { useState } from "react"; // { useState } - named import and can be imported many named ones
import { useParams, useNavigate } from "react-router-dom";

//a functional component using arrow function
let About = (props)=>{
    let params = useParams(); 
    let param = params && params["id"] ? params["id"]: 0; 
    
    //this.state = {userName : "Nilay!"}
    //this.setState({userName : "BenMa"})

    //using functional hook - useState is replacement of setState and state
    let [userName, setUserName] = useState("Yao!") 
    // let [userAge, setUserAge] = useState(20)
    //let [user, setUser] = useState({userName :"Yao!", userAge : 19}) //in case to update the object

    //first hook that we are using in application
    let goToHome = useNavigate(); //helps to create route table on the fly and intercepted by BrowserRouter

    let onGoToHomeClick = (evt)=>{
        //goToHome("/Login");
        
        setUserName("Silvia!!") //this will update the userName and re-render the about component

        evt.preventDefault();//it stops the default behaviour like event propagation
    }

    return(
        <div className="about" >  
                <h2>We promise to support .... </h2>  
                <p className="about-content">If you’re looking for a job—a great job—we can help  
                    you get in the door at some incredible companies.  
                    Need to hire good people? We know thousands.  
                    Let us introduce you. No matter where you are,  
                    we can help you get where you want to go in your career.  
                </p>
                <p>id = {param}</p>
                <p>Sum of Params = {parseInt(param) + parseInt(param)}</p>
                <p>Multiple of Params = {parseInt(param) * parseInt(param)}</p>

                <button className={"form-control btn btn-primary col-md-1"} 
                        onClick={onGoToHomeClick} 
                        >Go To Home</button>

                <h4>{userName}</h4>
        </div>
    )
}

export default About;