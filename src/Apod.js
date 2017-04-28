import 'whatwg-fetch';
import React, { Component } from 'react';
import styled from 'styled-components';
import DisplayMedia from './Components/DisplayMedia'
import SetWidth from './Components/SetWidth'

const Dimensions = styled.div`
  text-align: center;
  display: inline-block
`;

const Image = styled.img`
  width: 80px;
  height: auto;
`;

export default class Apod extends Component {
  constructor(){
    super();
    this.state = {
      apod: [],
      width: 800
    }
  }

  getMedia(){
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=zt1kgOSJu7vZEh979PbqJfJfE5ZqusYgRBT3OMcn'
    )
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      this.setState({apod: json})
    }.bind(this))
  }

  componentWillMount(){
    this.getMedia();
  }

  handleUpdateWidth(width){
    this.setState({width: width})
  }

  render(){
    return(
      <Dimensions>
        <h2><Image src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" /> Astronomy Picture of the Day</h2>
        <DisplayMedia apod={this.state.apod} width={this.state.width} />
        <SetWidth updateWidth={this.handleUpdateWidth.bind(this)} />
      </Dimensions>
    )
  }
}