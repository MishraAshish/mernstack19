import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import { AppCopy } from "./CommonComponents/AppCopy";
import Home from "./CommonComponents/HomeComponent";
import About from "./CommonComponents/AboutComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
//import UserComponent from "./ApplicationComponents/User/UserComponent.jsx"; //instead of component we are loading container
//import UserContainer from "./ApplicationComponents/User/UserContainer";
import UserComponent from "./ApplicationComponents/User/UserComponent";

export default class ApplicationComponent extends React.Component {
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

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        //console.log("Render is called!! ", this.state.userName)
        //switch - case works for router
        return(
            <Router>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home user={this.state.user} />}/>
                        <Route path="home" element={<Home />}/>
                        {/* <Route path="login" element={<UserContainer />}/> */}
                        <Route path="login" element={<UserComponent />}/>
                        <Route path="app" element={<AppCopy />} />
                        <Route path="about" element={<About />} />
                        <Route path="about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                <Footer/>
            </Router>)
    }
}