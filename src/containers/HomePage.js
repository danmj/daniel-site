import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem.js';
import projects from '../Data/projects.js';

class HomePage extends Component {


  createProjectItem = () => {
    return projects.map((obj) => (
      <div style={{ margin: "0 auto", marginBottom: "50px", width: "80%", borderRadius: "20px" }}>
        <ProjectItem key={obj.id} projectData={obj} />
      </div>
    ))
  }

  renderImage = () => {
    if(this.props.width >= 1100) {
      return (
        <div className="home-pic">
          <img src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="homepage" style={{ height: "600px", width: "400px" }} />
        </div>
      )
    }
    else {
      return <div style={{ height: "380px" }}></div>
    }
  }


  render() {
    return(
      <div className="link-div home-div" style={{height: "100px"}}>
        <div className="home-info">
          <h1 className="home-name">DANIEL JUNG</h1>
          <p style={{ height: "5px" }}></p>
          <h5>Full-stack developer based in New York City</h5>
          <p>Web application developer with a professional background in finance and banking. I like to build powerful, tactile applications for everyday people.</p>
          {/** <a href="https://twitter.com/danmjung" target="_blank" style={{ textDecoration: "none", color: "#BFC0C0"}}>
            <i className="fab fa-twitter" style={{ fontSize:  "24px" }}></i>
          </a> **/}
          <a href="https://github.com/danmj" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#BFC0C0" }}>
            <i className="fab fa-github" style={{ fontSize:  "24px" }}></i>
          </a>
          <a href="https://medium.com/@danielmjung" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#BFC0C0", marginLeft: "10px", marginRight: "10px" }}>
            <i className="fab fa-medium" style={{ fontSize:  "24px" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/danielmjung/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#BFC0C0" }}>
            <i className="fab fa-linkedin-in" style={{ fontSize:  "24px" }}></i>
          </a>


          <div style={{ height: "15px" }}></div>

          <p>
          <a href="mailto:danmjung@gmail.com" target="_top" style={{ textDecoration: "none", color: "#BFC0C0" }}> <i className="fas fa-envelope emailicon" style={{ fontSize:  "32px" }}></i></a>
          </p>

        </div>

        {this.renderImage()}

        <div style={{ height: "50px" }}></div>
        <h2 className="things-made">Things I've Made</h2>
        <div style={{ height: "15px" }}></div>
        <div style={{ padding: "10px", borderRadius: "0px" }}>
          {this.createProjectItem()}
        </div>
      </div>
    )
  }

}

export default HomePage
