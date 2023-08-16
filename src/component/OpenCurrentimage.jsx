import React, { useEffect, useState } from 'react'
import { imgArray } from './CurrentData';
import './OpenCurrentimage.css'


const OpenCurrentimage = () => {
    const [show, setShow] = useState(true);
    const [imageIndex, setImageIndex] = useState("");
    // console.log(idd, music);
    const handleClick = (index) => {
      setImageIndex(index);
      setShow(false);
    };
    const slideImage = (step, len) => {
        console.log("len", len);
        const next_index = (imageIndex + step + len) % len;
        console.log(next_index);
        setImageIndex(next_index);
      };
    
      useEffect(() => {
        console.log(imageIndex, "img index");
      }, [imageIndex]);
  return (
    <div>
       
          <div className="musicimage">
            {show && (
              <div className="arraydata">
                {imgArray &&
                  imgArray.map((imgUrl, index) => (
                    <img
                      onClick={() => handleClick(index)}
                      key={index}
                      src={imgUrl}
                      alt=""
                    />
                  ))}
              </div>
            )}

            {!show && (
              <div className="imagedata">
                <div className="imagedata1">
                  <i
                    onClick={() => slideImage(-1,imgArray.length)}
                    className="ri-arrow-drop-left-line fs-1 text-dark"
                  ></i>
                  <img
                    src={imgArray[imageIndex]}
                    alt=""
                    className="bdahoja"
                  />
                  <i
                    onClick={() => slideImage(1,imgArray.length)}
                    className="ri-arrow-drop-right-line fs-1 text-dark"
                  ></i>
                </div>
                <i
                  class="ri-close-circle-line fs-2"
                  onClick={() => setShow(true)}
                ></i>
              </div>
            )}
          </div>
         
    </div>
  )
}

export default OpenCurrentimage