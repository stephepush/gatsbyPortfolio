import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

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
    
    grid-row: 2/3;
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
        grid-column: 1/2;
        grid-row: 2/5;
        width: 50%;
        height: fit-content;
        font-size: 1.15rem;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        margin-top: 5.75rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        text-align: center;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        margin-top: 3.25rem;
        text-align: center;
    } 
`;

const AboutMain = styled.main`

    grid-column: 2/3;
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

/* const About = () => {
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
} */

const About = () => (
    <StaticQuery query={graphql`
        {
            allTextJson {
            edges {
                node {
                about
                }
            }
            }
        }
    `} render={(data) =>(
        <AboutContainer>
            <AboutHeading>Whoami</AboutHeading>
            <AboutMain>
                
                <AboutText >
                   {data.aboutPage}
                </AboutText>
            </AboutMain>
        </AboutContainer> 
    )}
 />
)
export default About;