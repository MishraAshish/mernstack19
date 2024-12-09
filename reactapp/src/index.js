console.log("the entry point of our front end application which needs to be used by webpack task runner")
import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; //the component used to set store as parent to all application components

import store from "./application/State/store";//store will act as the parent of all the components to access props
import ApplicationComponent from "./application/app";


//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render(  //first time when our virtual dom is created and loads
        <Provider store={store}>
                <ApplicationComponent/>
        </Provider>
)