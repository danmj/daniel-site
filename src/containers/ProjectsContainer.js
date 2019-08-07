import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem.js';
import projects from '../Data/projects.js';

class ProjectsContainer extends Component {

  createProjectItem = () => {
    return projects.map((obj) => (
      <div style={{ backgroundColor: "rgb(60,60,60)", margin: "0 auto", marginTop: "50px", width: "80%" }}>
        <ProjectItem key={obj.id} projectData={obj} />
      </div>
    ))
  }

  renderWidthSpace = () => {
    if(this.props.width >= 699) {
      return <div style={{ height: "30px" }}></div>
    }
    else if(this.props.width <= 698 && this.props.width >= 500 ) {
      return <div style={{ height: "60px" }}></div>
    }
    else if (this.props.width <= 499 && this.props.width >= 355){
      return <div style={{ height: "90px" }}></div>
    }
    else {
      return <div style={{ height: "150px" }}></div>
    }
  }

  render() {

    return(
      <div className="link-div">
        <div className="project-text" style={{ height: "30vh", color: "white"}}>
          <h1 className="projects-header">Projects</h1>
          <div style={{ height: "20px" }}></div>
          <p className="projects-description">Projects that I've created and collaborated on. If the project's title is clickable, it will take you to a live demo. Repositories can be viewed on GitHub using the links at the bottom of each project.</p>
        </div>
        {this.renderWidthSpace()}
        {this.createProjectItem()}
      </div>
    )




  }

}

export default ProjectsContainer
