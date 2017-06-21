import React from 'react';
import './addButton.css';

export default function AddButton(props){
  return (
    <button onClick={()=> props.onSubmit()} type="button">{props.name}</button>
  );
}