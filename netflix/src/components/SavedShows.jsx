
import React, { useState,useEffect} from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import {db} from '../firebase'
import {updateDoc,doc,onSnapshot} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
    const [movies,setMovies]=useState([])
     const {user}=UserAuth()



    const  slideLeft=()=>{
            var slider=document.getElementById('slider' );
            slider.scrollLeft=slider.scrollLeft-500;
            console.log("leftarrow")
          }
          const  slideRight=()=>{
            var slider=document.getElementById('slider'); 
            slider.scrollRight=slider.scrollRight+500;
          }
          useEffect(()=>{
           onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows)
           }
           )
          },[user?.email])
          const movieRef=doc(db,'users',`${user?.email}`)
          

        const deleteShow=async (passedID)=>{
            try{
                const result=movies.filter((item)=>item.id!== passedID)
                await updateDoc(movieRef,{
                    savedShows:result
                }
                   
                    )
                
                }
            catch(error){
                console.log(error)
            }
        }
  return (
    <div>

    <h2 className='text-white font-bold md:text-xl p-4'>My Shows </h2>
    <div className="relative flex items-center"> 
    <MdChevronLeft onClick={slideLeft}  className='bg-gray-400 rounded-full opacity-50 hover:opacity-100 z-10 absolute left-0 ' size={30}/>

     <div  id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {movies.map((item,id)=>(

    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] inline-block cursor-pointer lg:w-[280px] relative px-2 ' >   
     <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title}  className='w-full h-auto block'/>

     <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white p-3">
      <p className='text-sm md:text-sm font-bold flex justify-center items-center text-center overflow-hidden'>{item?.title}</p>
      <p onClick={()=>deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose></AiOutlineClose></p>
   
    </div>

     </div>
            
        ))}

     </div>
     <MdChevronRight onClick={slideRight}  className='bg-gray-500 rounded-full opacity-50 hover:opacity-100 z-10 absolute right-0 ' size={30}/>
        </div>

    </div>
  )
}

export default SavedShows