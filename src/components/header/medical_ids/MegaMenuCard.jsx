import React from 'react'

const MegaMenuCard = ({cardData}) => {
    
  return (
    <div className='med--card p-2 rounded' style={{width:'13.875rem'}}>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='fs-6 fw-bold'>{cardData.title}</div>
            <img className='card--img' src={cardData.imgUrl} alt="" width={16*3} height={9*3}/>
        </div>
        <div className='font--small fw-normal lh-sm'>{cardData.desc}</div>
    </div>
  )
}

export default MegaMenuCard
