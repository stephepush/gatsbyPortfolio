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

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        height: 3rem;
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        height: 3rem;
    
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