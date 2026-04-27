import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../partials/Topbar';
import Dropdown from '../partials/Dropdown';
import Loader from './Loader';
import axios from '../Utils/axios';
import Card from '../partials/Card';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    
    const [category,setcategory] = useState("all")
    const [duration,setduration]=useState("day")
    const [trending,settrending] = useState([]) 
    const [page,setpage] = useState(1) 
    const [hasmore,sethasmore] = useState(true) 
    
     document.title="GenV | Trending "

   
     const gettrending=async()=>{
        try {
          const {data} =await axios.get(`/trending/${category}/${duration}?page=${page}`);
          // settrending(data.results);
           if(data.results.length > 0){
             settrending((prev)=>[...prev,...data.results])
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

      if(trending.length === 0){
        gettrending()
      }
      else{
            settrending([])
            setpage(1)
            gettrending()

      }
    }







   useEffect(()=>{
       refershandler();
     
   },[category,duration])


  // console.log(trending);
  

    const navigate=useNavigate();
  return  trending ? (
    <div className=' w-full h-screen  '>
     <div className='flex items-center justify-between mb-[3%] px-[3%] pt-[1%]'>
       <h1 className='text-2xl text-zinc-500 font-bold w-[20%] '><i onClick={()=>{navigate(-1)}} className="text-2xl hover:text-[#6556cd]  ri-arrow-left-fill"></i>  Trending</h1>



     <div className='flex items-center w-[90%] ml-[3%]'>
        <Topbar className=""/>
      
       <Dropdown title={"Category"} options={["tv" ,"movie", "all"]}  func={(e)=>setcategory(e.target.value)}/>
       <div className='w-[3%]'></div>

       <Dropdown title={"Duration"} options={["week" ,"day"]}  func={(e)=>setduration(e.target.value)}/>

     </div>



     </div>

     <InfiniteScroll
       loader={<h1>Loading...</h1>}
       dataLength={trending.length}
       next={gettrending}
       hasMore={hasmore}
     >


     <Card data={trending} title={category}/>
     </InfiniteScroll>


    </div>
  ):<Loader/>
}

export default Trending
