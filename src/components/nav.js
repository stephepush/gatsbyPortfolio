import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";
 
const StyledNav = styled.nav`
    background: #03001e; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #03001e, #7303c0, #de3021, #f7b733); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #03001e, #7303c0, #de3021, #f7b733); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /*Gradient from https://uigradients.com/. Was based on argon*/
    position: fixed;
    right:0;
    left: 0;
    background-color: rgb(6, 243, 184, .2);
    top: 0;
    height: 3rem;
    width: 100vw;
    z-index: 999;
    color: rgba(245,245,245,1);
`;

const Nav = () => (
    <StyledNav>
        {/* Todo: Change the text styling in the anchorlink elems */}
            <AnchorLink offset='100' href='#home'>Home</AnchorLink>
            <AnchorLink href='#about'>About</AnchorLink>
            <AnchorLink href='#projects'>Projects</AnchorLink>
            <AnchorLink href='#contact'>Contact</AnchorLink>
        
    </StyledNav> 


);

export default Nav;