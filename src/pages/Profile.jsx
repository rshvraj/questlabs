import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Card from "../components/Card";
import BadgeModel from "../components/BadgeModel";

const Profile = () => {
    const [userData,setuserData]= useState({
        name:null,
        profileurl:null,
        rank:null,
        points:null,
        level:null,
        pointsHistory:null,
        badgesData:null

    })
    const[clickedBadge,setClickBadge]  =  useState("");
    const [showmodel,setShowmodel] =  useState(false);
 
 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const userId = "u-a2399489-9cd0-4c94-ad12-568379202b08";
            const entityId = "e-0000000000";
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc";
            const apiKey = "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be";
    
            const urls = [
              `https://staging.questprotocol.xyz/api/users/${userId}`,
              `https://staging.questprotocol.xyz/api/entities/${entityId}/users/${userId}/xp`,
              `https://staging.questprotocol.xyz/api/entities/${entityId}/users/${userId}/xp-leaderboard-rank`,
              `https://staging.questprotocol.xyz/api/entities/${entityId}/users/${userId}/xp-history`,
              `https://staging.questprotocol.xyz/api/entities/${entityId}/users/${userId}/badges`
            ];
    
            const responses = await Promise.all(
              urls.map(url =>
                fetch(url, {
                  headers: {
                    "token": token,
                    "apikey": apiKey,
                    "userid":userId,
                  }
                })
              )
            );
    
            const data = await Promise.all(responses.map(response => response.json()));
            setuserData({...userData, name:data[0].data.name,profileurl:data[0].data.imageUrl,points:data[1].data, level:data[1].tier,rank:data[2].data.position,pointsHistory:data[3].data,badgesData:data[4].data })
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    

        fetchData();
      }, []);

       

  return (
    <div style={{boxSizing:"border-box"}} className=" px-3 bg-[#7B68EE] w-[100%] pt-4 h-[100%]  ">
      <div>
        <div className=" inline-block bg-[#8877ef] p-[5px] rounded-md float-left">
          <MdOutlineKeyboardArrowLeft color="white" size={20} />
        </div>

        <h2 className="text-xl text-center mr-8  text-white font-semibold">
          Profile
        </h2>
      </div>

      <Card userData={userData} setClickBadge={setClickBadge} setShowmodel={setShowmodel} />
      {
        showmodel && <BadgeModel  badge={clickedBadge}  setShowmodel={setShowmodel} />
      }

    </div>
  );
};

export default Profile;