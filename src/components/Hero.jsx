import React from 'react'
import hero from '../images/Banner.png'
function Hero() {
  return (
    <>
    <div className='max-w-screen-2xl container md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 md:mt-32 mt-10'>
          <div className='md:space-y-12 space-y-6'>
            <h1 className='md:text-4xl text-2xl font-bold px-2'>Hello, welcome to learn something{""} <span className='text-pink-500'>new everyday!!!</span></h1>
            <p className='px-2 font-semibold text-sm md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia in quis, modi, nemo ab officiis fuga eos repudiandae doloribus corrupti nostrum, recusandae est. Itaque quidem ipsa porro mollitia rem!</p>
         
        </div>
        <div className='mt-2 px-2 py-2 space-y-2'>
            <label className="border flex items-center rounded px-2">
              <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="outline-none px-2 py-2 dark:bg-slate-900" placeholder="Email" />
                </label>
                <button className='bg-pink-500 text-white px-3 py-2 rounded-md hover:scale-105 transition-all hover:bg-pink-600 duration-1000'>Get Started</button>

            </div>
        </div>
        <div className='w-full md:w-1/2 md:mt-32 mt-10'>
        <img src={hero} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero