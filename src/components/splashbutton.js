import React from "react";
// import {Link, graphql, use useStaticQuery} from "gatsby";
import styled from "styled-components";

const Button = styled.button`

    height: fit;
    width: fit;
    background: transparent;
    -webkit-appearance: none; 
    /* ^why? 
    Explanation: 
    https://www.daretothink.co.uk/stop-ios-styling-your-input-fields-and-buttons/ */
	background-color:transparent;
	cursor:pointer;
	color:#ffffff;
	border: 0;
    text-shadow:6px 7px 5px #2f6627;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        height: fit;
        
    }
    
    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        height: fit;
    
    }
`;


const SplashButton = (props) => {
    return (
        <Button>
            {props.children}
        </Button>
    )
}
export default SplashButton;