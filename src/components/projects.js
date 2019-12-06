import React from "react";
import ProjectCard from "./projectcard";
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby';
import text from '../data/text';
//import { checkPropTypes } from "prop-types";

const ContainerSection = styled.section`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 10rem 1fr 5rem;
  background-color: #F8F2D2;
  
  @media screen and (min-width: 1599px) {
    grid-template-columns: 10% 80% 10%;
  }

  @media screen and (max-width: 1599px ) 
    /*add and portrait orientation*/
    /*For tablets/regular ipads*/{
      grid-template-columns: 1fr auto;
      grid-template-columns: 10% 80% 10%; 
      
       
  }



  @media screen and (max-width: 700px )
    /*For smartphones, particularly iphones*/{
      grid-template-columns: 1fr; 
        
    }

  @media screen and (max-width: 448px )
    /*For smartphones, particularly iphones*/{
      grid-template-rows: 3rem 1fr .5rem;
    }
  
    @media screen and (max-width: 350px )
    /*iphone SE and other small phones*/{
        
        
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
        grid-row: 1;
        writing-mode: horizontal-tb;
        background: none;
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
  `} render ={(data, props) => (
    <ContainerSection>
      <ProjectSectionHeader>
        Projects
      </ProjectSectionHeader>
      <ProjectFlexedMain>
        <ProjectCard 
          image={data.drumMachine} 
          name = {text.projects[0].name} 
          description = {text.projects[0].description}
          githubLink = {text.projects[0].GithubURL}
          projectLink = {text.projects[0].LiveProjectURL}
        />
        <ProjectCard 
          image={data.markdownEditor}
          name = {text.projects[1].name} 
          description = {text.projects[1].description}
          githubLink = {text.projects[1].GithubURL}
          projectLink = {text.projects[1].LiveProjectURL}
        />
        <ProjectCard 
          image={data.pomodoroTimer} 
          name = {text.projects[2].name} 
          description = {text.projects[2].description}
          githubLink = {text.projects[2].GithubURL}
          projectLink = {text.projects[2].LiveProjectURL}
        />
        <ProjectCard 
          image={data.randomQuoteGenerator}
          name = {text.projects[3].name} 
          description = {text.projects[3].description}
          githubLink = {text.projects[3].GithubURL}
          projectLink = {text.projects[3].LiveProjectURL} 
        />
        <ProjectCard 
          image={data.weatherViewer} 
          name = {text.projects[4].name} 
          description = {text.projects[4].description}
          githubLink = {text.projects[4].GithubURL}
          projectLink = {text.projects[4].LiveProjectURL}
        />
      </ProjectFlexedMain>
    </ContainerSection>
    )}
  />
)

export default Projects;



