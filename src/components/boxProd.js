import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Buy from "./icons/buy";

// import { Container } from './styles';

import "./boxProd.css";

const Prod = ({
    titulo = "",
    subtext = "",
    txt1 = "",
    txt2 = "",
    price = ""
}) => (
    <div>
        <Card
            className="cardBody"
            style={{ width: "340px", marginTop: "-60px" }}
        >
            <Card.Body>
                <Card.Title className="titulo ">
                    <h2>
                        <b>{titulo}</b>
                    </h2>
                </Card.Title>
                <Card.Text style={{ color: "#737373" }}>{subtext}</Card.Text>
                <Card.Text style={{fontSize: "50px", fontWeight:"900"}}>
                    {/* <h1> */}
                        <sup>R$</sup>
                        <b>{price}</b>
                    {/* </h1> */}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group list-group-flush">
                <ListGroupItem>{txt1}</ListGroupItem>
                <ListGroupItem>{txt2}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button className="parent_inline" variant="outline-primary" size="lg" block>
                    <Buy className="inline" /> 
                    <h5 className="inline icon_right"><b>Comprar</b></h5>
                </Button>
            </Card.Body>
        </Card>
    </div>
);

export default Prod;
