import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Adminpage = () => {
  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5001/auth/message').then((response) => {
      console.log(response.data)
      setDetails(response.data)
    })

  }, [])
  return (
    <div className='flex justify-center bg-white  pb-16 grid md:grid-cols-3 pt-16'>
      {details.map((data) => {
        return (
          <>
            <div className=' flex justify-center  '>
              <div className='bg-slate-300 p-2 shadow shadow-mg shadow-slate-800 rounded-lg w-full my-2 mx-2 mx-2 grid grid-cols-1 flex'>
                <label className='w-fit text-black font-bold capitalize' htmlFor="">{data.username}</label>
                <p className='bg-slate-100 h-20 text-sm overflow-y-scroll rounded-lg py-2 flex px-2'>{data.message}</p>
                <label className='w-fit mt-1 text-slate-700 text-sm' htmlFor="">{data.date}</label>

              </div>
            </div>
          </>
        )
      })}

    </div>
  )
}

export default Adminpage