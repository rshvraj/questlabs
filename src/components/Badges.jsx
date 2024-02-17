import React from 'react'

const Badges = ({userData,setClickBadge,setShowmodel}) => {
  
  return (
    <div className=' grid grid-cols-3 gap-1  overflow-y-scroll h-[180px] 'style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

    {
        userData?.badgesData?.map((elm)=>
        <img src={elm.imageUrl}  width="60%" className='m-auto cursor-pointer' onClick={()=> {
            
            setClickBadge(elm)
            setShowmodel(true)
        }}/>
        )
    }
      
    </div>
  )
}

export default Badges