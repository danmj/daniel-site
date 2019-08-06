import React from 'react'

const WritingItem = (props) => {

  return(
    <div>
      <a href={props.articleData.article_url} style={{ textDecoration: "none", color: "white" }}>
      <img src={props.articleData.photo_url} style={{ height: '250px', width: '400px' }} />
      <p>{props.articleData.title}</p>
      </a>
    </div>
  )

}

export default WritingItem
