import React, { useState } from 'react'
import axios from 'axios'
import moment from 'moment'

const Homepage = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const data = { username: name, message: message,date:moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}
    const sendMessage = () => {
        axios.post('http://localhost:5001/auth/message', data).then((response) => {
            console.log(response)
        })
    }
    return (
        <div className=' '>

            <div className='lg:mt-16 mt-5'>
                

                {/* <div className='bg-gradient-to-r from-slate-200 to-slate-300 lg:w-4/12  mx-auto pt-5 px-5 rounded shadow shadow-slate-600 shadow-md'> */}
                <div className=' backdrop-filter backdrop-blur-xl bg-opacity-60 lg:w-4/12  mx-auto pt-5 px-5 rounded shadow shadow-slate-600 shadow-md'>
                    <div className='flex justify-center mb-5'>

                        <img className='shadow shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-800 z-40
rounded-full w-60
' src="IMG-20200813-WA0005-01.jpeg" style={{ backgroundImage: "cover" }} alt="" />
                    </div>
                    <span className='font-slim text-xl'>Gayathri Krishna</span>


                    <div className=''>
                        <span className='w-3/4 text-white sm:text-black md:text-black lg:text-black lg:w-6/12 text-sm'> Hi Friends, I know many of you have been trying to reach out to me but are unable to do so.
                            That's why now i'm available in this website.You can ask your questions by submitting the below given form and
                            i'm more than happy to connect with you.</span>
                    </div>


                    <div className="flex justify-center mt-8 ">
                        <input className='w-80 rounded-md py-1 bg-slate-200 shadow-inner shadow-slate-500 shadow-md px-2' placeholder='Name' type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <textarea className='mt-8 w-full rounded-md py-2 bg-slate-200 shadow-inner shadow-slate-500 shadow-md px-2' name="" id="" cols="30" placeholder='Write your Question here!' rows="10"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className='flex justify-end '>

                        <div className="w-4/12 flex justify-end ">
                            <button onClick={sendMessage} className='rounded-md mb-10 mt-2 bg-blue-400 hover:bg-blue-600 text-white px-3 py-1' type='submit'>Proceed</button>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Homepage  