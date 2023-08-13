import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {user,logIn}=UserAuth();
  const navigate=useNavigate()

  const [error,setError]=useState('')

  //handleSubmit
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError('')
    try{
      await logIn(email,password);
       navigate('/')
      //navigate

    }
    catch(error){
      setError(error.message)
      console.log(error)
    }
  }
  
  return (
    <>
      <div className='w-full h-screen '>
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
    <div className="fixed w-full px-4 py-24 z-50">
     <div className="max-w-[460px] h-[600px ] mx-auto bg-blaxk/75 text-white">
     <div className="max-w-[320px] mx-auto py-16">
      <h1 className='text-3xl font-bold'>Sign In</h1>
      {error ? <p className='p-3 bg-red-400 my-3'>{error}</p>: null}
      <form onSubmit={handleSubmit} action="" className='w-full flex flex-col py-4'>
        <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 rounded bg-gray-600' type="email" placeholder='Email' autoComplete='email'/>
        <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 rounded  bg-gray-600'  type="password"  placeholder='password' autoComplete='current-password' />
      
       <button className='bg-red-600 py-3 rounded font-bold'>Sign In</button>
        <div className="flex justify-between items-center text-gray-500">
          <p><input className='mr-2' type="checkbox" />Remember me</p>
          <p>Need Help?</p>
        </div>
        <p className='py-4'>
        <Link to='/signup'>Sign Up</Link> </p>
      </form>
     </div>

     </div>
    </div>
   
  </div></>
  )
}

export default Login