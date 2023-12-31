import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast';


const SignUp = () => {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {user,signUp}=UserAuth()
const navigate=useNavigate();


 const handleSubmit=async(e)=>{
  e.preventDefault()
  try{
    //navigateileyönlendirme
    await signUp(email,password)
    navigate('/')
  }
  catch(error){
    toast.error('This is an error!');
  }
 }

  return (
    <>
      <div className='w-full h-screen '>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
        
        <div className="fixed w-full px-4 py-24 z-50">
         <div className="max-w-[460px] h-[600px ] mx-auto bg-blaxk/75 text-white">
         <div className="max-w-[320px] mx-auto py-16">
          <h1 className='text-3xl font-bold'>Sign Up</h1>
          <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
            <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 rounded bg-gray-700' type="email" placeholder='Email' autoComplete='email'/>
            <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 rounded  bg-gray-700'  type="password"  placeholder='password' aria-autocomplete='current-password'/>
          
           <button className='bg-red-600 py-3 rounded font-bold'>Sign Up</button>
            <div className="flex justify-between items-center text-gray-500">
              <p><input className='mr-2' type="checkbox"  />Remember me</p>
              <p>Need Help?</p>
            </div>
            <p className='py-4'> <span className='text-gray-600'>Already subscribe to Netflix?</span><Link to='/login'>Sign In</Link> </p>
          </form>
         </div>

         </div>
        </div>
       
      </div>
    </>
  
  )
}

export default SignUp