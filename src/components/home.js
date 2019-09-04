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
    
    grid-template-columns: 10% 50% 30% 10%;
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
        grid-template-rows: 10% fit-content(25%) minmax(10%, 5.3rem) min-content auto;
        grid-template-columns: 10% 80% 10%;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-template-rows: 10% fit-content(25%) minmax(10%, 25%) min-content auto;
        grid-template-columns: minmax(3%, 12%) auto minmax(3%, 12%);
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        grid-template-rows: 10% fit-content(25%) minmax(10%, 45%) min-content auto;
        grid-template-columns: minmax(3%, 12%) auto minmax(3%, 12%);
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
        justify-content: center;
        z-index: 1;
    }
    
`;

const HomeMainSubText = styled.h2`
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column: 2/3;
    width: 100%;
    height: 1.857rem;
    background: rgba(245, 245, 245, 1);
    color: rgba(0,0,0, 0.6);
    margin-top: 0;
    margin-bottom: 0;
    padding-left: .2em;

    @media screen and (max-width: 648px ){
        grid-row-start: 4;
        grid-row-end: 5;
        width: 100%;
        font-size: 1.55rem;
    }

    @media screen and (max-width: 448px ){
        grid-row-start: 4;
        grid-row-end: 5;
        width: 100%;
        font-size: 1.15rem;
        text-align: center;
    }
    @media screen and (max-width: 350px )
    /*iphone SE*/{
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
            
                <HomeMainText>Stephen Peters </HomeMainText>
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
                <HomeMainSubText>A Web Developer in NYC</HomeMainSubText>
                
            
        </HomeContainer>
    )
}

export default Home;