import React from 'react';
import LikeButton from '../likeButton/likeButton.js';
import './comment.css';

export default function Comment(props){
  return (
    <div className="comment">
      <li key={props.index}>{props.comments.comment}</li>
      <LikeButton onClick={()=> props.onClick(props.index)} likes={props.comments.likes}/>
    </div>
  );
}