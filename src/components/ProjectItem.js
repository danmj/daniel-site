import React from 'react';

const ProjectItem = (props) => {


    return(
      <div className="project-item">
        <div className="project-image">
          <img src={props.projectData.image} alt="project thumb" style={{ marginTop: "10px", height: "90%", width: "90%" }}/>
        </div>
        <div className="project-textarea">
          <h1 className="project-title-text">{props.projectData.title}</h1>
          <div className="project-summary-div"><p>{props.projectData.summary}</p></div>
          <span><a href={props.projectData.frontend_url} target="_blank" rel="noopener noreferrer" style={{ color: "#dedede" }}>Frontend</a> </span>
          |
          <span> <a href={props.projectData.backend_url} target="_blank" rel="noopener noreferrer" style={{ color: "#dedede" }}>Backend</a></span>
        </div>
      </div>
    )

}

export default ProjectItem
