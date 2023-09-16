import React from 'react'
import './SlideOneRow.css'
import top1 from '../assets/Images/topcourse1.webp'
const SlideOneRow = () => {
  return (
    <div>
    <div className='oneline'>
        <div className='twoline'>
        <img className='ms-3 mt-2' src={top1} width={480} height={300} alt="" />
        </div>
        <div className='twoline'>
        <img className='ms-3 mt-2' src={top1} width={480} height={300} alt="" />
        </div>
        <div className='twoline'>
        <img className='ms-3 mt-2' src={top1} width={480} height={300} alt="" />
        </div>
        <div className='twoline'>
        <img className='ms-3 mt-2' src={top1} width={400} height={300} alt="" />
        </div>
        <div className='twoline'>
        <img className='ms-3 mt-2' src={top1} width={300} height={300} alt="" />
        </div>
        <div className='twoline'>
        <img className='ms-3 mt-2' src={top1} width={300} height={300} alt="" />
        </div>
        
    </div>
    </div>
  )
}

export default SlideOneRow