import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Adminlog = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const submitHandler = () => {
        if (username === 'gayathri99' && password === 'gayathriMunna') {
            toast.success(`Successfully Logged in`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false
            });
            setTimeout(() => {
                navigate('/adminHome')
            }, 1100);

        } else {
            toast.error(`Check username or password`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false
            });
          
        }

    }

    return (
        <div>
              <ToastContainer />
            <div className="h-60"></div>
            <div className='mx-auto w-3/4'>
                <div className='mx-auto px-5 py-3'>
                    <input type="text" className='rounded bg-black border text-white mb-3 px-2' placeholder='Enter Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="password" className='rounded bg-black border mx-3 text-white px-2' placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={submitHandler} className='border text-white px-3 rounded'>Login</button>

            </div>
        </div>
    )
}

export default Adminlog