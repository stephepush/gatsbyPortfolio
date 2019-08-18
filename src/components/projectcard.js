import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";


const ProjectCard = (props) => {
    return (
      
      <div className="card__div--desktop card__div--mobile ">
        <div className="card__image__container">
          {/* <figure className="card__image"> */}
          <Img fluid={data.drumMachine.childImageSharp.fluid} />
          {/* </figure> */}
        </div>
        <div className="card__name__div">
          <h2 className="project__name__h2 project__name__h2--mobile project__name__h2--small">Random Quote Generator</h2>
        </div>
        <div className="card__blurb__div">
          <p className="card__description__paragraph card__description__paragraph--mobile card__description__paragraph--small">
              Where you put a short description of the project. See, you 
              have enough space to briefly talk about what 
              technologies you used to develop said project
          </p>
        </div>
        <div className="card__button__div">
          <button className="view__project__button">
            View Project
          </button>
          <button className="view__code__button">
            View Code
          </button>
        </div>
      </div>
    );
  };

export default ProjectCard;

const ProjectImages = () => {
  const data = useStaticQuery(graphql`
    fragment projectImage on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    query {
      drumMachine: file(relativePath: {eq: "drumMachine.png"}){
        ...projectImage
      }
    }
  `)
  return(
    <Img fluid={data.drumMachine.childImageSharp.fluid} />
  )
}