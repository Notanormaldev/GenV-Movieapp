import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import  { useEffect, useState } from 'react'
import Topbar from '../partials/Topbar'
import Dropdown from '../partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import Card from '../partials/Card'

function Popular() {

    const [category,setcategory] = useState("movie")
    const [popular,setpopular] = useState([]) 
    const [page,setpage] = useState(1) 
    const [hasmore,sethasmore] = useState(true) 
    
  

      document.title="GenV | Popular "

   
     const getpopular=async()=>{
        try {
          const {data} =await axios.get(`/${category}/popular?page=${page}`);
          // setpopular(data.results);
           if(data.results.length > 0){
             setpopular((prev)=>[...prev,...data.results])
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

      if(popular.length === 0){
        getpopular()
      }
      else{
            setpopular([])
            setpage(1)
            getpopular()

      }
    }







   useEffect(()=>{
       refershandler();
     
   },[category])



   const navigate=useNavigate();


  return popular ? (
    <div className=' w-full h-screen  '>
     <div className='flex items-center justify-between mb-[3%] px-[3%] pt-[1%]'>
       <h1 className='text-2xl text-zinc-500 font-bold w-[20%] '><i onClick={()=>{navigate(-1)}} className="text-2xl hover:text-[#6556cd]  ri-arrow-left-fill"></i>  Popular</h1>



     <div className='flex items-center w-[80%] ml-[3%]'>
        <Topbar className=""/>
      
       <Dropdown title={"Category"} options={["tv" ,"movie"]}  func={(e)=>setcategory(e.target.value)}/>
       <div className='w-[3%]'></div>
     </div>



     </div>

     <InfiniteScroll
       loader={<h1>Loading...</h1>}
       dataLength={popular.length}
       next={getpopular}
       hasMore={hasmore}
     >


     <Card data={popular} title={category}/>
     </InfiniteScroll>


    </div>
  ):<Loader/>
}

export default Popular
