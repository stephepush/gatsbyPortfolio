import React from "react";
import styled from "styled-components";
import SplashButton from "./splashbutton";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faLinkedin, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";


const ContactSection = styled.section`
    display: grid;
    height: 90vh;

    grid-template-columns: 10% 50% 30% 10%;
    grid-template-rows: 1fr 3rem 1fr 1fr 3rem 1fr 1fr 1fr 1fr 1fr;
    color: #384688;
    background-color: #819975;

    @media screen and (max-width: 991px ){
        height: 94vh;
    }
    @media screen and (max-width: 768px )
    and (orientation: portrait) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 768px )
    
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
        
    }
`;

const ContactHeading = styled.h2`
    grid-row: 2/6;
    grid-column: 1/2;
    background-color: white;
    margin-right: 0;
    margin-left: 0;
    justify-self: end;
    text-align: center;
    writing-mode: vertical-rl;
    margin-bottom: 0;
    padding: .75rem;

    @media screen and (max-width: 960px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
        font-size: 1.15rem; 
    }

    @media screen and (max-width: 648px )
    /*For smartphones, particularly iphones*/{
        font-size: 1rem;
        padding: .30rem;
    }

    @media screen and (max-width: 400px )
    /*iphone SE*/{
        font-size: .85rem;
        padding: .15rem;
    } 
`;

const ContactText = styled.p`
    grid-row: 2/3;
    grid-column: 2/3;
    margin: 0 auto;
    padding-top: .8rem;
    font-size: 1.25rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 768px )
    and (orientation: portrait) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 768px )
    
    /*For tablets/regular ipads*/{
        font-size: 1.10rem;
        grid-column: 2/4;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
        
    }
`;

const FlexboxContactButtonContainer = styled.section`
    grid-row: 3/5;
    grid-column: 2/3;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 3em;

    @media screen and (max-width: 768px )
    
    /*For tablets/regular ipads*/{
        grid-row: 3/6;
        grid-column: 2/4;
    }

    @media screen and (max-width: 569px )
    /*For smartphones, particularly iphones*/{
        grid-column: 2/5;
        margin-left: 0;
    }

    @media screen and (max-width: 350px )
    /*iphone SE*/{
        
        
    }
`;

const Contacts = () => {
    return (
        <ContactSection>
            <ContactHeading>
                Contact Me
            </ContactHeading>
            <ContactText>
                Contact me/see 
                what I'm up to on these platforms:
            </ContactText>
            <FlexboxContactButtonContainer>
                    <SplashButton>
                        <FontAwesomeIcon icon={ faGithub } size="5x" />  
                    </SplashButton>
                    <SplashButton>
                        <FontAwesomeIcon icon={ faLinkedin } size="5x" />  
                    </SplashButton>
                    <SplashButton>
                        <FontAwesomeIcon icon={ faTwitter } size="5x" />  
                    </SplashButton>
                    <SplashButton>
                        <FontAwesomeIcon icon={ faFreeCodeCamp } size="5x" />  
                    </SplashButton> 
            </FlexboxContactButtonContainer>

        </ContactSection>
            
    )
}

export default Contacts;