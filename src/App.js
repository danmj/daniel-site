import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar.js';
import ContactContainer from './containers/ContactContainer.js';
import ProjectsContainer from './containers/ProjectsContainer.js';
import WritingContainer from './containers/WritingContainer.js';
import HomePage from './containers/HomePage.js';
import ScrollToTop from './components/ScrollToTop.js';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
      scrolled: "false",
      width: 0,
      height: 0 ,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }


  handleScroll = (event) => {
    this.setState({ scrollY: window.scrollY }, () => this.changeScrolled())
  }

  changeScrolled = () => {
    if(window.scrollY > 30) {
      this.setState({ scrolled: "true" })
    }
    else {
      this.setState({ scrolled: "false" })
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <NavBar scrollY={this.state.scrollY} scrolled={this.state.scrolled}/>

          <ScrollToTop>
          <Route exact
            path='/'
            component={() => <HomePage width={this.state.width} />}
          />

          <Route exact
            path='/projects'
            component={() => <ProjectsContainer width={this.state.width} />}
          />

          <Route exact
            path='/writings'
            component={() => <WritingContainer width={this.state.width} />}
          />

          <Route exact path="/contact" component={ContactContainer} />

          </ScrollToTop>
        </div>
      </Router>
    );
  }
}

export default App;
