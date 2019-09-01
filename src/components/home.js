import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components" 
import SplashButton from "./splashbutton";

const HomeContainer = styled.section`

    display: grid;
    height: 100vh;
    
    grid-template-columns: 10% 40% 40% 10%;
    grid-template-rows: repeat(8, 1fr);
    background: #03001e; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #03001e, #7303c0, #de3021, #f7b733); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #03001e, #7303c0, #de3021, #f7b733); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /*Gradient from https://uigradients.com/. Was based on argon*/
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

        grid-template-columns: 10% 80% 10%;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        grid-template-columns: 10% 80% 10%;
    }
`;

const HomeMainContent = styled.main`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 8;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{

        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
       
    }
    
`;

const HomeMainText = styled.h1`
    color: rgba(245, 245, 245, 1);
    font-family: "Objective Super", "Cortoba", sans-serif;
    font-size: 7.5rem;
    line-height: .9;
    letter-spacing: -0.006em;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{

        font-size: 5.95rem;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        font-size: 3.5rem;
    }
`;

const HomeMainSubText = styled.h2`
    width: 35rem;
    background: rgba(245, 245, 245, 1);
    color: rgba(0,0,0, 0.6);
    margin-top: 0;
    margin-bottom: 0;
    padding-left: .2em;

    @media screen and (max-width: 648px ){
        width: 100%;
        font-size: 1.15rem;
    }

    @media screen and (max-width: 448px ){
        width: 100%;
        font-size: .73rem;
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
            <HomeMainContent>
                <HomeMainText>Stephen Peters </HomeMainText>
                <HomeMainSubText>Web Developer Based in New York City</HomeMainSubText>
                <SplashButton></SplashButton>
                <SplashButton></SplashButton>
                <SplashButton></SplashButton>
            </HomeMainContent>
        </HomeContainer>
    )
}

export default Home;