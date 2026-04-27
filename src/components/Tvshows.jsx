import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import  { useEffect, useState } from 'react'
import Topbar from '../partials/Topbar'
import Dropdown from '../partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import Card from '../partials/Card'
export default function Tvshows() {
    const [category,setcategory] = useState("airing_today")
    const [tv,settv] = useState([]) 
    const [page,setpage] = useState(1) 
    const [hasmore,sethasmore] = useState(true) 
    
  

      document.title="GenV | Tv "

   
     const gettv=async()=>{
        try {
          const {data} =await axios.get(`tv/${category}?page=${page}`);
          // settv(data.results);
           if(data.results.length > 0){
             settv((prev)=>[...prev,...data.results])
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

      if(tv.length === 0){
        gettv()
      }
      else{
            settv([])
            setpage(1)
            gettv()

      }
    }







   useEffect(()=>{
       refershandler();
     
   },[category])



   const navigate=useNavigate();






  return  tv ? (
    <div className=' w-full h-screen  '>
     <div className='flex items-center justify-between mb-[3%] px-[3%] pt-[1%]'>
       <h1 className='text-2xl text-zinc-500 font-bold w-[20%] '><i onClick={()=>{navigate(-1)}} className="text-2xl hover:text-[#6556cd]  ri-arrow-left-fill"></i>  Tv Shows <small className='text-sm text-zinc-600'>{category.toUpperCase()}</small>    </h1>



     <div className='flex items-center w-[80%] ml-[3%]'>
        <Topbar className=""/>
      
       <Dropdown title={"Category"} options={["top_rated" ,"on_the_air","popular","airing_today"]}  func={(e)=>setcategory(e.target.value)}/>
       <div className='w-[3%]'></div>
     </div>



     </div>

     <InfiniteScroll
       loader={<h1>Loading...</h1>}
       dataLength={tv.length}
       next={gettv}
       hasMore={hasmore}
     >


     <Card data={tv} title='Tv'/>
     </InfiniteScroll>


    </div>
  ):<Loader/>
  
}
