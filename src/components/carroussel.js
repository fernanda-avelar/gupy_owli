import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import "./carroussel.css"
// import { Container } from './styles';
// import $ from 'jquery';
export default class Carr extends Component {
    constructor() {
        super();
    
        this.topp = this.topp.bind(this);
      }

      topp() {
        console.log("clicked");
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
        // $("html, body").animate({ scrollTop: 0 }, 1000);
      }
    
    render() {
        return (
            <div>
                <Carousel style={{ margin: "80px 0" }}>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                            className="d-block w-100"
                            src="/img/1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="caption"><b>Bom teste.</b></h1>
                            <Button onClick={this.topp } >Voltar para o topo</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                            className="d-block w-100"
                            src="/img/2.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 className="caption"><b>Bom teste.</b></h1>
                            <Button onClick={this.topp }>Voltar para o topo</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                            className="d-block w-100"
                            src="/img/3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 className="caption"><b>Bom teste.</b></h1>
                            <Button onClick={this.topp }>Voltar para o topo</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }

    
}
