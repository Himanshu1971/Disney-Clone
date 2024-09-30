import React from 'react'
import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGeographicV from '../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import starwarsV from '../assets/Videos/star-wars.mp4'

import disney from '../Images/disney.png'
import marvel from '../Images/marvel.png'
import nationalGeographic from '../Images/nationalG.png'
import pixar from '../Images/pixar.png'
import starwars from '../Images/starwar.png'

export default function ProductionHouse() {
    const ProductionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:1,
            image:nationalGeographic,
            video:nationalGeographicV
        },
        {
            id:1,
            image:pixar,
            video:pixarV
        },
        {
            id:1,
            image:starwars,
            video:starwarsV
        },
       
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {ProductionHouseList.map((item)=>{
        return(
            <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
                <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
                <img src={item.image} className='w-full z-[1]' />
            </div>
        )
      })}
    </div>
  )
}
