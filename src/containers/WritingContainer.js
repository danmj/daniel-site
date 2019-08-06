import React, { Component } from 'react'
import WritingItem from '../components/WritingItem.js'
import articles from '../Data/articles.js';

class WritingContainer extends Component {

  state={
    name: ""
  }

  createWritingItem = () => {
    return articles.map((obj) => (
      <div style={{ marginTop: "50px" }}>
        <WritingItem key={obj.id} articleData={obj} />
      </div>
    ))
  }

  render() {
    return(
      <div className="link-div">
        <div className="writings-text" style={{ height: "30vh", color: "white"}}>
          <h1 className="writings-header">Writings</h1>
          <div style={{ height: "20px" }}></div>
          <p className="writings-description">I mostly write about fintech and application development. Occasionally I'll write on broader topics in economics or software engineering. All articles can be viewed on Medium.</p>
        </div>

        <div>
          {this.createWritingItem()}
        </div>

      </div>
    )
  }

}

export default WritingContainer
