import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function increase(){
    setNum(num+1)
  }
  function decrease(){
    setNum(num-1)
  }
  function setZero(){
    setNum(0)
  }
  function plusFive(){
    setNum(num+5)
  }
  function minuFive(){
    setNum(num-5)
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase </button>
      <button onClick={decrease}>Decrease </button>
      <button onClick={setZero}>Set to Zero </button>
      <button onClick={plusFive}>Plus 5 </button>
      <button onClick={minuFive}>Minus 5 </button>
    </div>
  )
}

export default App