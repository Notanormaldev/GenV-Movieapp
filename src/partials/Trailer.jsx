import React from 'react'
import ReactPlayer  from 'react-player'

import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../components/Notfound'
function Trailer() {

   const {pathname} = useLocation();
   const category = pathname.includes("movie") ? "movie" :"tv";
   const ytvideo = useSelector((state)=>state[category].info.videos);
   const navigate =useNavigate();

//  console.log(ytvideo.key);


  return (
    <div className='bg-[rgba(0,0,0,0.9)] absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-10 '>

   
     <Link onClick={()=>{navigate(-1)}} className="text-3xl font-black absolute top-10 right-10 text-white hover:text-[#6556cd]  ri-close-fill"></Link>
    {ytvideo && ytvideo.key ? (
      <ReactPlayer
        height={600}
        width={1200}
        controls
        playing
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}  
      />
    ) : (
     <Notfound/>
    )}
    </div>
  )
}

export default Trailer
