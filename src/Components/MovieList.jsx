import React from 'react'
import Globalapi from '../Services/Globalapi'
import { useEffect } from 'react'
import { useState,useRef } from 'react'
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import MovieCard from './MovieCard';
import LargeMovieCard from './LargeMovieCard';

export default function MovieList({genreId,index_}) {
    const [movieList,setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(()=>{
        getMovieByGenreId();
    },[])
    const getMovieByGenreId =()=>{
        Globalapi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.result);
            setMovieList(resp.data.results);
        })
    }

    const SliderRight = (element)=>{
        element.scrollLeft+=500;
    }
  
      const SliderLeft = (element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div>
        <HiOutlineChevronLeft className={`hidden md:block text-[50px] p-2 z-10 absolute left-20 cursor-pointer ${index_%3==0?'mt-[80px]':'mt-[150px]'}`} onClick={()=>{SliderLeft(elementRef.current)}}/>

        <HiOutlineChevronRight className={`hidden md:block text-[50px] p-2 z-10 absolute ${index_%3==0?'mt-[80px]':'mt-[150px]'} cursor-pointer right-20`} onClick={()=>{SliderRight(elementRef.current)}}/>

        <div ref={elementRef} className='flex scroll-smooth overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5'>
        {movieList.map((item,index)=>(
           <>
           {(index_%3==0)?<LargeMovieCard movie = {item}/>:<MovieCard movie = {item}/> }
           </> 
        ))}
        </div>

    </div>
  )
}
