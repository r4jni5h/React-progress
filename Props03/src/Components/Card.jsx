import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
        <div className="card">
            <img src="https://images.unsplash.com/photo-1641391503184-a2131018701b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="skull" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card