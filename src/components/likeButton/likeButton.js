import React from 'react';
import './likeButton.css';

export default function LikeButton(props){
  return (
    <section>
      <p>{props.likes}</p>
      <button onClick={()=> props.onClick()} type="button">Like</button>
    </section>
  );
}