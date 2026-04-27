import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Header({data}) {
      const {pathname} = useLocation();
    
    console.log(data);
  return (
    <div style=
    {{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), 
        url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path } `,
                backgroundPosition:"center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }} className='w-full h-[50vh] flex flex-col justify-end p-[5%] items-start'>
     <h1 className='w-[70%] text-white font-black text-5xl '>{data.title  || data.name || data.original_name || data.original_title}</h1>   
     <p className='text-white w-[70%] mt-3'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className='text-[#6556cd]'>more</Link></p>
     <p className='text-white mt-3 mb-4'>
      <i className="text-yellow-500  ri-megaphone-fill"></i> {data.release_date || "Coming soon"}
      <i className="text-yellow-500  ml-3 ri-album-fill"></i> {data.media_type.toUpperCase()}
     </p>

     <Link to={`/${data.media_type || title}/details/${data.id}/trailer`}  className='bg-[#6556cd] rounded-md p-4 text-white'>Watch Trailer</Link>
    </div>
  )
}

export default Header
