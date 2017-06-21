import React from 'react';
import Comment from '../comment/comment.js';
import './commentContainer.css';

export default function CommentContainer(props){
  console.log(props.comments);

  const comments = props.comments.map((comment, key) => {
    return <Comment onClick={(index)=> props.onClick(index)} key={key} index={key} comments={comment}/>
  });
  return (
  <div className="commentContainer">
    <ul className="commentsUl">{comments}</ul>
  </div>
  );
}