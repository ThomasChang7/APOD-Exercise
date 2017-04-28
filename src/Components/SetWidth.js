import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.input`
  background: #0074D9;
  color: #FFFFFF;
  border-radius: 3px;
  border: 2px solid #DDDDDD;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;



class SetWidth extends Component {
  constructor(){
    super();
    this.state = {
      newWidth: ""
    }
  }

  handleSubmit(event){
    this.setState({
      newWidth: this.refs.width.value
    }, function(){
      this.props.updateWidth(this.state.newWidth)
    })
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Set Width:
            <input type="text" ref="width" />
          </label>
            <Button type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

export default SetWidth;