import React, { Component } from 'react';

class ContactContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      linkedIn: false,
      gitHub: false,
      twitter: false,
      medium: false,
    }
  }


  linkedInEnter = () => {
    this.setState({
      linkedIn: true,
      gitHub: false,
      twitter: false,
      medium: false,

    })
  }
  linkedInLeave = () => {
    this.setState({ linkedIn: false })
  }

  gitHubEnter = () => {
    this.setState({
      gitHub: true,
      linkedIn: false,
      medium: false,
      twitter: false,
    })
  }
  gitHubLeave = () => {
    this.setState({ gitHub: false })
  }

  twitterEnter = () => {
    this.setState({
      twitter: true,
      linkedIn: false,
      medium: false,
      gitHub: false,
    })
  }
  twitterLeave = () => {
    this.setState({ twitter: false })
  }

  mediumEnter = () => {
    this.setState({
      medium: true,
      gitHub: false,
      twitter: false,
      linkedIn: false,
    })
  }
  mediumLeave = () => {
    this.setState({ medium: false })
  }

  gitHubText = () => {
    if(this.state.gitHub === true) {
      return <span class="at-span">danmj</span>
    }
    else {
      return null
    }
  }

  twitterText = () => {
    if(this.state.twitter === true) {
      return <span class="at-span">danmjung</span>
    }
    else {
      return null
    }
  }

  linkedInText = () => {
    if(this.state.linkedIn === true) {
      return <span class="at-span">danielmjung</span>
    }
    else {
      return null
    }
  }

  mediumText = () => {
    if(this.state.medium === true) {
      return <span class="at-span">danielmjung</span>
    }
    else {
      return null
    }
  }

  exitClickHandler = () => {
    window.history.back();
  }

  render() {
    return(
        <div className="contact-div">

          <div className="social-div">
            <div className="social-icon" style={{ fontSize: "1.5em", color: "#BFC0C0"}} onMouseLeave={() => this.gitHubLeave()}>
              <a href="https://github.com/danmj" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#BFC0C0" }}>
                <i className="fab fa-github" onMouseEnter={() => this.gitHubEnter()}></i>
              </a>
              {this.gitHubText()}
            </div>

            {/** <div className="social-icon" style={{ fontSize: "1.5em", color: "#BFC0C0"}} onMouseLeave={() => this.twitterLeave()}>
              <a href="https://twitter.com/danmjung" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#BFC0C0" }}>
                <i className="fab fa-twitter" onMouseEnter={() => this.twitterEnter()}></i>
              </a>
              {this.twitterText()}
            </div> **/}

            <div className="social-icon" style={{ fontSize: "1.5em", color: "#BFC0C0"}} onMouseLeave={() => this.linkedInLeave()}>
              <a href="https://www.linkedin.com/in/danielmjung/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#BFC0C0" }}>
                <i className="fab fa-linkedin-in" onMouseEnter={() => this.linkedInEnter()}></i>
                {this.linkedInText()}
              </a>
            </div>

            <div className="social-icon" style={{ fontSize: "1.5em", color: "#BFC0C0" }} onMouseLeave={() => this.mediumLeave()}>
                <a href="https://medium.com/@danielmjung" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#BFC0C0" }}>
                  <i className="fab fa-medium" onMouseEnter={() => this.mediumEnter()}></i>
                  {this.mediumText()}
                </a>
            </div>
          </div>

          <div className="contact-form-div">

            <h2>Daniel Jung</h2>
            <a href="mailto:danmjung@gmail.com" target="_top" style={{ textDecoration: "none", color: "white" }}><i className="fas fa-envelope emailicon"></i></a><span>&nbsp; danmjung@gmail.com</span>
            <br />
            <i class="fas fa-mobile"></i><span>&nbsp;&nbsp; +1 917 250 2296</span>

          </div>

        </div>
    )
  }

}

export default ContactContainer
