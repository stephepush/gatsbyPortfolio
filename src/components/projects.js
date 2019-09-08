import React from "react";
import ProjectCard from "./projectcard";
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby';

const ContainerSection = styled.section`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 10rem 1fr 5rem;
  background-color: #F3E5AB;
  
  @media screen and (min-width: 1599px) {
    grid-template-columns: 10% 80% 10%;
  }

  @media screen and (max-width: 1599px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
      grid-template-columns: 1fr auto;
       
      
       
  }
  @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
        
    }
  
    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
        margin-bottom: 50%;
        grid-template-rows: 4.25fr auto 2fr ;
        grid-template-columns: auto;
    }
`;

const ProjectSectionHeader = styled.h2`
    grid-row: 2/3;
    grid-column: 1/2;
    background-color: white;
    width: 1.60rem;
    height: 12rem;
    margin-right: 0;
    margin-left: 0;
    justify-self: end;
    text-align: center;
    writing-mode: vertical-rl;
    margin-bottom: 0;
    padding-left: .2em;

    @media screen and (max-width: 648px ){
        grid-row: 4/5;
        width: 100%;
        font-size: 1.55rem;
    }

    @media screen and (max-width: 448px ){
        grid-row: 4/5;
        width: 100%;
        font-size: 1.15rem;
        text-align: center;
    }
    @media screen and (max-width: 350px )
    /*iphone SE*/{
        text-align: center;
    }
`;

const ProjectFlexedMain = styled.main`
  grid-row: 2/3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  grid-column: 2/3;
  @media screen and (min-width: 1599px) {
    grid-column: 2/3;
  }

  @media screen and (max-width: 768px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
       
       
       
       
    }

    @media screen and (max-width: 800px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
       
       
       
       
    }

    @media screen and (max-width: 568px )
    /*For smartphones, particularly iphones*/{
        grid-column: 1;
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
      <ProjectSectionHeader>
        Projects
      </ProjectSectionHeader>
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



