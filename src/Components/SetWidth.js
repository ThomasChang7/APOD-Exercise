import React, { Component } from 'react';

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
            <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

export default SetWidth;