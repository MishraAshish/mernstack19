import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
let Footer = lazy(()=> import("./CommonComponents/FooterComponent"));
let Header = lazy(()=> import("./CommonComponents/HeaderComponent"));
//import { AppCopy } from "./CommonComponents/AppCopy";
let Home = lazy(()=> import("./CommonComponents/HomeComponent"));
let About = lazy(()=> import("./CommonComponents/AboutComponent"));
let NotFound = lazy(()=> import( "./CommonComponents/NotFoundComponent"));
//import UserComponent from "./ApplicationComponents/User/UserComponent.jsx"; //instead of component we are loading container
//import UserContainer from "./ApplicationComponents/User/UserContainer";
//import UserComponent from "./ApplicationComponents/User/UserComponent";
let UserHooks = lazy(()=> import( "./ApplicationComponents/User/UserHooksComponent"));
let ProductComponent = lazy(()=> import("./ApplicationComponents/Product/ProductComponent"));
let CartComponent = lazy(()=> import("./ApplicationComponents/Cart/CartComponent"));
let UnderstandingHooks = lazy(()=> import("./Hooks/UnderstandingHooks"));

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
                <div className="topdiv">
                <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home user={this.state.user} />}/>
                        <Route path="home" element={<Home />}/>
                        {/* <Route path="login" element={<UserContainer />}/> */}
                        <Route path="login" element={<UserHooks />}/>
                        {/* <Route path="app" element={<AppCopy />} /> */}
                        <Route path="product" element={<ProductComponent />} />
                        <Route path="cart" element={<CartComponent />} />
                        <Route path="about" element={<About />} />
                        <Route path="about/:id" element={<About />} />
                        <Route path="hook" element={<UnderstandingHooks />} />
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                <Footer/>
                </Suspense>
                </div>
            </Router>)
    }
}