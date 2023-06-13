import React, { Component } from 'react'
import image from "./image/loading-gif-1.gif"
export default class Sppiner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={image} alt='sppiner ' ></img>
      </div>
    )
  }
}
