import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value 
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <p>
            <label>add to-do</label>
            <input 
            type="text"
            value={this.state.text}
            onChange={ this.handleChange }
             />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch({
        type: 'ADD_TODO',
        payload: FormData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
