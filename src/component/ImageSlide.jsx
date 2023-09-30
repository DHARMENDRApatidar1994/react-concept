import React from 'react'
import { music } from './ImageSlideData'
import './ImageSlide.css'
import { Link } from 'react-router-dom'


const ImageSlide = () => {
  return (
    <div>
        <div className="main">
        <h4 className="text-center fs-2 text-light">GALLERY</h4>
        <div className="slider">
          <div className="slide-track">
            {music.map((musics, index) => (
              <div className="slide" key={index}>
                <div className="box">
                <img data-aos="zoom-in" src={`${musics.img}`} alt="" />
                </div>
                <Link to='/'><h4 className="mt-2"  >{musics.title}</h4></Link>
              </div> 
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default ImageSlide
