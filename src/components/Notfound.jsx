import React from 'react'
import Notfound from '/404.gif'

function Loader() {
  return (
    <div className='w-full h-screen bg-black'>
      <img className='w-full h-full object-cover'  src={Notfound} alt='' />
    </div>
  )
}

export default Loader
