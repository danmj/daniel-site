import React from 'react'

const ProjectItem = (props) => {


    return(
      <div className="project-item">
        <div className="project-image">
          <img src={props.projectData.image} style={{ marginTop: "10px", height: "90%", width: "90%" }}/>
        </div>
        <div className="project-text">
          <h1>{props.projectData.title}</h1>
          <p>{props.projectData.summary}</p>
          <span><a href={props.projectData.frontend_url} style={{ textDecoration: "none", color: "white" }}>Frontend</a> </span>
          |
          <span> <a href={props.projectData.backend_url} style={{ textDecoration: "none", color: "white" }}>Backend</a></span>
          <div style={{ height: "5px" }}></div>
        </div>
      </div>
    )

}

export default ProjectItem
