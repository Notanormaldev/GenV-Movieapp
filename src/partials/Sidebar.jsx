import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
function Sidebar() {
  return (
   
      <div className='w-[20%] h-full border-r-2 border-zinc-400 p-6 '>


       <h1 className='text-3xl text-white font-bold mb-2'>
        <i className="text-[#6556cd] ri-tv-fill mr-2"></i> GenV</h1>



       <nav className='flex flex-col text-zinc-400 text-[17px] gap-2'>

        <h1 className='text-white text-xl font-semibold mt-6 mb-3'>New Feeds</h1>

        <Link to='/trending' className='hover:bg-[#6556cd] hover:text-white rounded-lg p-4 duration-300 '><i className="ri-fire-fill"></i>  Trending</Link>
        <Link to='/popular' className='hover:bg-[#6556cd] hover:text-white rounded-lg p-4 duration-300'><i className="ri-bard-fill"></i>  Popular</Link>
        <Link to='/movie' className='hover:bg-[#6556cd] hover:text-white rounded-lg p-4 duration-300'><i className="ri-movie-2-fill"></i>  Movies</Link>
        <Link to='/tv' className='hover:bg-[#6556cd] hover:text-white rounded-lg p-4 duration-300'><i className="ri-tv-2-fill"></i>  Tv Shows</Link>
        <Link to='/people'   className='hover:bg-[#6556cd] hover:text-white rounded-lg p-4 duration-300'><i className="ri-team-fill"></i>  People</Link>
       
        <hr  className='text-zinc-400 h-[1px]'/>
        

        <h1 className='text-white text-xl font-semibold mt-4 mb-2'>Website Information</h1>

        <Link to={'/about'} className='hover:bg-[#6556cd] hover:text-white rounded-lg p-4 duration-300 '><i className="ri-information-fill"></i>  About GenV</Link>
        <Link to={'/contactus'} className='hover:bg-[#6556cd] hover:text-white rounded-lg p-4 duration-300'><i className="ri-phone-fill"></i>  Contact Us</Link>

       </nav>











      </div>
   
  )
}

export default Sidebar
