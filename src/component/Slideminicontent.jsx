import React, { useState } from "react";
import "./Slideminicontent.css";
import { useNavigate } from "react-router-dom";
import { gallery } from "./Slidemi nicontentdata";


const Slideminicontent = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (step) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + step + gallery.length) % gallery.length;
      return newIndex;
    });
    console.log(currentImageIndex);
  };

  return (
    <div className="courses">
      <h1 className="topcourse">Recommended Articles</h1>
      <p className="topcourse fs-5">
       To know more about loans, processes and much more
      </p>
      <div className="image-sliders">
        <div className="coursediv">
          <div className="maincoursediv">
            <div className="topcourseimage">
            <img src={gallery[currentImageIndex].img} alt="" />
            </div>

           
            <p>{gallery[currentImageIndex].para} <span className="text-primary">....Read More</span></p>
            <div className="timeprice d-flex justify-content-evenly">
              <h6 className="">
                18 Nov 2021
              </h6>
              <h4 className="">
                5 min read
              </h4>
            </div>
          </div>
          <div className="maincoursediv">
          <div className="topcourseimage">
            <img src={gallery[(currentImageIndex+1)%gallery.length].img} alt="" />
             </div>
           
            <p>{gallery[(currentImageIndex+1)%gallery.length].para} <span className="text-primary">....Read More</span></p>

            <div className="timeprice d-flex justify-content-evenly">
            <h6 className="">
                18 Nov 2021
              </h6>
              <h4 className="">
                5 min read
              </h4>
            </div>
          </div>
          <div className="maincoursediv">
          <div className="topcourseimage">
            <img src={gallery[(currentImageIndex+2)%gallery.length].img} alt="" />
           </div>
            <p>{gallery[(currentImageIndex+2)%gallery.length].para} <span className="text-primary">....Read More</span></p>
            <div className="timeprice d-flex justify-content-evenly">
            <h6 className="">
                18 Nov 2021
              </h6>
              <h4 className="">
                5 min read
              </h4>
            </div>
          </div>
          <div className="maincoursediv">
          <div className="topcourseimage">
            <img src={gallery[(currentImageIndex+3)%gallery.length].img} alt="" />
           </div>
            <p>{gallery[(currentImageIndex+3)%gallery.length].para} <a href="">....Read More</a></p>

            <div className="timeprice d-flex justify-content-evenly">
            <h6 className="">
                18 Nov 2021
              </h6>
              <h4 className="">
                5 min read
              </h4>
            </div>
          </div>
        </div>

        <div className="slider-controlss">
          <button className="slider-buttons" onClick={() => changeImage(-1)}>
            <i className="ri-arrow-drop-left-line "></i>
          </button>
          <button className="slider-buttons" onClick={() => changeImage(1)}>
            <i className="ri-arrow-drop-right-line "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideminicontent;
