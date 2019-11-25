import React, { Component } from "react";
import {
    Button,
    Jumbotron,
    Card,
    InputGroup,
    FormControl
} from "react-bootstrap";
import IconEmail from "./icons/mail";
import IconTel from "./icons/tel";
import IconUser from "./icons/nome";
import IconRightBlack from "./icons/rightblack"

import "./jumbo.css";

// import { Container } from './styles';

export default class Jumboo extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div class="row justify-content-around">
                        <div class="col-md-6 text parent">
                            <div class="content">
                                <h1><b>A nova área do cliente.</b></h1>
                                <p>
                                    Aplicativos para locatários e proprietários
                                    de imoveis
                                </p>
                                <p>
                                    <Button className="parent_inline" variant="light">
                                        <b className="inline">Quero fazer parte</b>
                                        <IconRightBlack className="inline icon_right"/>
                                    </Button>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <Card style={{ width: "100%" }}>
                                <Card.Body>
                                    <Card.Title>
                                        Cadastre sua imobiliária
                                    </Card.Title>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">
                                                <IconUser />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Nome"
                                            aria-label="Nome"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">
                                                <IconEmail />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">
                                                <IconTel />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Telefone"
                                            aria-label="Telefone"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <Button variant="primary" size="lg" block>
                                        Enviar
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
