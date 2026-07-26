import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Rajnish Yadav" age = {20} />
      <Card user="Purab Roy" age = {21} />
    </div>
  )
}

export default App