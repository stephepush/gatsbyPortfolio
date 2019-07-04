import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => (
    <nav>
        
            <AnchorLink offset='100' href='#home'>Home</AnchorLink>
            <AnchorLink href='#about'>About</AnchorLink>
            <AnchorLink href='#projects'>Projects</AnchorLink>
            <AnchorLink href='#contact'>Contact</AnchorLink>
        
    </nav> 


);

export default Nav;