import React from 'react'
import './ShowDataDetail.css'
import { event } from './OnClickShowData';
import { useNavigate, useParams } from 'react-router-dom';





const ShowDataDetail = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);
    const obj = event[id];
    console.log(obj)
    console.log(event);
    return (
        <div>
          
            <div className='event1'>
                <h1>{obj.title}</h1>

                <div className='event1-1'>
                    <div className='event1-11'>
                      <div className='event1-21'>
                       
                        <div className='venue'>
                            <h4><i className="ri-map-pin-line"></i>{obj.location}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{obj.date}</h4>
                            <h4><i className="ri-calendar-2-line"></i>{obj.time}</h4>
                        </div>
                   
               </div>
               </div>
               <div className='event1-2'>
                <div className='event1-2-1'>
                   <img src={obj.img} alt="" />
                   <div className='about'>
                    <h1>About Event</h1>
                    <h3>{obj.heading}</h3>
                    <p>{obj.evntdetail}</p>
                   </div>
                </div>
               </div>
               <div className='tickets '>
                        <h3 className='ms-5'>{obj.price}</h3>
                        <button onClick={()=>{
                  // console.log("hello", index);
                  
                  navigate(`/Detailform/${id}`)
                }}>BUY TICKET</button>
                     </div>

                     <h1 className='rocking'>OUR ROCKING PERFORMER</h1>
                     <div className='perfomer'>
                        <img src={obj.perfomer1} alt="" />
                        <img src={obj.perfomer2} alt="" />
                        <img src={obj.perfomer3} alt="" />
                        <img src={obj.perfomer4} alt="" />
                     </div>

                     <div className='address'>
                        <div className='address-left'>
                            <h2>FIND US ON GOOGLE MAP</h2>
                            <img src={obj.map} alt="" />
                        </div>
                        <div className='address-right'>
                            <h2>TRAVELING INFORMATION</h2>
                            <div className='vanues '>
                            <i className="ri-map-pin-line "></i>
                            <div>
                                <h4>Venue</h4>
                                <p>{obj.location}</p>
                            </div>
                            </div>

                            <div className='transport'>
                            <i className="ri-flight-takeoff-line"></i>
                            <div className='transport1'>
                                <h4>Transport</h4>
                                <div className='bus'>
                                <p className=''>Bus Station</p>
                                <p className=''>{obj.bus}</p>
                                </div>
                                <div className='bus'>
                                <p>Rail Station</p>
                                <p className=''>{obj.rail}</p>
                                </div>
                                <div className='bus'>
                                <p>Airport</p>
                                <p className=''>{obj.airport}</p>
                                </div>
                            </div>
                            </div>

                            <div className='hotel '>
                            <i className="ri-hotel-line"></i>
                            <div className='transport1'>
                                <h4>Hotel and Restaurant</h4>
                                <div className='bus'>
                                <p>Hotel</p>
                                <p className=''>{obj.hotel}</p>
                                </div>
                                <div className='bus'>
                                <p>Restaurant</p>
                                <p className=''>{obj.restaurant}</p>
                                </div>
                            </div>
                            </div>

                        </div>
                     </div>

                   
                    </div>
            </div>
                  
        </div>
    )
}

export default ShowDataDetail