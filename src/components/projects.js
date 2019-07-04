import React from "react";
import ProjectCard from "./projectcard";

const Projects = () => {
    return (
     <section class="container__section">
        <header class="header">
          <div class="header__gap"></div>
          <h1 class="section__header__h1">Cards</h1>
        </header>
        <section class="flex__section">
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
        </section>
        
     </section>
    )
  }

export default Projects;