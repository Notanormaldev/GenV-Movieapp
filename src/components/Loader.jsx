import React from 'react'
import loader from '/loader.gif'

function Loader() {
  return (
    <div className='w-full h-screen bg-black'>
      <img className='w-full h-full object-cover'  src={loader} alt='' />
    </div>
  )
}

export default Loader
