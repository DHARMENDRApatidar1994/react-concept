

import React,{useState,useEffect} from 'react'
import { event } from "./OnClickShowData";
import './OnClickShowDetail.css'
import { useNavigate } from 'react-router-dom';


const OnClickShowDetail = () => {
    const navigate = useNavigate();
    const [ivent, setIvent] = useState(event);
     
  return (
    <div className='py-5'>
        
          <h1 className='mt-5 py-3 text-center'>UPCOMING EVENT</h1>
         

        <div className='box1'>
        {ivent.map((ivent, index) => (

            <div className='box1img' key={index}>
                
                <img src={`${ivent.img}`} alt=""  />
                <div className='box1info'>
                    <div>
                <h2>{ivent.date}</h2>
                </div>
                <div className='box1infoname'>
                <h1>{ivent.title}</h1>
                <h6>{ivent.location}</h6>
                </div>
                <button onClick={()=>{
                  // console.log("hello", index);
                  
                  navigate(`/showdatadetail/${index}`)
                }}>MORE DETAIL</button>
                </div>

            </div>
             ))}
        </div>
    </div>
  )
}

export default OnClickShowDetail