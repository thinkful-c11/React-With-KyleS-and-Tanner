import React from 'react';
import AddButton from '../addButton/addButton.js';
import './input.css';

export default class Input extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <form onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="newComment">New Comment</label>
        <input ref={(input)=> this.input = input} id="newComment" type="text"></input>
        <AddButton name="Add" onSubmit={(e)=> this.props.onSubmit(this.input.value)}/>
      </form>
    );
  }
}