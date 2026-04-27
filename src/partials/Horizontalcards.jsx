import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimg from "/noimgav.webp"

function Horizontalcards({ data , title }) {
  console.log(data);
  return (
    
    

      <div className="w-full flex overflow-hidden overflow-x-auto min-h-[40vh] p-5 ">
        {data.length > 0 ? data.map((d, i) => (
          <Link to={`/${d.media_type || title}/details/${d.id}`}  key={i} className="min-w-[16vw] h-[45vh]  mr-5 bg-zinc-900  mb-5 pb-7 hover:bg-zinc-800  hover:scale-107 duration-400">
            <img 
              className="w-full h-[45%] object-cover mb-3"
              src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`:noimg}
              alt=""
            />

            <h1 className="text-white font-bold text-xl pl-3 mb-3">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>

            <p className="text-white font-sm w-[90%]  pl-3">
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-400">more</span>
            </p>
          </Link>
        )):<h1 className="text-4xl text-zinc-300 mt-20 mx-auto w-[20%]">Nothing to show</h1>}
      </div>
   
  );
}

export default Horizontalcards;
