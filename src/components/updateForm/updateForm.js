import React from 'react';
import './updateForm.css';
import AddButton from '../addButton/addButton';

export default class updateForm extends React.Component{
  constructor(props){
    super(props); 
  }
  render(){
    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="updateForm">Edit Comment</label>
            <input type="text" id="updateForm" ref={input=>this.input = input}/>
            <AddButton name='Done Editing' onSubmit={()=>{
              this.props.updateClick(this.input.value)}}/>
        </form>
    );
  }
}