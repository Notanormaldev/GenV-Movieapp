import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'
import Moviedetails from './partials/Moviedetails'
import Tvdetails from './partials/Tvdetails'
import Persondetails from './partials/Persondetails'
import Trailer from './partials/Trailer'
import Notfound from './components/Notfound'
import Aboutgenv from './components/Aboutgenv'
import Contactus from './components/Contactus'
function App() {
  return (
    <>
    <div className='w-full h-screen bg-[#1F1E24] flex'>

     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movie/>}/>
       <Route path="/movie/details/:id" element={<Moviedetails />}>
       <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path='/tv' element={<Tvshows/>}/>
         <Route path='/tv/details/:id' element={<Tvdetails/>}>
           <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path='/people' element={<People/>}/> 
        <Route path='/person/details/:id' element={<Persondetails/>}/>
        <Route path='*' element={<Notfound/>}/>
         <Route path='/about' element={<Aboutgenv/>}/>
         <Route path='/contactus' element={<Contactus/>}/>
     </Routes>

    </div>
    </>
  )
}

export default App
