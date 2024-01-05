import React from 'react'

const Display = ({displayVal}) => {
  return (
    <div className='display-container'>
        <input type="text" placeholder='' value={displayVal} readOnly />
    </div>
  )
}

export default Display