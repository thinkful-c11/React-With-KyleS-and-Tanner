import React from 'react';
import './deleteButton.css';

export default function DeleteButton(props){
  return (
    <button onClick={()=> props.deleteClick()} type="submit">Delete</button>
  );
}