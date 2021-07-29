import React, { Component } from 'react'
import {connect} from 'react-redux'


class CreateTodo extends Component {
  
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }
  
  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  
  
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} value={this.state.text} type='text'/>
          </p>
          <input type='submit' onClick={event => this.handleSubmit(event)} />
        </form>
        {this.state.text}
      </div>
    )
  }
}





export default connect()(CreateTodo);
