import React from 'react';
import styled from "styled-components";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHandSpock } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 10% 50% 30% 10%;
    grid-template-rows: 1rem 1rem 10px;
`;

const FooterTextContainer = styled.div`
    grid-column: 2/3;
`;

const FooterText = styled.p`
    
    font: "non-serif";
    font-size: .75rem;
`;

const Footer = () => {
    return(
        <FooterContainer>
            <FooterTextContainer>
                <FooterText>Initially created by Stephen Peters w GatsbyJS in 2019</FooterText>
                <FooterText>LLAP <FontAwesomeIcon icon={ faHandSpock } size="s"/></FooterText>
            </FooterTextContainer>
        </FooterContainer>
    )
}

export default Footer;