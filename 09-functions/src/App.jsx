import React from 'react'

const App = () => {
  
  return (
    <div>
      <button onClick={ ()=>{
        document.body.classList.add("bg-c");
        setTimeout(()=>{
          document.body.classList.remove("bg-c");
        }, 3000)
      }}>Click Me!</button>
    </div>
  )
}

export default App