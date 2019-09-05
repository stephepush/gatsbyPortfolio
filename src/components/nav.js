import React from 'react';
import MediaQuery from 'react-responsive';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";

 
const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: 2.5% 10% minmax(10px, 1700px) 25% 2.5%;
    position: fixed;
    right:0;
    left: 0;
    background-color: rgb(62,65,44);
    top: 0;
    height: 3rem;
    max-width: 100%;
    z-index: 999;
    color: rgba(255,201,0,1);
`;

const SectionLinkContainer = styled.div`
    grid-column: 4/5;
    
    align-self: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const StyledAnchorLink = styled(AnchorLink)`
    color: rgba(255,201,0,1);
    
`;

const Nav = () => (
    
    <StyledNav>
        {/* Todo: Change the text styling in the anchorlink elems */}
        <SectionLinkContainer>
            
            <StyledAnchorLink href='#about'>About</StyledAnchorLink>
            <StyledAnchorLink href='#projects'>Projects</StyledAnchorLink>
            <StyledAnchorLink href='#contact'>Contact</StyledAnchorLink>
        </SectionLinkContainer>
           
        
    </StyledNav> 


);

export default Nav;