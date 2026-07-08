import React from 'react'
import { Link } from "react-router-dom";
function Thanku() {
    return (
        <div className='text-center mt-40 mb-30'>
            <h2 className='text-7xl text-white'>THANK YOU!!</h2>
            <p className='text-4xl text-white'>Your demo request has been submitted successfully.<br></br>Our team will contact you within 24 hours.</p>
            
            <Link to='/home'>
            <button className='bg-gray-500 w-40 h-10 rounded-full font-bold mt-10 hover:bg-black text-white transition '>
                Go Back to Home
            </button>
            </Link>
        </div>
    )
}

export default Thanku