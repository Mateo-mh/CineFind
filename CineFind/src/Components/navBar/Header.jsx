/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from "./../../assets/images/logo.png";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle,setToggle]=useState(false);
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ];

  return (
    <header className="w-full fixed top-0 left-0 px-2 md:px-4 py-2 bg-[#1a202c] shadow-md z-10 flex items-center justify-between">
      <div className="flex items-center space-x-7">
        <img src={logo} alt="Logo" className="w-[35px] md:w-[40px] object-cover mr-4"/>
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map((item,index) => index<3&&(
            <HeaderItem name={''} Icon={item.icon} />
          ))}
        <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
        {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
          {menu.map((item,index) => index>2&&(
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>:null}
        </div>
        </div>
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="perfil"
        className="w-[40px] rounded-full mr-1 md:mr-4"/>
    </header>
  );
}

export default Header;
