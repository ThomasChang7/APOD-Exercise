import React, { Component } from 'react';
import styled from 'styled-components';

const AlignLeft = styled.div`
  text-align: left;
`;

class Description extends Component {

  render(){
    return (
      <AlignLeft>
        <h3>Title: {this.props.apod.title}</h3>
        <h4>{ this.props.apod.explanation }</h4>
        <h5>copyright: {this.props.apod.copyright}</h5>
      </AlignLeft>
    )
  }
}

export default Description;