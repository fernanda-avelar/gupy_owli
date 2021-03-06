import React, { Component } from "react";

// import { Container } from './styles';
export default class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        var linkStyle;

        if (this.state.hover) {
            linkStyle = "#ffffff";
        } else {
            linkStyle = "#737373";
        }
        return (
            <svg
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
            >
                <g
                    id="cart-black"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g
                        id="Group-2-Copy"
                        transform="translate(1.000000, 1.000000)"
                        fillRule="nonzero"
                        stroke={linkStyle}
                        strokeWidth="1.13879204"
                    >
                        <path
                            d="M0.00190581468,0.00896209518 L3.80689361,0.645030867 L2.98312229,13.3801465 C2.9222253,14.3215852 3.6360454,15.1341388 4.5774841,15.1950358 C4.61419075,15.1974102 4.6509645,15.1985983 4.68774786,15.1985983 L17.2886165,15.1985983"
                            id="Path-2"
                        ></path>
                        <path
                            d="M3.61189806,11.3355947 L16.532024,11.3355947 C16.8103446,11.3355947 17.0468212,11.1320549 17.0882557,10.8568358 L17.9658632,5.02752696 C18.0121122,4.72032869 17.800571,4.4338031 17.4933727,4.38755413 C17.4785405,4.38532112 17.4636249,4.38368227 17.4486616,4.38264152 L4.24263635,3.46410419 L3.61189806,11.3355947 Z"
                            id="Line"
                            fill={linkStyle}
                            strokeLinecap="square"
                        ></path>
                        <ellipse
                            id="Oval"
                            fill={linkStyle}
                            cx="4.58711759"
                            cy="16.5993526"
                            rx="1.43152486"
                            ry="1.39840637"
                        ></ellipse>
                        <ellipse
                            id="Oval-Copy-2"
                            fill={linkStyle}
                            cx="17.6934751"
                            cy="16.5993526"
                            rx="1.43152486"
                            ry="1.39840637"
                        ></ellipse>
                    </g>
                </g>
            </svg>
        );
    }
}
