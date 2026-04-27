import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

function AboutGenV() {
    document.title="GenV | About "
     const navigate=useNavigate();
  return (
    <div className="w-full h-[170vh] p-8 bg-[#0F0F12] text-white relative">
        <i
        onClick={() => navigate(-1)}
        className="absolute top-8 left-6 text-3xl hover:text-[#6556cd] cursor-pointer ri-arrow-left-fill"
      ></i>


      <div className="max-w-4xl mx-auto text-center">
        <i
          className="ri-tv-fill text-[80px] mb-6"
          style={{ color: "#6556cd" }}
        />

        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About GenV
        </h1>
        
       
        <p className="text-zinc-300 mb-8 text-lg leading-relaxed">
          <span className="text-[#6556cd] font-semibold">GenV</span> is a lightweight
          movie & TV discovery app. find trailers, cast & crew, and discover where to
          watch, rent or buy your favorite titles. This project is built as a
          learning/demo app using{" "}
          <a
            className="text-indigo-300 underline"
            href="https://www.themoviedb.org/"
            target="_blank"
          >
            TMDB API
          </a>
          .
        </p>
      </div>

  
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="bg-[#19191D] rounded-2xl p-6 shadow-lg shadow-black/40">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-300"> What GenV does</h2>
          <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-lg">
            <li>Watch trailers directly in the app.</li>
            <li>See where a title is available: streaming, rent or buy.</li>
            <li>Explore cast, crew and related recommendations.</li>
            <li>Search trending, popular, movies, TV shows and people.</li>
          </ul>
        </div>

        <div className="bg-[#19191D] rounded-2xl p-6 shadow-lg shadow-black/40">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-300"> Tech Stack</h2>
          <p className="text-zinc-300 text-lg">
            React, Tailwind CSS, Redux Toolkit, Axios, React Router, React Player, TMDB API.
          </p>
        </div>

      <div className="bg-[#19191D] rounded-2xl p-6 shadow-lg shadow-black/40">
  <h2 className="text-2xl font-semibold mb-3 text-indigo-300"> What’s Next</h2>
  <ul className="list-disc pl-5 text-zinc-300 space-y-2 text-lg">
    <li> Better organization of categories and genres.</li>
    <li> Smarter search results with lightning-fast loading.</li>
    <li> More details about cast, crew, and production.</li>
  </ul>
</div>


        <div className="bg-[#19191D] rounded-2xl p-6 shadow-lg shadow-black/40">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-300"> Credits</h2>
          <p className="text-zinc-300 text-lg">
            Data and images are provided by{" "}
            <a
              className="text-indigo-300 underline"
              href="https://www.themoviedb.org/"
              target="_blank"
            >
              TMDB
            </a>
            . 
          </p>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-10">
          <Link to="/contactus">
            <button className="hover:scale-110 duration-300     bg-[#6556cd] px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-indigo-500/50 ">
              Contact the Developer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutGenV;
