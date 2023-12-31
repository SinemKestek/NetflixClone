import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import {db} from '../firebase'
import {arrayUnion,doc,updateDoc} from 'firebase/firestore'

const Movie = ({item}) => {

    const [like,setLike]=useState(false)
    const [saved,setSaved]=useState(false)
    const {user}=UserAuth();

    const movieID=doc(db,'users',`${user?.email}`)
    const saveShow= async () => {
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShows:arrayUnion({
            id:item.id,
            title:item.title,
            img:item.backdrop_path

          })
        })

      } else{
        alert('Please log in to save a movie')
        //bildirimi hot-toast güncelle
      }

    }

  

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px]  inline-block cursor-pointer lg:w-[280px] relative px-2 ' >   
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}  className='w-full h-auto block'/>
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white p-3">
      <p className='text-sm md:text-sm font-bold flex justify-center items-center text-center overflow-hidden'>{item?.title}</p>
      
      <p onClick={saveShow}>{like ? <FaHeart className='absolute top-4 left-3 text-gray-300 '></FaHeart> : <FaRegHeart className='absolute top-4 left-3 text-gray-300'></FaRegHeart> } </p>
    </div>
  </div>
  )
}

export default Movie