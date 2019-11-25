import React, { Component } from "react";
import Prod from "./boxProd";


import "./prices.css";

// import { Container } from './styles';

export default class Prices extends Component {
    render() {
        return (
            <div>
                <div class="row justify-content-around boxesPrices">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">
                        <Prod
                            titulo="Plano Indicado"
                            subtext="Recursos ilimitados"
                            txt1="Lorem Ipsum Dolor sit amet"
                            txt2="Consectetur adpisint elit"
                            price="145"
                        />
                    </div>
                    <div class="col-md-3">
                        <Prod
                            titulo="Plano Indicado"
                            subtext="Recursos ilimitados"
                            txt1="Lorem Ipsum Dolor sit amet"
                            txt2="Consectetur adpisint elit"
                            price="145"
                        />
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        );
    }
}
