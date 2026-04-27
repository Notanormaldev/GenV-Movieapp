import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from '../store/actions/personaction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import Horizontalcards from './Horizontalcards'
import noimg from "/noimgav.webp"
import Dropdown from './Dropdown';
import { useState } from 'react';

function Peopledetails() {

   const {id}=useParams();
       const dispatch = useDispatch();
       const {info} = useSelector((state)=>state.person);
       const navigate =useNavigate();
       const {pathname} = useLocation();
       const [category, setcategory] = useState("movie");
   
         useEffect(()=>{
           dispatch(asyncloadperson(id))
   
         return ()=>{
           dispatch(removeperson());
           }
        },[id])
   
   
       console.log(info);
       
       








  return info? (
   <div className='px-[5%] w-screen h-[190vh] bg-[#1F1E24]'>  


     {/* part 1 */}
           <nav className='h-10 w-full  text-zinc-200 text-xl flex items-center pt-[3%] gap-10'> <i onClick={()=>{navigate(-1)}} className="text-2xl hover:text-[#6556cd]  ri-arrow-left-fill"></i>  
       
      </nav>

    {/* part 2 */}
    <div className='w-full flex'>
       <div className='w-[20%] '>
       <img 
                     className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  h-[50vh] object-cover mt-[6vh] ml-[10vh] "
                     src={ info.detail.profile_path  ?`https://image.tmdb.org/t/p/original/${
                       info.detail.profile_path  
                     }`:noimg}
                     alt=""
                   />
                <hr className='border-none ml-[10vh] w-[34vh] mt-7 bg-zinc-500 h-[2px] mb-5'/>
                <div className='ml-[10vh] text-white flex gap-x-5 text-xl'>
                  {/* all social meadia */}
                  <a target='_Blank'  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
                  <a target='_Blank'  href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-fill"></i></a>
                  <a target='_Blank'  href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-fill"></i></a>
                  <a target='_Blank'  href={`https://x.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-fill"></i></a>
                </div>
             <h1 className='text-2xl text-zinc-400 mt-5 mb-3 font-bold ml-[10vh]'>Personal Info</h1>


             <h1 className='text-lg text-zinc-400 mt-2 font-semibold ml-[10vh]'>Known For</h1>
             <h1 className='text-sm text-zinc-500  ml-[10vh]'>{info.detail.known_for_department}</h1>



               <h1 className='text-lg text-zinc-400 mt-2 font-semibold ml-[10vh]'>Gender</h1>
             <h1 className='text-sm text-zinc-500  ml-[10vh]'>{info.detail.gender === 2 ? "Male" : "Female" }</h1>


               <h1 className='text-lg text-zinc-400 mt-2 font-semibold ml-[10vh]'>Brithday</h1>
             <h1 className='text-sm text-zinc-500  ml-[10vh]'>{info.detail.birthday}</h1>

               <h1 className='text-lg text-zinc-400 mt-2 font-semibold ml-[10vh]'>Deathday</h1>
             <h1 className='text-sm text-zinc-500  ml-[10vh]'>{info.detail.deathday ? info.detail.deathday : "Still Alive" }</h1>


                 <h1 className='text-lg text-zinc-400 mt-2 font-semibold ml-[10vh] whitespace-nowrap'>Place of Birth</h1>
             <h1 className='text-sm text-zinc-500  ml-[10vh]'>{info.detail.place_of_birth }</h1>



             
                 <h1 className='text-lg text-zinc-400 mt-2 font-semibold ml-[10vh] whitespace-nowrap'>Also known as</h1>
             <h1 className='text-sm text-zinc-500  ml-[10vh]'>{info.detail.also_known_as.join(", ") }</h1>
       </div>
       <div className='w-[80%] mt-[3vh] ml-5'>

           <h1 className='text-6xl text-zinc-200 mt-5 mb-3 font-black ml-[10vh]'>{info.detail.name}</h1>


             <h1 className='text-lg text-zinc-300 mt-5 font-bold ml-[10vh]'>Biography</h1>
             <h1 className='text-sm text-zinc-400 mt-2 ml-[10vh]'>{info.detail.biography}</h1>

            <h1 className='text-lg text-zinc-300 mt-5 font-bold ml-[10vh]'>Featured In</h1>

          <div className='ml-[7vh]'>
             <Horizontalcards     data={info.combinedcredits.cast || []} />
          </div>

          <div className=' flex justify-between mt-5'>
             <h1 className='text-lg text-zinc-300  font-bold ml-[8vh]'>Acting In</h1>
         
            <Dropdown title='Category' options={['tv','movie']} func={(e)=>setcategory(e.target.value)} />
           
          </div>


          <div className='w-[95%] h-[50vh] mt-5 ml-[8vh]   overflow-x-hidden overflow-y-auto border-2 border-zinc-700 p-5 list-disc shadow-xl  shadow-[rgba(255,255,255,.3)] text-zinc-400 p-5'>


            {info[category + "credits"].cast.map((c,i)=>(


             <li className='hover:text-white rounded hover:bg-[#19191D] duration-300   mt-3'>
           
            <Link to={`/${category}/details/${c.id}`} key={i}>
              <span>{c.title || c.name || c.original_name || c.original_title}</span>

              <span className='block ml-5'>{c.character && `Character Name : ${c.character}`}</span>
            
            
            
            </Link>


            </li>


            ))}



          
 

      </div>
       </div>



    </div>




   </div>
  ):<Loader/>
}

export default Peopledetails
