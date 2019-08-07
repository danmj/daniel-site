import React, { Component } from 'react'
import WritingItem from '../components/WritingItem.js'
import articles from '../Data/articles.js';

class WritingContainer extends Component {

  createWritingItem = () => {
    return articles.map((obj) => (
      <div style={{ marginTop: "50px" }}>
        <WritingItem key={obj.id} articleData={obj} />
      </div>
    ))
  }

  renderWidthSpace = () => {
    if(this.props.width >= 699) {
      return <div style={{ height: "30px" }}></div>
    }
    else if(this.props.width <= 698 && this.props.width >= 500 ) {
      return <div style={{ height: "60px" }}></div>
    }
    else if (this.props.width <= 499 && this.props.width >= 355){
      return <div style={{ height: "100px" }}></div>
    }
    else {
      return <div style={{ height: "150px" }}></div>
    }
  }

  render() {
    return(
      <div className="link-div">
        <div className="writings-text" style={{ height: "30vh", color: "white"}}>
          <h1 className="writings-header">Writings</h1>
          <div style={{ height: "20px" }}></div>
          <p className="writings-description">I mostly write about fintech and application development. Occasionally I'll write on broader topics in economics or software engineering. All articles can be viewed on Medium.</p>
        </div>
        {this.renderWidthSpace()}
        <div>
          {this.createWritingItem()}
        </div>

      </div>
    )
  }

}

export default WritingContainer
