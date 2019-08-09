import React from 'react'

const WritingItem = (props) => {

  return(
    <div>
      <a href={props.articleData.article_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
      <img src={props.articleData.photo_url} alt="article thumbnail" style={{ height: '50%', width: '50%' }} />
      <p>{props.articleData.title}</p>
      </a>
    </div>
  )
}

export default WritingItem
