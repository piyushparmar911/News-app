import React from 'react'
import spiner from './spiner.gif'

export default function Spinner() {
  return (
    <div>
      <div className='justify-content-center d-flex my-3' >
        <img src={spiner} alt="Loading"  style={{height: "150px", width: "150px" }}/>
      </div>
      
    </div>
  )
}
