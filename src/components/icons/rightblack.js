import React from "react";

// import { Container } from './styles';

const IconRightBlack = ({ color = "" }) => (
    <svg
        style={{ marginLeft: "10px" }}
        width="7px"
        height="11px"
        viewBox="0 0 7 11"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
    >
        <title>arrow-right-black-small</title>
        <desc>Created with Sketch.</desc>
        <g
            id="arrow-right-black-small"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <polyline
                id="arrow-copy"
                stroke={color}
                fillRule="nonzero"
                points="1 1 6 5.5 1 10"
            ></polyline>
        </g>
    </svg>
);

export default IconRightBlack;
