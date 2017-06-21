import React from 'react';
import Comment from '../comment/comment.js';
import './commentContainer.css';

export default function CommentContainer(props){
  const comments = props.comments.map((comment, key) => {
    return <Comment deleteClick={(index)=> props.deleteClick(index)} likeClick={(index)=> props.likeClick(index)} key={key} index={key} comments={comment}/>
  });
  return (
  <div className="commentContainer">
    <ul className="commentsUl">{comments}</ul>
  </div>
  );
}