import React from 'react'

function Card({item}) {
console.log(item)
  return (
    <>
    <div className='my-3 p-3'>
<div className="card bg-base-100 dark:text-white dark:bg-slate-800 w-92 mb-3 shadow-xl hover:scale-105 mt-3 duration-1000 ">
  <figure className='overflow-hidden'>
    <img
    className='rounded-md duration-1000 hover:scale-110'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between items-baseline">
      <div className="badge badge-outline"><span className='text-pink-500 mr-1'>Rs:</span>{item.price}</div>
     
      <button className="  px-2 py-1 border-[1px]  hover:bg-pink-500 hover:text-white  rounded-full hover:scale-105 duration-1000 cursor-pointer">Buy Now</button>

   
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Card