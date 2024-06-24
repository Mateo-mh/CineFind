/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='relative text-white flex items-center gap-2 text-[16px] font-semibold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
        <Icon />
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem