import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import ContactContainer from './ContactContainer.js';
import ProjectsContainer from './ProjectsContainer.js';
import WritingContainer from './WritingContainer.js';

class PageBody extends Component {




  // renderPageBody = () => {
  //   if(this.props.clickedLink === "projects") {
  //     return <Route path="/projects" component={ProjectsContainer} />
  //   }
  //   else if(this.props.clickedLink === "writings") {
  //     return <Route path="/writings" component={WritingContainer} />
  //   }
  //   else if(this.props.clickedLink === "contact") {
  //     return <Route path="/contact" component={ContactContainer} />
  //   }
  //   else{
  //     return <Route path="/" component={HomePage} />
  //   }
  // }

  render() {
    return(
      <div className="page-body">
        <Router>

        </Router>
      </div>
    )
  }
}

export default PageBody
