import React, { useRef, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import  gsap  from 'gsap';
import "./SideDashboard.css" 
import { useNavigate } from 'react-router-dom';

const SideDashboard = () => {
    const navigate = useNavigate()

    const [flag, setFlag] = useState(1);
  const first = useRef (null);
  const rightNAV = (e) => {
    e.preventDefault();
    if (flag === 1) {
      if(window.innerWidth<=600){
        gsap.to(first.current, {
          left: "0%",
          duration: 1,
        });
      }else {
        gsap.to(first.current, {
          left: "0%",
          duration: 1,
        });
      }
      setFlag(0);
    } else {
      if(window.innerWidth<=600){
        gsap.to(first.current, {
          left: "-250px",
          duration: 1,
        });
      }else {
        gsap.to(first.current, {
          left: "-15%",
          duration: 1,
        });
      }

      setFlag(1);
    }
  };

    return (
        <div>
            <div id="main1">
    <div className="rightNav bg-dark text-light"ref={first} >
      <h2 className="dashmargin" style={{marginLeft: "20px"}} onClick={rightNAV}>DASHBOARD <i className="ri-menu-4-line lg-ms-3 ms-5"></i></h2>
      <div className="txtdash">
            <Sidebar>
                <Menu
                   menuItemStyles={{
                    button: {
                      color: "white",
                      backgroundColor: "black",
                      [`&.active`]: {
                        backgroundColor: 'red',
                        color: 'blue',
                      },
                    },
                  }} 
                >
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem onClick={()=>{
                        navigate('/')
                    }}> Home </MenuItem>
                </Menu>
            </Sidebar>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SideDashboard