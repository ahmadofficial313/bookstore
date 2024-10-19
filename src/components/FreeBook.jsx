import React from 'react'
import list from '../list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function FreeBook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const freeBooks = list.filter((book) => book.category === "free")
    console.log(freeBooks)
  return (
    <>
    <div className=' container py-4 md:px-20 px-4 flex flex-col md:flex-row'>
    <h1 className='pb-2 font-semibold text-xl '>Free Offered Courses</h1>
    </div>
    <div className=" max-w-screen-2xl py-4 md:px-20 px-4">
      <Slider {...settings}>
        {freeBooks.map((item)=>(
          <Card item={item} key={item.id}/>
          ))}
      </Slider>
    </div>
    </>
  )
}

export default FreeBook