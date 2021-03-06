import React, { Component } from "react";
import Icons from "./icons/feature";

// import { Container } from './styles';

export default class Middle extends Component {
    render() {
        return (
            <div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h1 style={{textAlign:"left",fontSize:"55"}}><b>Conheça todos os nossos recursos</b></h1>
                    </div>
                    <div className="col-md-4">
                        <Icons name="feature-1" />
                        <h3>
                            <b>Economia</b>
                        </h3>
                        <h5>Lorem Ipsum Dolores</h5>
                    </div>
                    <div className="col-md-4">
                        <Icons name="feature-2" />
                        <h3>
                            <b>Centralizado</b>
                        </h3>
                        <h5>Lorem Ipsum Dolores</h5>
                    </div>
                </div>
            </div>
        );
    }
}
