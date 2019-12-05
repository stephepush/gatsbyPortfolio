import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components" 
import SplashButton from "./splashbutton";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faLinkedin, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";



const HomeContainer = styled.section`

    display: grid;
    height: 100vh;
    
    grid-template-columns: 10% 50% auto 10%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background: #85144b;
    @font-face {
        font-family: "Objective Regular";
        src: url("../fonts/Objective-Regular.woff2") format("woff2");
        src: url("../fonts/Objective-Regular.otf") format("otf");
    }

    @font-face {
        font-family: "Objective Super";
        src: url("../fonts/Objective-Super.woff2") format("woff2");
        src: url("../fonts/Objective-Super.otf") format("otf"); 
    }

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        grid-template-columns: 10% 50% auto 10%;
        grid-template-rows: 1fr auto auto 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-template-columns: 10% 50% auto 10%;
        grid-template-rows: 1fr auto auto 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        grid-template-columns: 10% 50% auto 10%;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`;



const HomeMainText = styled.h1`
    grid-row: 2/3;
    
    grid-column: 2/3;

    color: rgba(245, 245, 245, 1);
    font-family: "Objective Super", "Cortoba", sans-serif;
    font-size: 7.5rem;
    line-height: .9;
    letter-spacing: -0.006em;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;

    @media screen and (max-width: 768px )
    and (orientation: portrait) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        padding-top: 10rem;
        font-size:5rem;
    }

    @media screen and (max-width: 768px )
    
    /*For tablets/regular ipads*/{
        padding-top: 1.25rem;
        font-size:4.75rem;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        padding-top: 5rem;
        font-size: 3.35rem;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        padding-top: 2.5rem;
        
    }
`;

const FlexBoxButtonContainer = styled.section`
    grid-row: 3/4;
    grid-column: 2/3;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-content: center;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        justify-content: space-evenly;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-column: 2/4;
        justify-content: center;
        z-index: 1;
    }
    
`;

const HomeMainSubHeading = styled.h2`
    grid-row: 2/4;
    grid-column: 1/2;
    background-color: white;
    width: 1.60rem;
    font-size: 1.25rem;
    margin-right: 0;
    margin-left: 0;
    justify-self: end;
    text-align: center;
    writing-mode: vertical-rl;
    
    
    
    margin-bottom: 0;
    padding-left: .2em;

    @media screen and (max-width: 991px ){
        height: 100vh
    }

    @media screen and (max-width: 648px ){
        grid-column: 1/2;
        grid-row: 2/5;
        width: 50%;
        height: fit-content;
        font-size: 1.15rem;
    }

    @media screen and (max-width: 448px ){
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

const Home = () => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title, description, author
                }
            }
        }
    `)
    return (
        <HomeContainer>
            
                <HomeMainText>Stephen <br /> Peters </HomeMainText>
                <FlexBoxButtonContainer>
                    <SplashButton>
                        <FontAwesomeIcon icon={ faGithub } size="5x" />  
                    </SplashButton>
                    <SplashButton>
                        <FontAwesomeIcon icon={ faLinkedin } size="5x" />  
                    </SplashButton>
                    <SplashButton>
                        <FontAwesomeIcon icon={ faTwitter } size="5x" />  
                    </SplashButton>
                </FlexBoxButtonContainer>
                <HomeMainSubHeading>A Web Developer in NYC</HomeMainSubHeading>
                
            
        </HomeContainer>
    )
}

export default Home;