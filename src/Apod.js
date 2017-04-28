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


}