import React from "react";
// import {Link, graphql, use useStaticQuery} from "gatsby";
import styled from "styled-components";

const Button = styled.button`

    height: 3.5rem;
    width: 15rem;
    -webkit-appearance: none; 
    /* ^why? 
    Explanation: 
    https://www.daretothink.co.uk/stop-ios-styling-your-input-fields-and-buttons/ */

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        height: 3rem;
        width: 75%;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        height: 3rem;
        width: 85%;
    }
`;


const SplashButton = () => {
    return (
        <div>
            <Button>
                These are test buttons
            </Button>
        </div>
    )
}
export default SplashButton;