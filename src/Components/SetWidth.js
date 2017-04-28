import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.input`
  background: #FFFFFF;
  color: #001f3f;
  border-radius: 3px;
  border: 2px solid #DDDDDD;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

// Using this to style my input broke the functionality of the Set Width Field
// const Input = styled.input`
//   font-size: 1.25em;
//   padding: 0.75em;
//   margin: 0.5em;
//   color: #001f3f;
//   border-radius: 3px;
//   border: solid 1px #001f3f;
//   background: #FFFFFF;
// `

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