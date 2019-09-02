import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';


const Edge = styled.div`
    width: 400px;
    height: 500px;
    border: 3px solid gray;
    display: grid;
    grid-template-rows: 6fr 1fr 3fr 2fr 3%;
    font-family: helvetica;
    margin-top: 2%;
    margin: .75rem 0.25rem;
    background-color: #F8F8FF;
`;

const ImageContainer = styled.div`
    max-width: 100%;
    
    grid-row-start: 1;
    grid-row-end: 2;
`;

const Heading = styled.h2`
    margin: 0;
    padding-top: 1rem;
    padding-left: 1rem;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const ParagraphDiv = styled.div`

    grid-row-start: 3;
    grid-row-end: 4;
`;

const Description = styled.p`
    margin: 0;
    padding: .5rem 1rem;
    display: flex;
    justify-content: center;
    font-size: .95rem;
`;

const ButtonDiv = styled.div`
    display: flex;
    grid-row-start: 4;
    grid-row-end: 5;
    justify-content: center;
`;

const Button = styled.button`
    border: 1px solid black;
    width: 7rem;
    padding: .5rem 0;
    margin: .5rem 1rem;
`;

function ProjectCard(props) {
    return (
        <div>
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
        </div>
    );
};

export default ProjectCard;