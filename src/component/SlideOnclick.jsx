
import React,{useState, useEffect} from "react";

import "./SlideOnclick.css";
import { gallery } from "./SlideOnclickData";
import { useNavigate } from "react-router-dom";


const SlideOnclick = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (step) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + step + gallery.length) % gallery.length;
      return newIndex;
    });
  };

  useEffect(() => {
    // Automatic slideshow every 1 second
    const interval = setInterval(() => {
      changeImage(1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div>
    
    <div className="image-sliders">
      <img src={gallery[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button className="home" onClick={()=>{
        navigate(`/`)
      }}>Home</button>
      
      

      <div className="slider-controlss">
        <button className="slider-buttons" onClick={() => changeImage(-1)}><i className="ri-arrow-drop-left-line fs-1"></i></button>
        <button className="slider-buttons" onClick={() => changeImage(1)}><i className="ri-arrow-drop-right-line fs-1"></i></button>
      </div>
      </div>


    
         
        
    </div>
  );
};

export default SlideOnclick;
