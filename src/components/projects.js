import React from "react";
import ProjectCard from "./projectcard";
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby';

const ContainerSection = styled.section`
  display: grid;
  grid-template-rows: 9rem auto;
  background-color: #F3E5AB;
  
  
`;

const ProjectHeader = styled.header`
  display: grid;
  grid-template-rows: 5rem 4rem;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const ProjectFlexedMain = styled.main`
  grid-row-start: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen 
  and (min-width: 1599px) {
    width: 66%;
    margin: 0 auto;
  }
`;


const Projects = () => (
  <StaticQuery query={graphql`
    {
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
      pomodoroTimer: file(relativePath: {eq: "pomodoroTimer.png"}){
        childImageSharp {
          fluid(maxWidth: 1000){
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
      weatherViewer: file(relativePath: {eq: "weatherViewer.jpg"}){
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
        <div class="header__gap"></div>
        <h1 class="section__header__h1">Cards</h1>
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



