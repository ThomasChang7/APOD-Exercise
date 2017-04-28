import React, { Component } from 'react';
import Description from './Description';

class Description extends Component {
  render(){
    return (
      <div>
        <h3>Title: {this.props.apod.title}</h3>
        <h4>{ this.props.apod.explanation }</h4>
        <h6>copyright: { this.props.apod.copyright }</h6>
      </div>
    )
  }
}

export default Description;