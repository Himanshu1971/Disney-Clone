import React from 'react'

export default function HeaderItem(props) {
  return (
    <div className='flex items-center gap-3 text-[18-px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3'>
      <props.Icon className = "size-5"/>
      <h2 className='md:block'>{props.name}</h2>
    </div>
  )
}
