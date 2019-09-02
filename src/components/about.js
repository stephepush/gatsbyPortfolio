import React from "react";
import styled from "styled-components"

const AboutContainer = styled.section`
    display: grid;
    height: 100vh;

    grid-template-columns: 2.5% 10% 50% auto;
    grid-template-rows: 10% 35% 35% 20%;

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
        grid-template-rows: 10% 15% 50% 5% 20%;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
    } 
`;

const AboutHeading = styled.h2`
    
    font-weight: 700;
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

const AboutMain = styled.main`

`;

const AboutText = styled.p`

`;

const About = () => {
    return (
        <AboutContainer>
            <AboutHeading>Whoami</AboutHeading>
            <main>
                
                
            </main>
        </AboutContainer>
    )
}

export default About;