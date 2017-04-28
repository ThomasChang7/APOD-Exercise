require('.dotenv').config()
import 'whatwg-fetch';
import React, { Component } from 'react';
import styled from 'styled-components';


const Throwaway = styled.p`

`;

export default class Apod extends Component {
  constructor(){
    super();
    this.state = {
      apod: [],
    }
  }

  getMedia(){
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_KEY
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

  render(){
    return(
      <div>
        <h2>Nasa's Astronomy Picture of the Day</h2>
        <DisplayMedia apod={this.state.apod} />
      </div>
    )
  }

}