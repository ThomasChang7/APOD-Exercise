import React, { Component } from 'react';
import Description from './Description';
import styled from 'styled-components';

class DisplayMedia extends Component {
  constructor(){
    super();
  }
  
  render(){
    let mediaType;
    if(this.props.apod.media_type === "video"){
      mediaType = <iframe width={this.props.width} height={parseInt(this.props.width) * 9/16} src={this.props.apod.url}></iframe>
    } else if ( this.props.width >= 1000 ){
      mediaType = <img src={this.props.apod.hdurl} width={this.props.width} />
    } else {
      mediaType = <img src={this.props.apod.url} width={this.props.width} />
    }
    return (
      <div>
        <h3>{this.props.apod.date}</h3>
        {mediaType}
        <Description apod={this.props.apod} />
      </div>
    )
  }
}

export default DisplayMedia;