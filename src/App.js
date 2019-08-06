import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar.js';
import PageBody from './containers/PageBody.js';
import ContactContainer from './containers/ContactContainer.js';
import ProjectsContainer from './containers/ProjectsContainer.js';
import WritingContainer from './containers/WritingContainer.js';
import HomePage from './containers/HomePage.js';
import Footer from './components/Footer.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
      scrolled: "false",
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll = (event) => {
    this.setState({ scrollY: window.scrollY }, () => this.changeScrolled())
  }

  changeScrolled = () => {
    if(window.scrollY > 30) {
      this.setState({ scrolled: "true" }, () => console.log(this.state.scrolled))
    }
    else {
      this.setState({ scrolled: "false" })
    }
  }



  render() {
    return (
      <Router>
        <div className="App">
          <NavBar scrollY={this.state.scrollY} scrolled={this.state.scrolled}/>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectsContainer} />
          <Route exact path="/writings" component={WritingContainer} />
          <Route exact path="/contact" component={ContactContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
