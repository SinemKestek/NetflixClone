import React from 'react'
import SavedShows from '../components/SavedShows'
import BackgroundJpg from '../img/netflix-bg.jpg'

const Account = () => {
  return (
    <>
    <div className="w-full text-white">
      <img src={BackgroundJpg}  alt="/" className='w-full h-[550px] object-cover' />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className='text-3xl font-bold'>My Favorite Shows</h1>

      </div>
    </div>
    
    <SavedShows/>
    
    
    </>
  )
}

export default Account