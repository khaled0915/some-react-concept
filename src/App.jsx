import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  
  // event handler 

  function handler (){
    alert('clicked')
  }

  const handler2 = () => {
    alert('button 2 clicked')
  }


  //  using param
  const addTo = (num) => {
    alert(num+5)
  }
  return (

    <>
      
      <h3> React core concepts 2 </h3>

      <Friends></Friends>

      <User></User>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handler}> click </button>
      <button onClick={handler2}> clicked </button>
      <button onClick={()=> alert('third btn click') }> clicked </button>
      
      {/* parameter used  */}
      <button onClick={ () => addTo(3) }> add </button>
       
      
      
    </>
  )
}

export default App
