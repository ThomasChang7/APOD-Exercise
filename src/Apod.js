import 'whatwg-fetch';
import React, { Component } from 'react';
import styled from 'styled-components';
import DisplayMedia from './Components/DisplayMedia'
import SetWidth from './Components/SetWidth'

const Dimensions = styled.div`
  text-align: center;
  min-width: 900px;
  display: inline-block
`;

export default class Apod extends Component {
  constructor(){
    super();
    this.state = {
      apod: [],
      width: 1001
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
        <h2>Nasa's Astronomy Picture of the Day</h2>
        <DisplayMedia apod={this.state.apod} width={this.state.width} />
        <SetWidth updateWidth={this.handleUpdateWidth.bind(this)}/>
      </Dimensions>
    )
  }
}