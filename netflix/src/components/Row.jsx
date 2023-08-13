import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({title,fetchURL,rowID}) => {
 const [movies,setMovies]=useState([])
 

   useEffect(()=>{
    axios.get(fetchURL).then((response) =>{
        setMovies(response.data.results)
    })
   },[fetchURL])

//  console.log(movies)

  const  slideLeft=()=>{
    var slider=document.getElementById('slider' +rowID);
    slider.scrollLeft=slider.scrollLeft-500;
    console.log("leftarrow")
  }
  const  slideRight=()=>{
    var slider=document.getElementById('slider'+rowID); 
    slider.scrollRight=slider.scrollRight+500;
  }




  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title} </h2>
    <div className="relative flex items-center group"> 
    <MdChevronLeft  className='bg-gray-400 rounded-full opacity-50 hover:opacity-100 z-10 absolute left-0 hidden group-hover:block ' size={30}/>

     <div  id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {movies.map((item,id)=>(
            <Movie key={id} item={item}/>
        ))}

     </div>
     <MdChevronRight  className='bg-gray-500 rounded-full opacity-50 hover:opacity-100 z-10 absolute right-0 hidden group-hover:block ' size={30}/>
        </div>
    
    
    </>
  )
}

export default Row