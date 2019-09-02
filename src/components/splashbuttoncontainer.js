import React from 'react';
import styled from 'styled-components';
import  SplashButton from "./splashbutton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faLinkedin, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";


//library.add(faTwitter)

const gridContainer = styled.section`
    grid-row-start: 4;
    grid-row-end: 6;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`;

const SplashButtonContainer = (props) => {
    return (
        <gridContainer>
            {props.children}
        </gridContainer>
    )
}

export default SplashButtonContainer;