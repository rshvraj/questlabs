import React, { useState } from 'react';
import { RiHome6Fill } from "react-icons/ri";
import {  AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BsBagHeartFill } from "react-icons/bs";
const Footer = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  return (
    <footer className={`footertailwindcss absolute bottom-0 w-[100%] bg-white flex justify-around items-center py-4 border-t `}>
      <RiHome6Fill className={`text-xl cursor-pointer font-semibold  ${activeIcon === 'home' ? 'text-black' : 'text-gray-600'}`} onClick={() => setActiveIcon('home')} />
      <CiSearch className={` text-xl  cursor-pointer font-semibold ${activeIcon === 'search' ? 'text-black' : 'text-gray-600'}`} onClick={() => setActiveIcon('search')} />
      <BsBagHeartFill className={` text-xl  cursor-pointer font-semibold ${activeIcon === 'cart' ? 'text-black' : 'text-gray-600'}`} onClick={() => setActiveIcon('cart')} />
      <AiOutlineUser className={` text-xl cursor-pointer font-semibold ${activeIcon === 'profile' ? 'text-black' : 'text-gray-600'}`} onClick={() => setActiveIcon('profile')} />
    </footer>
  );
}

export default Footer;