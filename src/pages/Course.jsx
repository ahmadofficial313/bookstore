import React from 'react'
import { Link } from 'react-router-dom';
import list from '../list.json'
import Card from '../components/Card';
function Course() {
    const paidBooks = list.filter((book) => book.category === "Paid")

  return (
<>
<div className="container py-4 md:px-20 px-4 flex flex-col items-center justify-center">
    <h1 className="pb-2 font-semibold text-center text-xl mt-4">We're delighted to hve you <span className='text-pink-500'>Here!:)</span></h1>
     <p className='pt-5 py-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium eius voluptate cum tempore magnam et voluptas praesentium!</p>
     <p className='py-1'>sit amet consectetur adipisicing elit. Voluptas sequi, voluptate eum inventore alias maiores natus dolorem aspernatur iste perferendis?</p>
     <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, magnam.</p>
     <Link to="/">
     <button className='bg-pink-500 text-white px-3 py-2 rounded-md hover:scale-105 transition-all hover:bg-pink-600 duration-1000'>Back</button>
     </Link>
     </div>
    <div className=" max-w-screen-2xl py-4 md:px-20 px-4 grid md:grid-cols-4 sm:grid-cols-2">
        {paidBooks.map((item)=>(
          <Card item={item} key={item.id}/>
          ))}
    </div>
</>
)
}

export default Course