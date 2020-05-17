import React, { useState, useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import {UserContext} from 'context/User';

function Index() {
    const location = useLocation();
    const {user} = useContext(UserContext)
    const activeLink = location.pathname;
    return (
        <div>
            <div className="top-navbar bg-deep-dark">
                <div className="container">
                    <div className="row no-gutters d-flex  px-md-0">
                        <div className="col-lg-12 d-block">
                            <div className="float-left pr-3 d-flex ">
                                <div className=" mr-2 d-flex justify-content-center align-items-center">
                                    <span className="fa fa-map-marker text-info"></span>
                                </div>
                                <a className="text-white" >Nationwide</a>
                            </div>
                            <div className="float-left pr-3 d-flex ">
                                <div className=" mr-2 d-flex justify-content-center align-items-center">
                                    <span className="fa fa-envelope-o text-info"></span>
                                </div>
                                <a className="text-white" href="mailto:info@perpersonpernight.co.uk">info@perpersonpernight.co.uk	</a>
                            </div>
                            <div className="float-left pr-3 d-flex ">
                                <div className=" mr-2 d-flex justify-content-center align-items-center">
                                    <span className="fa fa-phone text-info"></span>
                                </div>
                                <a className="text-white" href="tel:+44 7377172145">24/7 Customer Support</a>
                            </div>
                            <div className="pull-right mt-1 pr-3 d-flex  align-items-center ">
                                <a href="https://www.facebook.com/perpersonpernight/" target="_blank" rel="noopener noreferrer">

                                    <i className="fa fa-lg fa-facebook text-white"></i>
                                </a>
                            </div>
                            <div className="pull-right mt-1 pr-3 d-flex  align-items-center ">
                                <a href="https://www.linkedin.com/company/jv-hub" target="_blank" rel="noopener noreferrer">

                                    <i className="fa fa-lg fa-linkedin text-white"></i>
                                </a>
                            </div>
                            <div className="pull-right mt-1 pr-3 d-flex  align-items-center">
                                <a href="https://www.instagram.com/perpersonpernight" target="_blank" rel="noopener noreferrer">

                                    <i className="fa fa-lg fa-instagram text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white text-uppercase " id="mainNav">
                <div className="container">
                    <Link to="/">
                        <div className="navbar-brand ">
                            <img src={require('../../assets/images/logo/logo-menu.png')} />
                        </div>
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-dark text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse mt-1" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
                            <Link to="/">
                                <li className={`nav-item mx-0 mx-lg-1  ${activeLink === '/' ? "link-active" : ""}`}>
                                    <span className="nav-link   rounded js-scroll-trigger" >Home</span>
                                </li>
                            </Link>
                            <Link to="/about">
                                <li className={`nav-item mx-0 mx-lg-1  ${activeLink === '/about' ? "link-active" : ""}`}>
                                    <span className="nav-link  rounded js-scroll-trigger" >About us</span>
                                </li>
                            </Link>
                            <Link to="/contact">

                                <li className={`nav-item mx-0 mx-lg-1  ${activeLink === '/contact' ? "link-active" : ""}`}>
                                    <span className="nav-link  rounded js-scroll-trigger" >Contact</span>
                                </li>
                            </Link>
                           <Link to="/booking">
                            <li>
                                
                            <div className="btn-book " data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">  <i className="fa fa-paper-plane" aria-hidden="true"></i> Book Now</div>

                            </li>
                            </Link>
                            
                                <li className={`nav-item mx-0 mx-lg-1`}>
                                    <a href="https://pppn.co.uk/dashboard/">
                                        <span className="nav-link  rounded js-scroll-trigger" >{user ? "My account" : "Sign In"}</span>
                                    </a>                                   
                                </li>
                                <li className={`nav-item mx-0 mx-lg-1`}>                                    
                                    {user &&<a onClick={()=> {localStorage.removeItem('tokenpppn');sessionStorage.removeItem('tokenpppn'); window.location.reload()}}>
                                        <span className="nav-link  rounded js-scroll-trigger" >Sign Out</span>
                                    </a>}
                                </li>
                            
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>

    )
}

export default Index;