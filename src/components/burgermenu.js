import React from 'react';
import { slide as Menu } from 'react-burger-menu';


const BurgerStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#C4CBF0'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      overflow: "hidden",
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      margin: "2.75rem 1.75rem",
      fontSize: "1.25rem",
      color: "#C4CBF0",
      textDecoration: "none",
      fontWeight: "700",
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

class SlideBurgerMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }


    render () {
        return (
            <Menu styles={ BurgerStyles }>
                <a id="home" href="#">Home</a>
                <a id="about" href="#">About</a>
                <a id="projects" href="#">Selected Work</a>
                <a id="contact" href="#">Reach Out</a>
            </Menu>
        )
    }

}

export default SlideBurgerMenu;