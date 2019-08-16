import React from "react";
import ProjectCard from "./projectcard";
import { StaticQuery, graphql } from 'gatsby';

const Projects = () => {
    return (
     <section class="container__section">
        <header class="header">
          <div class="header__gap"></div>
          <h1 class="section__header__h1">Cards</h1>
        </header>
        <section class="flex__section">
          <ProjectCard image={data.drumMachine.fluidProjectImages} />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
        
     </section>
    )
}

export default Projects;

export const fluidProjectImages = graphql`
	fragment fluidProjectImages on ImageSharp {
    edges {
      node {
        fluid(cropFocus: ATTENTION, fit: CONTAIN) {
          aspectRatio
          base64
          originalImg
          originalName
          sizes
        }
        id
      }
    }
  }
`

export const query = graphql`
	query{
		drumMachine: file(relativePath: {eq: "src/projectImages/drumMachine.png"}) {
    	...fluidProjectImages
 		}
		markdownEditor: file(relativePath: {eq: "src/projectImages/markdownEditor.png"}) {
			...fluidProjectImages
		}
		pomodoroTimer: file(relativePath: {eq: "src/projectImages/pomodoroTimer.png"}) {
			...fluidProjectImages
		}
		randomQuoteGenerator: file(relativePath: {eq: "src/projectImages/randomQuoteGenerator.png"}) {
			...fluidProjectImages		
		}
		WeatherViewer: file(relativePath: {eq: "src/projectImages/WeatherViewer.jpg"}) {
			...fluidProjectImages		
		}
  }
  `