import React, { useEffect, useState } from 'react'
import Sidebar from '../partials/Sidebar'
import Topbar from '../partials/Topbar'
import axios from '../Utils/axios'
import Header from '../partials/Header'
import Horizontalcards from '../partials/Horizontalcards'
import Dropdown from '../partials/Dropdown'
import Loader from './Loader'

function Home() {
  document.title = "GenV | Home"
  const [wallpaper, setwallpaper] = useState(null)
  const [trending, settrending] = useState([])
  const [category, setcategory] = useState("all")
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState("")

  const fetchHomeData = async () => {
    setloading(true)
    seterror("")

    try {
      const [wallpaperRes, trendingRes] = await Promise.all([
        axios.get('/trending/all/day'),
        axios.get(`/trending/${category}/day`)
      ])

      const wallpaperResults = wallpaperRes?.data?.results || []
      const trendingResults = trendingRes?.data?.results || []

      if (!wallpaperResults.length || !trendingResults.length) {
        throw new Error('No data returned from TMDB')
      }

      const randomdata = wallpaperResults[Math.floor(Math.random() * wallpaperResults.length)]
      setwallpaper(randomdata)
      settrending(trendingResults)
    } catch (err) {
      console.error('Home fetch failed:', err)
      seterror('Unable to load movies right now. Check TMDB API token and internet connection.')
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    fetchHomeData()
  }, [category])

  if (loading) return <Loader />

  if (error) {
    return (
      <div className='w-full h-screen bg-[#1F1E24] flex items-center justify-center px-6 text-center'>
        <div>
          <p className='text-red-400 text-lg'>{error}</p>
          <button
            onClick={fetchHomeData}
            className='mt-4 px-4 py-2 rounded bg-[#6556CD] text-white hover:opacity-90'
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Sidebar />
      <div className='w-[80%] h-full overflow-hidden overflow-y-auto '>
        <Topbar />
        <Header data={wallpaper} />

        <div className='p-5 flex justify-between items-center'>
          <h1 className='text-zinc-500 text-3xl font-semibold '>Trending</h1>
          <Dropdown title={'Filter'} options={['tv', 'movie', 'all']} func={(e) => setcategory(e.target.value)} />
        </div>

        <Horizontalcards data={trending} />
      </div>
    </>
  )
}

export default Home
