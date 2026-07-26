import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white h-14 w-14 flex justify-center items-center rounded-full text-2xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolore. Sapiente ea minus accusamus autem.</p>
                <div className='flex justify-between'>
                    <button className='bg-purple-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-purple-600 text-white font-medium px-3 py-2 rounded-full'>&rarr;</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard