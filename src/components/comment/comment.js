import React from 'react';
import LikeButton from '../likeButton/likeButton.js';
import DeleteButton from '../deleteButton/deleteButton.js';
import UpdateButton from '../updateButton/updateButton.js';
import './comment.css';

export default function Comment(props){
  return (
    <div className="comment">
      <li key={props.index}>{props.comments.comment}</li>
      <LikeButton likeClick={()=> props.likeClick(props.index)} likes={props.comments.likes}/>
      <DeleteButton deleteClick={()=> props.deleteClick(props.index)} />
      <UpdateButton updateClick={(inputValue)=>props.updateClick(inputValue,props.index)}/>
    </div>
  );
}