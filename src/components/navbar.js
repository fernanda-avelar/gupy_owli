import React, { Component } from "react";
import { Button, Nav, Form, Navbar } from "react-bootstrap";
import IconRightBlack from "./icons/rightblack"
// import Arrow from "./icons/arrow";

import "./navbar.css";

// import { Container } from './styles';

export default class Topp extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <svg
                            width="82px"
                            height="33px"
                            viewBox="0 0 82 33"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                        >
                            <title>Owli</title>
                            <desc>Created with Sketch.</desc>
                            <defs>
                                <polygon
                                    id="path-1"
                                    points="0.191039738 0.222391304 7.11906667 0.222391304 7.11906667 29.3716014 0.191039738 29.3716014"
                                ></polygon>
                            </defs>
                            <g
                                id="Owli"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Group-10-Copy"
                                    transform="translate(1.000000, 1.000000)"
                                >
                                    <path
                                        d="M21.9776,16.0596174 C21.9949333,9.05631304 18.6989333,5.30531304 13.4442667,5.29318261 C8.14826667,5.27970435 4.83493333,9.01453043 4.8176,16.0178348 C4.80026667,23.1815304 8.17493333,26.8530087 13.3922667,26.8651391 C18.6869333,26.8772696 21.9602667,23.223313 21.9776,16.0596174 M0.000266666667,16.0057043 C0.0216,6.74883478 5.56826667,1.36966087 13.5322667,1.38853043 C21.6936,1.40874783 26.8576,6.57226957 26.8349333,16.0717478 C26.8136,25.3677043 21.2656,30.7886609 13.2629333,30.7684435 C5.1016,30.7482261 -0.0224,25.5442696 0.000266666667,16.0057043"
                                        id="Fill-1"
                                        fill="#FEFEFE"
                                    ></path>
                                    <path
                                        d="M58.7249333,19.6903913 C58.7076,26.8945217 55.3942667,30.791087 50.1396,30.7776087 C47.2316,30.7708696 45.2036,29.8813043 44.1356,26.9794348 C42.8156,29.3516087 40.5422667,30.7546957 37.5569333,30.7479565 C32.9382667,30.7358261 30.5942667,28.3555652 30.6076,23.0424348 L30.6369333,10.9295217 L35.1756,10.9403043 L35.1476,22.4911739 C35.1409333,25.5493913 35.9756,26.6384348 38.1249333,26.6438261 C40.9902667,26.6505652 42.3089333,24.4401304 42.3222667,19.2887391 L42.3422667,10.9578261 L46.8809333,10.9686087 L46.9396,19.662087 L46.9329333,22.3577391 C46.9236,26.3823478 48.6356,26.6694348 50.1889333,26.6734783 C52.4969333,26.6788696 54.0942667,24.5493043 54.1062667,19.8804348 C54.1129333,17.0634783 54.1009333,14.6185217 54.1102667,10.9861304 L58.7462667,10.996913 C58.7382667,14.4001739 58.7316,16.833 58.7249333,19.6903913"
                                        id="Fill-3"
                                        fill="#FEFEFE"
                                    ></path>
                                    <g
                                        id="Group-7"
                                        transform="translate(62.666667, 1.125704)"
                                    >
                                        <mask id="mask-2" fill="white">
                                            <use href="#path-1"></use>
                                        </mask>
                                        <g id="Clip-6"></g>
                                        <path
                                            d="M0.191066667,25.0544696 L0.251066667,0.222121739 L4.82973333,0.232904348 L4.77373333,23.7376435 C4.77106667,24.9857304 5.28706667,25.2687739 6.00306667,25.2701217 C6.36173333,25.2714696 6.7204,25.2310348 7.11906667,25.0719913 L7.10973333,28.9752957 C6.2324,29.2556435 5.43773333,29.3742522 4.44173333,29.3715565 C1.41506667,29.3634696 0.1844,27.9522957 0.191066667,25.0544696"
                                            id="Fill-5"
                                            fill="#FEFEFE"
                                            mask="url(#mask-2)"
                                        ></path>
                                    </g>
                                    <path
                                        d="M73.8552,11.0335739 L78.3938667,11.0443565 L78.3485333,30.3627478 L73.8098667,30.3519652 L73.8552,11.0335739 Z M73.0738667,4.43192174 C73.0792,2.7404 74.3165333,1.5367913 76.1472,1.54083478 C77.9392,1.54487826 79.1298667,2.75522609 79.1258667,4.4454 C79.1218667,6.1760087 77.9258667,7.38096522 76.1338667,7.37692174 C74.3018667,7.37287826 73.0698667,6.16253043 73.0738667,4.43192174 Z"
                                        id="Fill-8"
                                        fill="#FEFEFE"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Recursos</Nav.Link>
                            <Nav.Link href="#link">Plano</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="link">Entrar</Button>
                            <Button variant="outline-light">
                                Comprar <IconRightBlack color="#ffffff"/>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
