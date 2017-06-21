import React from 'react';
import Input from '../input/input.js';
import './inputContainer.css';

export default function InputContainer(props){
  return (
    <div className="inputContainer">
      <Input onSubmit={(textValue)=> props.onSubmit(textValue)}/>
    </div>
  );
}