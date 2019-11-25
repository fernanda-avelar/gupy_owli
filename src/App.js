import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
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
            <div class="blue">
                <div class="col-10 offset-1">
                    <Topp />
                    <Jumboo />
                </div>
            </div>
            <div class="recursos">
                <div class="col-10 offset-1 p-0">
                    <Middle />
                </div>
            </div>
            <div class="pBox">
                <div class="col-10 offset-1 p-0">
                    <Prices />
                    <Carr/>
                </div>
            </div>
        </div>
    );
}

export default App;
