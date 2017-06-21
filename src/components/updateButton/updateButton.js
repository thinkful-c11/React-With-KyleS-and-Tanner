import React from 'react';
import UpdateForm from '../updateForm/updateForm'
import './updateButton.css'

export default class UpdateButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      clicked: false
    }
  }
  setClicked(clicked){
    this.setState({
      clicked
    });
  }

  render(){
    if(!(this.state.clicked)){
      return <button type="button" onClick={()=>this.setClicked(true)}>Edit</button>
    }
    return (
      <UpdateForm updateClick={(inputValue)=>{
        this.setClicked(false);
        this.props.updateClick(inputValue);
        }}/>
    );
  }
}