import React from 'react'
import Logo from "../Images/logo.png"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { RiTvFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import HeaderItem from './HeaderItem';
import myimage from "../Images/profile.jpg"
import { useState } from 'react';

export default function Header() {
    const [toggle,setToggle] = useState(false);
    const menu = [
        {
            name:"HOME",
            icon:IoMdHome
        },
        {
            name:"SEARCH",
            icon:FaMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon:FaPlus
        },
        {
            name:"ORIGINALS",
            icon:FaStar
        },
        {
            name:"MOVIES",
            icon:RiMovie2Fill
        },
        {
            name:"SERIES",
            icon:RiTvFill
        }
    ]
  return (
    <div className='flex justify-between p-5'>
        <div className='flex items-center gap-8'>
            <img src={Logo} alt="disney" className='w-[80px] md:w-[115px] object-cover'/>
            <div className='hidden md:flex gap-8'>
            {menu.map((item,index) =>(
            <HeaderItem name={item.name} Icon={item.icon}/>
            ))}
            </div>

            <div className='flex md:hidden gap-8'>
                {menu.map((item,index) =>  (index<3) && (
                <HeaderItem name={""} Icon={item.icon}/>
                ))}
            </div>

            <div className='md:hidden' onClick={()=>{setToggle(!toggle)}}>
                <HeaderItem name={""} Icon={BsThreeDotsVertical}/>
                {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
                    {menu.map((item,index) =>  (index>=3) && (
                    <HeaderItem name={item.name} Icon={item.icon}/>
                    ))}
                </div>:null}
            </div>
        </div>
        <img src = {myimage} className='w-14 h-14 mt-2 rounded-full'/>
    </div>
    
  )
}
