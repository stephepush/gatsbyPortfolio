import React from "react";
import styled from "styled-components";

/* import Avataaars from "../svg-assets/"; */

const AboutContainer = styled.section`
    display: grid;
    height: 100vh;

    grid-template-columns: 10% 50% 30% 10%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    background-color: #3E412C;
    color: #00fe6f;
    font-family: 'Courier New', Courier, monospace;
    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{

    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
    } 
`;

const AboutHeading = styled.h2`
    grid-column: 2/3;
    grid-row: 2/4;
    grid-column: 1/2;
    background-color: white;
    width: 1.60rem;
    
    margin-right: 0;
    margin-left: 0;
    justify-self: end;
    text-align: center;
    writing-mode: vertical-rl;
    
    
    
    margin-bottom: 0;
    padding-left: .2em;
    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-column: 2/3;
        grid-row: 2/3;
        justify-self: center;
        align-self: center;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
    } 
`;

const AboutMain = styled.main`

    grid-column: 3/4;
    grid-row: 2/3;
    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-column: 2/3;
        grid-row: 3/4;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
    } 
`;


const SVGAvatar = styled.svg`
    grid-column: 3/4;
    grid-row: 2/3;
    
    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-column: 2/3;
        grid-row: 3/4;
        height: 4rem;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
    } 
`;

const AboutText = styled.p`
    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-column: 2/3;
        grid-row: 2/3;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
    } 
`;

const About = () => {
    return (
        <AboutContainer>
            <AboutHeading>Whoami</AboutHeading>
            <AboutMain>
                {/* <SVGAvatar>
                    <Avataaars />
                </SVGAvatar> */}
                <AboutText>
                    Hi all! I'm just writing this tidbit for now to see how things look. Nbd.
                </AboutText>
            </AboutMain>
        </AboutContainer>
    )
}

export default About;