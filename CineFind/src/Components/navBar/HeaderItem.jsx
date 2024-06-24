/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function HeaderItem({ name, Icon }) {
  return (
    <div className='relative text-white flex items-center gap-2 text-[16px] font-semibold cursor-pointer mb-2'>
      <Icon />
      <h2 className='relative group'>
        <span className='relative z-10'>{name}</span>
        <div className='absolute left-0 w-full h-[1px] bg-white bottom-0 origin-left transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
      </h2>
    </div>
  );
}

export default HeaderItem;
