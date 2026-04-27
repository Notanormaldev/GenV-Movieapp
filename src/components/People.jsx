import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import  { useEffect, useState } from 'react'
import Topbar from '../partials/Topbar'
import Dropdown from '../partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import Card from '../partials/Card'


function People() {
   const [category,setcategory] = useState("popular")
    const [person,setperson] = useState("") 
    const [page,setpage] = useState(1) 
    const [hasmore,sethasmore] = useState(true) 
    
  

      document.title="GenV | People "

   
     const getperson=async()=>{
        try {
          const {data} =await axios.get(`person/${category}?page=${page}`);
          // setperson(data.results);
           if(data.results.length > 0){
             setperson((prev)=>[...prev,...data.results])
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

      if(person.length === 0){
        getperson()
      }
      else{
            setperson([])
            setpage(1)
            getperson()

      }
    }







   useEffect(()=>{
       refershandler();
     
   },[category])



   const navigate=useNavigate();







  return  person ? (
    <div className=' w-full h-screen  '>
     <div className='flex items-center justify-between mb-[3%] px-[3%] pt-[1%]'>
       <h1 className='text-2xl text-zinc-500 font-bold w-[20%] '><i onClick={()=>{navigate(-1)}} className="text-2xl hover:text-[#6556cd]  ri-arrow-left-fill"></i>  People      </h1>



     <div className='flex items-center w-[80%] ml-[3%]'>
        <Topbar className=""/>
      
      
     </div>



     </div>

     <InfiniteScroll
       loader={<h1>Loading...</h1>}
       dataLength={person.length}
       next={getperson}
       hasMore={hasmore}
     >


     <Card data={person} title='Person'/>
     </InfiniteScroll>


    </div>
  ):<Loader/>
  
}

export default People
