import React from "react";
import ProjectCard from "./projectcard";
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby';

const ContainerSection = styled.section`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  
  background-color: #F3E5AB;
  
  @media screen and (min-width: 1599px) {
    grid-template-columns: 2fr 10fr 2fr;
  }

  @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
      grid-template-rows: 4rem 1fr 2.5rem;
       
      
       
  }
  @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }
  
`;

const ProjectHeader = styled.header`
  grid-row: 1/2;
`;

const ProjectFlexedMain = styled.main`
  grid-row: 2/3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (min-width: 1599px) {
    grid-column: 2/3;
  }

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


const Projects = () => (
  <StaticQuery query={graphql`
    {
      pomodoroTimer: file(relativePath: {eq: "pomodoroTimer.png"}){
        childImageSharp {
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
      drumMachine: file(relativePath: {eq: "drumMachine.png"}){
        childImageSharp {
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownEditor: file(relativePath: {eq: "markdownEditor.png"}){
        childImageSharp {
          fluid(maxWidth: 1000, fit: COVER){
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      randomQuoteGenerator: file(relativePath: {eq: "randomQuoteGenerator.png"}){
        childImageSharp {
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
      weatherViewer: file(relativePath: {eq: "weatherViewer.png"}){
        childImageSharp {
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render ={(data) => (
    <ContainerSection>
      <ProjectHeader>
        <div className="header__gap"></div>
        <h1 className="section__header__h1">Cards</h1>
      </ProjectHeader>
      <ProjectFlexedMain>
        <ProjectCard image={data.drumMachine} />
        <ProjectCard image={data.markdownEditor}/>
        <ProjectCard image={data.pomodoroTimer}/>
        <ProjectCard image={data.randomQuoteGenerator}/>
        <ProjectCard image={data.weatherViewer}/>
        
      </ProjectFlexedMain>
    </ContainerSection>
    )}
  />
)

export default Projects;



