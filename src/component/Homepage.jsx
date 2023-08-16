import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='d-flex justify-content-evenly mt-5  '>
       <button className='btn btn-primary '> <Link className='text-light' to='/imageslide'>Image Gallery Slider infinite</Link></button>
        <button className='btn btn-primary'><Link className='text-light' to='/slideonclick'>Slider with click Also</Link></button>
        <button className='btn btn-primary'><Link className='text-light' to='/event'>Map method and and show their detail</Link></button>
        <button className='btn btn-primary'><Link className='text-light' to='/currentimage'>Onclick open current image</Link></button>
    </div>
  )
}

export default Homepage