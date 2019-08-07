import React, { Component } from 'react';
import ContactContainer from './ContactContainer.js';
import ProjectItem from '../components/ProjectItem.js';
import projects from '../Data/projects.js';
import WritingItem from '../components/WritingItem.js'
import articles from '../Data/articles.js';

class HomePage extends Component {


  createProjectItem = () => {
    return projects.map((obj) => (
      <div style={{ backgroundColor: "grey", margin: "0 auto", marginTop: "10px", width: "80%", borderRadius: "20px" }}>
        <ProjectItem key={obj.id} projectData={obj} />
      </div>
    ))
  }

  renderImage = () => {
    if(this.props.width >= 1100) {
      return (
        <div className="home-pic">
          <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" style={{ height: "600px", width: "400px" }} />
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
          <p>Web application developer with a professional background in finance and banking. I like to build powerful, tactile applications for everyday people. I usually make my apps using a React.js frontend served by a Ruby on Rails backend.</p>
          <a href="https://twitter.com/danmjung" target="_blank" style={{ textDecoration: "none", color: "#BFC0C0"}}>
            <i className="fab fa-twitter" style={{ fontSize:  "26px" }}></i>
          </a>
          <a href="https://medium.com/@danielmjung" target="_blank" style={{ textDecoration: "none", color: "#BFC0C0", marginLeft: "10px", marginRight: "10px"}}>
            <i className="fab fa-medium" style={{ fontSize:  "26px" }}></i>
          </a>
          <a href="https://github.com/danmj" target="_blank" style={{ textDecoration: "none", color: "#BFC0C0", marginRight: "10px"}}>
            <i className="fab fa-github" style={{ fontSize:  "26px" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/danielmjung/" target="_blank" style={{ textDecoration: "none", color: "#BFC0C0" }}>
            <i className="fab fa-linkedin-in" style={{ fontSize:  "26px" }}></i>
          </a>

          <div style={{ height: "15px" }}></div>

          <p>
          <a href="mailto:dmjung1993@gmail.com" target="_top" style={{ textDecoration: "none", color: "#BFC0C0" }}> <i className="fas fa-envelope emailicon" style={{ fontSize:  "36px" }}></i></a>
          </p>

        </div>

        {this.renderImage()}

        <div style={{ height: "50px" }}></div>
        <h1 style={{ color: "#e8f4ff", border: "3px solid #e8f4ff", margin: "0 auto", padding: "20px", width: "375px" }}>Things I've Made</h1>
        <div style={{ height: "15px" }}></div>
        <div style={{ backgroundColor: "rgb(60,60,60)", padding: "10px", borderRadius: "0px" }}>
          {this.createProjectItem()}
        </div>
      </div>
    )
  }

}

export default HomePage
