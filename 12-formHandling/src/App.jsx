import React from 'react'

const App = () => {

  const clickHandler = (e) =>{
    e.preventDefault();
    console.log("FormSubmitted")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        clickHandler(e)
      }}>
        <input type="text" />
        <button >Click</button>
      </form>
    </div>
  )
}

export default App