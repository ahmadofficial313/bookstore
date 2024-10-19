import React from 'react'
import login from '../images/login.png';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { useForm } from "react-hook-form"

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className="flex items-center justify-center py-8 dark:bg-slate-900 dark:text-white px-2 ">
    <div className="card bg-base-100 md:w-[500px] w-full shadow-xl dark:bg-slate-800">
    <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>

  <div className="px-4 py-2 flex  items-center">
  <img src={login} className='shadow-lg shadow-gray-400 rounded-full h-[130px] dark:shadow-lg dark:bg-white ' alt="" />
  <h2 className="font-bold text-lg ml-5 text-center font-mono">Create Your Account!</h2>

  </div>
  <div className="card-body  ">
    <div>
    <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col font-mono'>
    <div className='flex flex-col space-y-3 mt-2'>
        <span>Name:</span>
        <input type="text" placeholder='Enter Your Name' {...register("Name", { required: true })} className='px-2 py-2 rounded-md focus:outline-1 focus:outline-black outline-none dark:bg-slate-800 dark:focus:outline-white dark:focus:outline-1 ' />
      </div>
      {errors.Name && <span className='text-sm text-red-500 font-mono'>Name is required</span>}

      <div className='flex flex-col space-y-3 mt-2'>
        <span>Email:</span>
        <input type="email" placeholder='Enter Your Email' {...register("Email", { required: true })} className='px-2 py-2 rounded-md focus:outline-1 focus:outline-black outline-none dark:bg-slate-800 dark:focus:outline-white dark:focus:outline-1 ' />
      </div>
      {errors.Email && <span>Email is required</span>}

      <div className='flex flex-col space-y-3 mt-2 '>
        <span>Password:</span>
        <input type="password" placeholder='Enter Your Password'  {...register("Password", { required: true })} className='px-2 py-2 rounded-md outline-none focus:outline-1 focus:outline-black  dark:bg-slate-800 dark:focus:outline-white dark:focus:outline-1' />
      </div>
      {errors.Password && <span>Password is required</span>}

      <div className='py-4 space-x-4 flex justify-between items-center'>
      <button className=" bg-pink-500 text-white  px-4 py-2  hover:bg-pink-600  rounded-lg hover:scale-105 duration-1000 cursor-pointer" >Sign up</button>
    
        <p className='text-gray-500  dark:text-gray-400'>Already Have An Account? <a href="#" className='text-pink-500'
        onClick={()=>document.getElementById('my_modal_3').showModal()}
        >Sign In</a></p>
        <Login/>
      </div>
    </form>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Register