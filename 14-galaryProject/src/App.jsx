import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  
  const getData = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30');
    setUserData(response.data)
    // console.log(response.data)
  }
  useEffect(function(){
    getData()
  },[])

  let printUserData = 'No User Available';

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){
      return <div>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} />
          </div>
          <h2 className='text-lg font-bold'>{elem.author}</h2>
        </a>
      </div>
    })
  }



  return (
    <div className='bg-black overflow-auto text-white h-screen p-4'>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      
    </div>
  )
}

export default App