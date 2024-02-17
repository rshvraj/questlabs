import React, { useState } from "react";
import Membership from "./Membership";
import Badges from "./Badges";
import Points from "./Points";
const filterdata = ["Membership", "Badges", "Point History"];
const Card = ({ userData,setClickBadge,setShowmodel}) => {
  console.log(userData);
  const [active, setActive] = useState("Badges");
  return (
    <div  className="relative rounded-lg  mt-[6rem] bg-white  w-full h-[80vh]">
      <div className=" absolute border-2 box-shadow -mt-[13%]  bg-gray-200 w-[78px] h-[78px] rounded-full overflow-hidden ml-[50%] transform translate-x-[-50%] ">
        <img
          src={userData?.profileurl}
          alt=""
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>

<div className="absolute top-2 w-full">
      <h2 className=" text-xl text-center font-bold mt-10">{userData?.name}</h2>

      <div className="mt-4 flex justify-around py-3">
        <div className="bg-[#7B68EE] w-[75px] py-3 rounded-lg text-white text-center">
          <p className="font-semibold text-xl">{userData?.points}</p>
          <p className="text-[10px] mt-1">Points</p>
        </div>
        <div className="bg-[#7B68EE] w-[75px] py-3 rounded-lg text-white text-center">
          <p className="font-semibold text-xl">#{userData?.rank}</p>
          <p className="text-[10px] mt-1">Rank</p>
        </div>
        <div className="bg-[#7B68EE] w-[75px] py-3 rounded-lg text-white text-center">
          <p className="font-semibold text-xl">{userData.level}</p>
          <p className="text-[10px] mt-1">Level</p>
        </div>
      </div>

      <div   className="  mt-4 h-[full]">
        <div className="flex gap-4 items-center px-2 w-full">
          {filterdata.map((elm) => (
            <div
              className={`w-full h-8 font-semibold cursor-pointer relative ${
                active === elm ? "text-[#7B68EE]" : "text-gray-700 opacity-50"
              }`}
              onClick={() => setActive(elm)}
            >
              <p className="text-[13px] text-center">{elm}</p>
              {active === elm && (
                <span className="absolute inset-x-0  bottom-0 bg-[#7B68EE] w-full h-[2px]"></span>
              )}
            </div>
          ))}
        </div>
        <div  className="mt-4 w-full ">
          {active === "Membership" && <Membership />}
          {active === "Badges" && <Badges userData={userData} setClickBadge={setClickBadge} setShowmodel={setShowmodel} />}
          {active === "Point History" && <Points userData={userData} />}
        </div>
      </div>
      </div>

    </div>
  );
};

export default Card;