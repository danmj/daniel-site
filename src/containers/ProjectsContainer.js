import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem.js';
import projects from '../Data/projects.js';

class ProjectsContainer extends Component {

  createProjectItem = () => {
    return projects.map((obj) => (
      <div className="project-card">
        <ProjectItem key={obj.id} projectData={obj} />
      </div>
    ))
  }

  render() {
    return(
      <div className="link-div" >

        <div className="project-text">
          <h1 className="projects-header">Projects</h1>
          <div style={{ height: "20px" }}></div>
          <p className="projects-description">Projects that I've created and collaborated on. If the project's title is clickable, it will take you to a live demo. GitHub repositories can be found via the links below the project's description.</p>
        </div>

        <div className="cards-section">
          {this.createProjectItem()}
        </div>
      </div>
    )
  }

}

export default ProjectsContainer
