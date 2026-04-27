import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadtv, removetv } from '../store/actions/tvaction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import Horizontalcards from './Horizontalcards'
import noimg from "/noimgav.webp"

function Tvdetails() {

     const {id}=useParams();
        const dispatch = useDispatch();
        const {info} = useSelector((state)=>state.tv);
        const navigate =useNavigate();
        const {pathname} = useLocation();
    
          useEffect(()=>{
            dispatch(asyncloadtv(id))
    
          return ()=>{
            dispatch(removetv());
            }
         },[id])
    
    
        console.log(info);
        

   return info ? (
    <div  style=
    {{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), 
        url( https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}) `,
                backgroundPosition:"center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }} className='relative   w-screen h-[220vh] px-[5%]'>

      {/* part 1 nav */}
      <nav className='h-10 w-full  text-zinc-200 text-xl flex items-center pt-[3%] gap-10'>
       <i onClick={()=>{navigate(-1)}} className="text-2xl hover:text-[#6556cd]  ri-arrow-left-fill"></i>  
      <a target='_Blank'   href={info.detail.homepage}> <i className="ri-external-link-fill"></i></a>
      <a target='_Blank'  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
      <a target='_Blank'   href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>IMDB</a>
      </nav>
    
      {/* part 2 poster and details */}
      <div className='w-full  flex mx-[5%] mt-[2%]'>
          <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[45vh] h-[57vh] object-cover mt-[3%] "
              src={info.detail.poster_path || info.detail.backdrop_path ? `https://image.tmdb.org/t/p/original/${
                info.detail.poster_path || info.detail.backdrop_path 
              }`:noimg}
              alt=""
            />
         

         <div className='ml-[5%] mt-[3%] text-white'>

            <h1 className="text-white text-5xl font-black  ">
            {info.detail.title || info.detail.name || info.detail.original_name || info.detail.original_title}

             <small className='text-xl text-zinc-100 font-semibold ml-1'>({info.detail.first_air_date.split("-")[0]})</small>  </h1>


          <div className='mt-5 mb-5 text-white flex items-center gap-x-5 '>
              <div className="text-xl bg-yellow-500 w-[6vh] h-[6vh] font-semibold flex items-center justify-center text-white rounded-full">
                {(info.detail.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
              <h1 className='text-2xl font-bold w-[60px] leading-5'>Users Score</h1>
              <h1>{info.detail.first_air_date}</h1>
              <h1>{info.detail.genres.map((g)=>g.name).join(",")}</h1>
              <h1>{info.detail.number_of_episodes} episodes</h1> 
          </div>
             
             

              <h1 className='text-xl text-zinc-300 font-semibold italic'>{info.detail.tagline}</h1>
              <h1 className='text-xl mt-5 mb-2 font-bold'>Overview</h1>
              <p className='text-semibold '>{info.detail.overview}</p>
             <h1 className='text-xl mt-5 mb-2 font-semibold'>tv Translated</h1>
              <p className='mb-4 text-sm'>{(info.translations).join(", ")}</p>


            <Link to={`${pathname}/trailer`}   className='  bg-[#6556cd] rounded-md py-3 px-5  text-white'><i className=" text-xl mr-1  ri-play-fill"></i>   Play Trailer</Link>
         </div>
</div>
     


      {/* part 3 Avl on  */}
      <div className='w-[80%] flex flex-col text-white font-semibold mt-5 ml-[5%]'>
      {info.watchproviders && info.watchproviders.flatrate && (
        <div className='flex items-center gap-x-5'>
             <h1>Available on Platforms</h1> 
             {info.watchproviders.flatrate.map((w,i)=>(
              <img key={i}  title={w.provider_name}   className='w-[5vh] h-[5vh] rounded-md object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}  />
             ))}
             </div>
      )}
       {info.watchproviders && info.watchproviders.rent && (
        <div className='flex items-center gap-x-5  mt-3  object-cover'>
             <h1>Available on Rent</h1> 
             {info.watchproviders.rent.map((w,i)=>(
              
              <img  key={i}    title={w.provider_name} className='w-[5vh] h-[5vh] rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}  />
             ))}
             </div>
      )}
      {info.watchproviders && info.watchproviders.buy && (
        <div className='flex items-center gap-x-5  mt-3'>
             <h1>Available on Buy</h1> 
             {info.watchproviders.buy.map((w,i)=>(
              <img  key={i}   title={w.provider_name} className='w-[5vh] h-[5vh] rounded-md  object-cover' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}  />
             ))}
             </div>
      )}


      </div>

       {/* part5 seasons */}

         
          <hr className='border-none bg-zinc-500 h-[2px] mb-5 mt-10'/>
         <h1 className='text-2xl font-bold text-white mb-3'>Seasons</h1>
          <div className="w-full  flex overflow-hidden overflow-x-auto min-h-[40vh] p-5 flex-nowrap   ">
       {info.detail.seasons.length > 0 ?   info.detail.seasons.map((s,i)=>(
        <div className='flex flex-col mr-15 flex-shrink-0'>
        
          <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[15vw] h-[35vh] object-cover w-[15vw] h-[40vh]"
              src={s.poster_path ?`https://image.tmdb.org/t/p/original/${
                s.poster_path 
              }`:noimg}
              alt=""
            />

         <h1 className="text-zinc-400 text-2xl font-semibold mt-2">
            {s.name}
          </h1>
        
        </div>
        
       )):<h1 className="text-4xl text-zinc-300 mt-20 ml-125">Nothing to show</h1>}
     
       </div>



      {/* part4 recommad and similar */}

       <div className='mt-10'>
          <hr className='border-none bg-zinc-500 h-[2px] mb-5'/>
    <h1 className='text-2xl font-bold text-white mb-3'>Recommendations & Similar Stuff</h1>
   <Horizontalcards data={info.recommendations>0 ? info.recommendations : info.similar} title={'tv'} />
       </div>
       

    <Outlet/> 
    </div>
  ):<Loader/>
}

export default Tvdetails
