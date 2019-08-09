import React, { Component } from 'react'
import WritingItem from '../components/WritingItem.js'
import articles from '../Data/articles.js';

class WritingContainer extends Component {

  createWritingItem = () => {
    return articles.map((obj) => (
      <div className="writing-card">
        <WritingItem key={obj.id} articleData={obj} />
      </div>
    ))
  }

  render() {
    return(
      <div className="link-div">
        <div className="writings-text">
          <h1 className="writings-header">Writings</h1>
          <div style={{ height: "20px" }}></div>
          <p className="writings-description">I mostly write about fintech and application development. Occasionally I'll write on broader topics in economics or software engineering. All articles can be viewed on Medium.</p>
        </div>

        <div className="cards-section">
          {this.createWritingItem()}
        </div>
      </div>
    )
  }

}

export default WritingContainer
