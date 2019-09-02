import React from "react";
import styled from "styled-components"

const AboutContainer = styled.section`
    display: grid;
    height: 100vh;

    grid-template-columns: 2.5% 15% 50% auto;
    grid-template-rows: 20% 50% 20% 10%;

    background-color: rgba(40, 40, 40, 1);
    color: rgba(51, 255, 0);
    font-family: 'Courier New', Courier, monospace;
    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-template-columns: 2.5% auto 2.5%;
        grid-template-rows: 15% 15% 50% 20%;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
    } 
`;

const AboutHeading = styled.h2`
    grid-column: 2/3;
    grid-row: 2/3;
    font-weight: 700;
    justify-self: end;
    align-self: center;
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
                <AboutText>
                    Hi all! I'm just writing this tidbit for now to see how things look. Nbd.
                </AboutText>
            </AboutMain>
        </AboutContainer>
    )
}

export default About;