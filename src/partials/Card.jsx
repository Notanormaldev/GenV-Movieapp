import React from 'react'
import { Link } from 'react-router-dom'
import noimg from "/noimgav.webp"


function Card({data,title}) {
    // console.log(data);
    // console.log(data);
    // console.log(title);
    
    
  return (
    <div className=' px-[3%] py-[1%]  flex flex-wrap w-full bg-[#1F1E24] '>
      {data.map((c,i)=><Link to={`/${c.media_type || title}/details/${c.id}`}  className='relative w-[25vh]  mr-[5%] mb-[3%] hover:scale-110 duration-400'  key={i}>
         
        <div className="relative w-full h-[40vh]">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full h-full object-cover"
              src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`:noimg}
              alt=""
            />

            {c.vote_average && (
              <div className="absolute bottom-12 left-40 text-xl bg-yellow-500 w-[7vh] h-[7vh] font-semibold flex items-center justify-center text-white rounded-full">
                {(c.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-zinc-400 text-2xl font-semibold mt-2">
            {c.title || c.name || c.original_name || c.original_title}
          </h1>


      </Link>)}

    </div>
  )
}

export default Card
