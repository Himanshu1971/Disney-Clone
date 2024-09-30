import React from 'react'
import { useEffect } from 'react'
import Globalapi from '../Services/Globalapi';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState } from 'react';
import { useRef } from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

export default function Slider() {
    const [MovieList,setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(()=>{
        getTrendingVideos();
    },[]);

    const getTrendingVideos=()=>{
        Globalapi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const SliderRight = (element)=>{
      element.scrollLeft+=screenWidth-110;
    }

    const SliderLeft = (element)=>{
      element.scrollLeft-=screenWidth-110;
    }

  return (
    <div>
        <HiOutlineChevronLeft className='hidden md:block text-[30px] absolute mx-8 mt-[250px] cursor-pointer' onClick={()=>{SliderLeft(elementRef.current)}}/>
        <HiOutlineChevronRight className='hidden md:block text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0' onClick={()=>{SliderRight(elementRef.current)}}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
      {MovieList.map((item,index)=>(
        <img src={IMG_BASE_URL+item.backdrop_path} className='min-w-full md:h-[510px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
      ))}
    </div>
    </div>
  )
}
