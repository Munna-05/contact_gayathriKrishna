import React from 'react'
import Homepage from '../Components/Homepage'
import Navbar from '../Components/Navbar'
const Home = () => {
    return (
        <div className=''>

            <video className='w-screen h-screen absolute' style={{zIndex:'-1'}} autoPlay={true} loop muted src="Pexels Videos 1943483.mp4" type='video'>
                
            </video>
            
            <Navbar />
            
            <Homepage />

        </div>
    )
}

export default Home