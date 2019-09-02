import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";
 
const StyledNav = styled.nav`
    
    position: fixed;
    right:0;
    left: 0;
    background-color: rgb(40,40,40);
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