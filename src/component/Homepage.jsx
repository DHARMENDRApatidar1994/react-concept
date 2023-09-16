import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='container d-flex justify-content-evenly flex-wrap mt-5  '>
       <button className='btn btn-primary w-25 ms-2 mt-3 fs-4  '> <Link className='text-light' to='/imageslide'>Image Gallery Slider infinite</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4  '><Link className='text-light' to='/slideonclick'>Slider with click Also</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4  '><Link className='text-light' to='/event'>Map method and and show their detail</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4  '><Link className='text-light' to='/currentimage'>Onclick open current image</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4 '><Link className='text-light' to='/bootstrapnav'>Drop Down Bootstrap Navbar</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4 '><Link className='text-light' to='/sidedashboard'>Side Dashboard and Responsive</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4 '><Link className='text-light' to='/slideleft'>Slide image right to left infinite</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4 '><Link className='text-light' to='/slideimage'>Slide miniimage onclick</Link></button>
        <button className='btn btn-primary w-25 ms-2 mt-3 fs-4 '><Link className='text-light' to='/slideonerow'>Slide one row image</Link></button>
    </div>
  )
}

export default Homepage