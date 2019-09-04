import React from 'react';
import styled from "styled-components";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHandSpock } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return(
        <footer>
            <p>Initially created by Stephen Peters w GatsbyJS in 2019</p>
            <p>LLAP <FontAwesomeIcon icon={ faHandSpock } size="s"/></p>
        </footer>
    )
}

export default Footer;