import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import  { useEffect, useState } from 'react'
import Topbar from '../partials/Topbar'
import Dropdown from '../partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import Card from '../partials/Card'



function Movie() {
   
    
    const [category,setcategory] = useState("now_playing")
    const [movie,setmovie] = useState([]) 
    const [page,setpage] = useState(1) 
    const [hasmore,sethasmore] = useState(true) 
    
  

      document.title="GenV | Movie "

   
     const getmovie=async()=>{
        try {
          const {data} =await axios.get(`movie/${category}?page=${page}`);
          // setmovie(data.results);
           if(data.results.length > 0){
             setmovie((prev)=>[...prev,...data.results])
             setpage(page+1)
            //  console.log(trending);
           }
           else{
            sethasmore(false)
           }


          
          
        } catch (error) {
          console.log(error);    
        }
    }


   
    const refershandler = async() =>{

      if(movie.length === 0){
        getmovie()
      }
      else{
            setmovie([])
            setpage(1)
            getmovie()

      }
    }







   useEffect(()=>{
       refershandler();
     
   },[category])



   const navigate=useNavigate();







  return movie ? (
    <div className=' w-full h-screen  '>
     <div className='flex items-center justify-between mb-[3%] px-[3%] pt-[1%]'>
       <h1 className='text-2xl text-zinc-500 font-bold w-[20%] '><i onClick={()=>{navigate(-1)}} className="text-2xl hover:text-[#6556cd]  ri-arrow-left-fill"></i>  Movies  <small className='text-sm text-zinc-600'>{category.toUpperCase()}</small>    </h1>



     <div className='flex items-center w-[80%] ml-[3%]'>
        <Topbar className=""/>
      
       <Dropdown title={"Category"} options={["top_rated" ,"upcoming","popular","now_playing"]}  func={(e)=>setcategory(e.target.value)}/>
       <div className='w-[3%]'></div>
     </div>



     </div>

     <InfiniteScroll
       loader={<h1>Loading...</h1>}
       dataLength={movie.length}
       next={getmovie}
       hasMore={hasmore}
     >


     <Card data={movie} title='Movie'/>
     </InfiniteScroll>


    </div>
  ):<Loader/>
}

export default Movie
