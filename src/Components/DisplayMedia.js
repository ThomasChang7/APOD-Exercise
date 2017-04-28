import React, { Component } from 'react';

class DisplayMedia extends Component {
  constructor(){
    super();
  }

  render(){
    let mediaType;
    if( this.props.apod.media_type === "video" ){
      mediaType = <iframe  width={ this.props.width } src={ this.props.apod.url} ></iframe>
    } else if ( this.props.width >= 1000 ){
      mediaType = <image src={ this.props.apod.hdurl } width={ this.props.width } />
    } else {
      mediaType = <image src={ this.props.apod.url } width={ this.props.width } />
    }
    return(
      <div>
        <h3>{this.props.apod.date}</h3>
        {mediaType}
      </div>
    )
  }
}

export default DisplayMedia;