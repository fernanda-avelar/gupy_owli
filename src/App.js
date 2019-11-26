import React from "react";
import "./App.css";
import Topp from "./components/navbar";
import Jumboo from "./components/jumbo";
import Middle from "./components/middle";
import Prices from "./components/prices";
import Carr from "./components/carroussel"

import "bootstrap/dist/css/bootstrap.min.css";

// import Topp from "./components/navbar"

function App() {
    return (
        <div className="App">
            <div className="blue">
                <div className="col-10 offset-1">
                    <Topp />
                    <Jumboo />
                </div>
            </div>
            <div className="recursos">
                <div className="col-10 offset-1 p-0">
                    <Middle />
                </div>
            </div>
            <div className="pBox">
                <div className="col-10 offset-1 p-0">
                    <Prices />
                    <Carr/>
                </div>
            </div>
        </div>
    );
}

export default App;
