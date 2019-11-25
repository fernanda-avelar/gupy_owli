import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
// import { Container } from './styles';

export default class Carr extends Component {
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
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                            className="d-block w-100"
                            src="/img/2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                            className="d-block w-100"
                            src="/img/3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
