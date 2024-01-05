import React, { useState } from 'react'
import Display from './components/display'
import './App.css'
import Button from './components/Button'


const App = () => {
  const [display, setdisplay ] = useState("2");
 
  const onClicked = (e)=>{
      if(e.target.innerText === 'c'){
        setdisplay("")
      }
      else if(e.target.innerText === '='){
          let ans =   eval(display)
          setdisplay(ans)
        }

      else{
        let newVal = display + e.target.innerText
        setdisplay(newVal)
      }


  }

  return (
   <>
    <div className='cover'>
    <Display displayVal = {display}/>
    <Button onClickMethod = {onClicked} />
    </div>
   </>
  )
}

export default App