import axios from "../Utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimg from "/noimgav.webp"
function Topbar() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getsearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsearch();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] flex  mx-auto items-center relative  z-999">
      <i className="ri-search-2-line text-zinc-400 text-3xl"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search what you want"
        className="text-white p-5 w-[50%] border-none outline-none"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="   ri-close-fill text-zinc-400 text-3xl"
        ></i>
      )}

      <div className="bg-zinc-900 text-zinc-400 absolute w-[48%] left-[4%]  max-h-[50vh]  top-[100%] overflow-auto">
        {searches.map((s, i) => (
          <Link  to={`/${s.media_type || title}/details/${s.id}`}
            key={i}
            className="p-10  font-semibold  hover:text-white hover:bg-zinc-700 hover:scale-102  duration-300 w-[99.1%] flex items-center  border-b-2 border-zinc-700 "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover mr-5 rounded shadow-lg"
              src={
                s.backdrop_path || s.profile_path ?
                `https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path
              }`:noimg}
              alt=""
            />
            <span>
              {s.name || s.title || s.orginal_name || s.orginal_title}
            </span>
          </Link>
        ))}
        {/**/}
      </div>
    </div>
  );
}

export default Topbar;
