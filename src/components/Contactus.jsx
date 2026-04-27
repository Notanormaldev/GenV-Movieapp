import React from 'react'
import { useNavigate } from 'react-router-dom';

function contactus() {
    document.title="GenV | Contact us "
    const navigate=useNavigate();
  return (
       <div className="w-full h-[110vh] bg-[#0F0F12] text-white p-8">
      
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <i className="ri-tv-fill text-3xl" style={{ color: "#6556cd" }}></i>
          <h1 className="text-2xl font-bold">GenV</h1>
        </div>

        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-s-fill text-3xl cursor-pointer hover:text-[#6556cd] transition"
          title="Go Back"
        ></i>
      </div>

     
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-300 mb-4">Contact Me</h2>
        <p className="text-zinc-300 text-lg leading-relaxed">
          Hi, I’m <span className="text-[#6556cd] font-semibold">Harsh Patel</span>, 
          currently a student at LDRP College, Gandhinagar.  
          I’m passionate about Web Development and creating projects.
        </p>

        
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>

      {/*No backend */}
      <div className="max-w-xl mx-auto bg-[#19191D] p-6 rounded-2xl shadow-lg shadow-black/40">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
          Get in Touch
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#0F0F12] border border-zinc-600 focus:border-indigo-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#0F0F12] border border-zinc-600 focus:border-indigo-400 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-[#0F0F12] border border-zinc-600 focus:border-indigo-400 outline-none"
          ></textarea>
          <button
            type="button"
            className="w-full bg-[#6556cd] py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default contactus
