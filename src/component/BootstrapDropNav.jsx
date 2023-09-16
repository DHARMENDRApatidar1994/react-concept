import React from 'react'
import { Link } from 'react-router-dom'



const BootstrapDropNav = () => {
    return (
        <div>
            
            <nav class="w-100 navbar navbar-expand-lg bg-body-tertiary " style={{position:"fixed", zIndex:"999"}}>
            
                <div class="container-fluid">
                <h1 className='w-25 opacity-50'>LOGO</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            
                            <li class="nav-item dropdown">
                                <Link class="nav-link active" to="/" role="button"> HOME</Link>
                               
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active" to="" role="button">ABOUT US</Link>
                               
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SERVICES
                                </a>
                                <ul class="dropdown-menu">
                                    <Link to="" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">Our Service</h6></li></Link>
                                    <Link to="" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">Our Process</h6></li></Link>

                                </ul>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <Link class="nav-link active" to="" role="button">PORTFOLIO</Link>
                               
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active" to="" role="button">GALLERY</Link>
                               
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active" to="" role="button">BLOG</Link>
                               
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active" to="" role="button">CONTACT US</Link>
                               
                            </li>

                           

                           

                            


                        </ul>
                    </div>
                </div>
            </nav>
            {/* instruction */}
        
        </div>
    )
}

export default BootstrapDropNav