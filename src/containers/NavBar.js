import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {



  render() {
    return(
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark" id={this.props.scrolled}>
        <div className="nav-btn-div">
          <NavLink to='/' exact style={{ textDecoration: "none" }}>
            <p className="navbar-brand" id="name" style={{color: "white", textDecoration: "none"}}>DANIEL JUNG</p>
          </NavLink>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="nav nav-justified">

            <li className="nav-item">
              <NavLink to='/projects' exact style={{ textDecoration: "none" }}>
                <p className="nav-btn" id="projects" data-toggle="collapse" data-target=".navbar-collapse.show">Projects</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/writings' exact style={{ textDecoration: "none" }}>
                <p className="nav-btn" id="writings" data-toggle="collapse" data-target=".navbar-collapse.show">Writings</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' exact style={{ textDecoration: "none" }}>
                <p className="nav-btn" id="contact" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</p>
              </NavLink>
            </li>

          </ul>

        </div>


      </nav>
    )
  }
}

export default NavBar
