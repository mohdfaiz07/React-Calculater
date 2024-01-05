import React from 'react'

const Button = ({onClickMethod}) => {
    let numbers =["c", "1", "2", "+", "3", "4","-", "5", "6", "*", "7", "8", "/", "=", "9", "0","."] 

  return (
    <div className='btn-container'>
        {numbers.map( (num)=> <button  onClick={onClickMethod}  >{num}</button> )}

    </div>
  )
}

export default Button