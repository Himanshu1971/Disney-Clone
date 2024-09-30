import React from 'react'
import genreList from '../constant/genreList'
import MovieList from './MovieList'

export default function GenreMovieList() {
  return (
    <div>
      {genreList.genere.map((item,index)=>(index<=4)&&(
        <div className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] font-bold'>{item.name}</h2>
            <MovieList genreId = {item.id} index_ = {index}/>
        </div>
      ))}
    </div>
  )
}
