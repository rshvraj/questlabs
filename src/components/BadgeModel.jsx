import React from 'react';
import { IoClose } from 'react-icons/io5';


const BadgeModel = ({ badge, setShowmodel }) => {
  return (
    <div className="absolute w-[100%] h-[100%]  top-0 bottom-0 right-0 left-0   inset-0 z-50 flex justify-center items-center ">
 <div className="absolute top-0 bottom-0 right-0 left-0 z-10 backdrop-filter backdrop-blur-md bg-gradient-to-b from-black to-black-400 opacity-80"></div>

      <div className="bg-white w-[300px]  z-50 rounded-lg shadow-lg px-4 py-6 ">
        <div className="flex justify-end">
          <button onClick={()=>setShowmodel(false)} className="text-gray-500 hover:text-gray-700">
            <IoClose />
          </button>
        </div>

        <img src={badge.imageUrl} alt={badge.name} className="w-[70px] h-[70px]  mx-auto " />
        <h1 className="text-xl font-semibold text-center mt-4">Badge unlocked⭐</h1>
        <p className="text-[13px] opacity-50 text-gray-600 text-center mt-2">🎉Level up! You earned a shiny new badge.</p>
      </div>
    </div>
  );
}

export default BadgeModel;