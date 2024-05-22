import React from 'react'
import Earth from './Earth.gif'

export default function Spinner() {
  return (
    <div>
      <div className='justify-content-center d-flex my-3' >
        <img src={Earth} alt="Loading"  style={{height: "100px", width: "100px" }}/>
      </div>
      
    </div>
  )
}
