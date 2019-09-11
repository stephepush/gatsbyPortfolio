import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";



const Edge = styled.div`
    width: 400px;
    height: 500px;
    
    display: grid;
    grid-template-rows: 6fr 1.5fr 2.5fr 2fr ;
    font-family: helvetica;
    margin-top: 2%;
    margin: .75rem 0.25rem;
    background-color: #F8F8FF;

    -webkit-box-shadow: 2px 2px 5px 1px rgba(102,70,81,1);
    -moz-box-shadow: 2px 2px 5px 1px rgba(102,70,81,1);
    box-shadow: 2px 2px 5px 1px rgba(102,70,81,1);
    

    @media screen and (max-width: 877px ) 
    and (orientation: portrait)
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
       grid-template-rows: 3.75fr 1fr 2.5fr 2fr ;
       width: 45%;
       height: 450px;
       
       
       
    }

    


    @media screen and (max-width: 700px )
    /*For smartphones, particularly iphones*/{
        width: 95%;
        margin-bottom: 50%;
        grid-template-rows: 5fr 1.2fr 2.5fr 2fr ;
        align-self: center;
        overflow: hidden;
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
        margin-bottom: 50%;
        width: 100%;
        grid-template-rows: 4.25fr 1.2fr 2.5fr 2fr ;
    }


`;

const ImageContainer = styled.div`
    max-height: fit;
    overflow: hidden;
    background-color: gray;
    grid-row-start: 1;
    grid-row-end: 2;

    @media screen and (max-width: 834px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
    max-height: fit-content;
    overflow: hidden;
    background-color: gray;
    grid-row-start: 1;
    grid-row-end: 2;
       
       
    }

    @media screen  and (max-width: 500px ) 
    /*For smartphones, particularly iphones*/{
        max-height: 100%;
        overflow: hidden;
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
       
    }
`;

const Heading = styled.h2`
    margin: 0;
    padding-top: 1rem;
    padding-left: 1rem;
    grid-row-start: 2;
    grid-row-end: 3;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
      
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
       
    }
`;

const ParagraphDiv = styled.div`

    grid-row: 3/4;
    

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
       
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
       
    }
`;

const Description = styled.p`
    margin: 0;
    padding: .5rem 1rem;
    display: flex;
    justify-content: center;
    font-size: .95rem;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
       
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    grid-row: 4/5;
    justify-content: flex-start;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        justify-content: space-evenly;
       flex-wrap: nowrap;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
       
    }
`;

const Button = styled.button`
    
    background: transparent;
    cursor: pointer;
    padding: .5rem 0;
    margin: .3rem 1rem;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
        cursor: pointer;
        background: transparent;
        
        justify-content: flex-start;
        padding: .15rem .1rem;
        margin-bottom: .5rem;
        margin-top: 0;
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
        
    }
`;

function ProjectCard(props) {
    return (
        
            <Edge>
                <ImageContainer  /* src="https://res.cloudinary.com/dmkct6wfu/image/upload/v1561521301/coliseum-4290893_1920_eqfagn.jpg" */>
                <Img fluid={props.image.childImageSharp.fluid} />
                </ImageContainer>
                <Heading>This is a heading</Heading>
                <ParagraphDiv>
                    <Description>
                        This is just some placeholding
                        text for now. This is where a short
                        description of the cards subject goes.
                        Just putting this all here to see how
                        the text looks.
                    </Description>
                </ParagraphDiv>
                <ButtonDiv>
                    <Button>
                        <FontAwesomeIcon 
                        icon={ faExternalLinkAlt } size="3x" />
                    </Button>
                    <Button>
                    <FontAwesomeIcon 
                    icon={ faGithub } size="3x" />
                    </Button>
                </ButtonDiv>
            </Edge>
        
    );
};

export default ProjectCard;