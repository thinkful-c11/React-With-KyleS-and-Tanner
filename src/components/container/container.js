import React from 'react';
import CommentContainer from '../commentContainer/commentContainer.js';
import InputContainer from '../inputContainer/inputContainer.js';
import './container.css';
export default class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: []
    }
  }

  setComment(newComment){
    const comments = [...this.state.comments, {comment: newComment, likes: 0}];
    this.setState({
      comments
    })
  }

  setLikes(_index){
    // const comments = this.state.comments.map((comment, index) => {
    //   if(index === _index){
    //     ++comment.likes;
    //   }
    //   return comment;
    // })
  const likes = this.state.comments[_index].likes + 1;
    this.state.comments[_index].likes = likes
    this.setState({
      comments: this.state.comments
    })
  }

  deleteComment(_index){
    const comments = this.state.comments.filter((comment, index) => {
      if(index !== _index){
        return comment;
      }
    })
    this.setState({
      comments
    })
  }

  render() {
    return (
      <div className="container">
        <CommentContainer deleteClick={(index)=> this.deleteComment(index)} likeClick={(index)=> this.setLikes(index)} comments={this.state.comments}/>
        <InputContainer onSubmit={(textValue)=> this.setComment(textValue)}/>
      </div>
    )
  };
}