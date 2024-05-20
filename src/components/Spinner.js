import React, { Component } from 'react'
import Earth from './Earth.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='justify-content-center d-flex my-3' >
        <img src={Earth} alt="Loading"  style={{height: "100px", width: "100px" }}/>
      </div>
    )
  }
}
