import React, { Component } from 'react';
import ContactContainer from './ContactContainer.js';


class HomePage extends Component {

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

        </div>

        <div className="home-pic">
          <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" style={{ height: "600px", width: "400px" }} />
        </div>

      </div>
    )
  }

}

export default HomePage
