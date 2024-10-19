import React from 'react'
import login from '../images/login.png';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <div className='flex items-center'>
      <img src={login} className='shadow-lg shadow-gray-400 rounded-full h-[130px] dark:shadow-lg dark:bg-white ' alt="" />
      <h3 className="font-bold text-lg ml-5 text-center">Login to your account!</h3>

    </div>
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form action="">
      <div className='flex flex-col space-y-3 mt-2'>
        <span>Email</span>
        <input type="email" placeholder='Enter Your Email' className='px-2 py-2 rounded-md focus:outline-1 focus:outline-black outline-none dark:bg-slate-800 dark:focus:outline-white dark:focus:outline-1 ' />
      </div>
      <div className='flex flex-col space-y-3 mt-2 '>
        <span>Password</span>
        <input type="password" placeholder='Enter Your Password' className='px-2 py-2 rounded-md outline-none focus:outline-1 focus:outline-black  dark:bg-slate-800 dark:focus:outline-white dark:focus:outline-1' />
      </div>
      <div className='mt-2'>
      <a href="#" className='text-gray-500 dark:text-gray-400'>Forgot Password?</a>
      </div>
      <div className='py-2 space-x-4 flex justify-between items-center'>
      <button className=" bg-pink-500 text-white  px-4 py-2  hover:bg-pink-600  rounded-lg hover:scale-105 duration-1000 cursor-pointer" >Sign In</button>
      
        <p className='text-gray-500  dark:text-gray-400'>Don't have an account? <Link to="/register"><a href="#" className='text-pink-500'>Sign Up</a></Link></p>
      </div>
    </form>
  </div>
</dialog>
    </>
  )
}

export default Login