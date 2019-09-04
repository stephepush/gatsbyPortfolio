import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';


const Edge = styled.div`
    width: 400px;
    height: 500px;
    border: 3px solid gray;
    display: grid;
    grid-template-rows: 5fr 1.5fr 2.5fr 2fr ;
    font-family: helvetica;
    margin-top: 2%;
    margin: .75rem 0.25rem;
    background-color: #F8F8FF;
    

    @media screen and (max-width: 768px ) 
    and (orientation: portrait)
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
       width: 40%;
       height: 425px;
       
       
       
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        width: 100%;
        margin-bottom: 50%;
        grid-template-rows: 6fr 1.5fr 2.5fr 2fr ;
    }

    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
        margin-bottom: 50%;
        grid-template-rows: 6fr 1.5fr 2.5fr 2fr ;
    }
`;

const ImageContainer = styled.div`
    height: 100%;
    
    grid-row-start: 1;
    grid-row-end: 2;

    @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
       
       
       
    }

    @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        height: 100%;
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
    justify-content: center;

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

const Button = styled.button`
    border: 1px solid black;
    width: 7.5rem;
    padding: .5rem 0;
    margin: .5rem 1rem;

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
                    <Button>View Project</Button>
                    <Button>View on Github</Button>
                </ButtonDiv>
            </Edge>
        
    );
};

export default ProjectCard;