import React from 'react'
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      <div className='p-6'>
        <h3 className='mb-7 text-6xl font-bold'>Prospective <br /><span className='text-gray-600'>customer</span><br />segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum saepe explicabo dolore neque nihil. Voluptatibus praesentium obcaecati error ipsum accusantium!</p>
      </div>
      <div>
        <ArrowUpRight className="w-25 h-25"/>
      </div>
    </div>
  )
}

export default LeftContent