import React from 'react'
import img from '../assets/images.jpeg'
function Error() {
  return (
    <div data-aos="zoom-in-down">
      <img src={img} alt="" width={500} className='ms-125' />
      <h2 className='text-4xl text-center text-white'>Error 404 Page not found</h2>
    </div>
  )
}

export default Error