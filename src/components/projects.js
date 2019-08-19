import React from "react";
import ProjectCard from "./projectcard";
import { StaticQuery, graphql } from 'gatsby';


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
          fluid(maxWidth: 1000){
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
    <section class="container__section">
      <header class="header">
        <div class="header__gap"></div>
        <h1 class="section__header__h1">Cards</h1>
      </header>
      <main class="flex__section">
        <ProjectCard image={data.drumMachine} />
        <ProjectCard image={data.markdownEditor}/>
        <ProjectCard image={data.pomodoroTimer}/>
        <ProjectCard image={data.randomQuoteGenerator}/>
        <ProjectCard image={data.weatherViewer}/>
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </main>
    </section>
    )}
  />
)

export default Projects;



