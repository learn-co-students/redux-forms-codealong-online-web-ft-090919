import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTodo from '../../actions/addTodo';

class CreateTodo extends Component {
  state = {
    text: ''
  }
  handleChange = event => {
      this.setState({
          text: event.target.value
      });
  }

  handleSubmit = event => {
      event.preventDefault();
    this.props.addTodo(this.state);
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>add todo</label>
            <input type="text" name="todo" onChange={this.handleChange} value={this.state.text}/>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addTodo })(CreateTodo);
