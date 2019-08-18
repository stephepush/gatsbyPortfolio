import React from "react";
import ProjectCard from "./projectcard";
import { graphql } from 'gatsby';


const Projects = (props) => {
    return (
     <section class="container__section">
        <header class="header">
          <div class="header__gap"></div>
          <h1 class="section__header__h1">Cards</h1>
        </header>
        <main class="flex__section">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </main>
        
     </section>
    )
}

export default Projects;

export const componentQuery = graphql`
  query {
    drumMachine: file(relativePath: {eq: "drumMachine.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

