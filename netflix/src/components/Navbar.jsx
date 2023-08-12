import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-6 mx-2 z-[100] absolute w-full' >
       <Link to='/'>
       <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLİX</h1>
       </Link>
       
         <div>
         <Link to='/login'>
         <button className="text-white pr-4">Sign In</button>
         </Link>
      
        <Link to='/signup'>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign In</button>
        </Link>
       
         </div>

    
    </div>
  )
}

export default Navbar