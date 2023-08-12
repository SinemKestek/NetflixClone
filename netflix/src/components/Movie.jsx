import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {useState} from 'react'

const Movie = ({item}) => {

    const [like,setLike]=useState(false)



  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] inline-block cursor-pointer lg:w-[280px] relative px-2 ' >   
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}  className='w-full h-auto block'/>
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white p-3">
      <p className='text-sm md:text-sm font-bold flex justify-center items-center text-center overflow-hidden'>{item?.title}</p>
      <p>{like ? <FaHeart className='absolute top-4 left-3 text-gray-300 '></FaHeart> : <FaRegHeart className='absolute top-4 left-3 text-gray-300'></FaRegHeart> } </p>
    </div>
  </div>
  )
}

export default Movie