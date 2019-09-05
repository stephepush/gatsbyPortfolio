import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class SlideBurgerMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Menu>
                <a id="home" href="#">Home</a>
                <a id="about" href="#">About</a>
                <a id="projects" href="#">Selected Work</a>
                <a id="contact" href="#">Reach Out</a>
            </Menu>
        )
    }

}

export default SlideBurgerMenu;