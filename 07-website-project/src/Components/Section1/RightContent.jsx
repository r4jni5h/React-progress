import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full p-6 w-2/3 flex gap-10'>
      {props.users.map(function(elem,idx){
        return <RightCard img={elem.img} tag={elem.tag} key={idx} id={idx} />
      })}

    </div>
  )
}

export default RightContent