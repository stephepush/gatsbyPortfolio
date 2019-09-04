import React from "react";
import styled from "styled-components";
import SplashButton from "./splashbutton";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faLinkedin, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";


const ContactSection = styled.section`
    display: grid;
    height: 75vh;

    grid-template-columns: 2.5% 8.5% 80% 10%;
    grid-template-rows: 20% 60%  20%;
    color: #384688;
    background-color: #DFF0D8;

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

const ContactText = styled.p`
    grid-row: 1/2;
    grid-column: 3/4;
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

const FlexboxContactButtonContainer = styled.section`
    grid-row: 2/3;
    grid-column: 3/4;
    display: flex;
    flex-direction: row;
    flex:wrap;
    width: 100%;
`;

const Contacts = () => {
    return (
        <ContactSection>
            <ContactHeading>
                Contact Me
            </ContactHeading>
            <ContactText>
                Feel free to contact me or see 
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
                        <FontAwesomeIcon icon={ faFreeCodeCamp } size="4x" />  
                    </SplashButton> 
            </FlexboxContactButtonContainer>

        </ContactSection>
            
    )
}

export default Contacts;