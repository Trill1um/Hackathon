import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css"
import Report_Icon_red from "../../assets/icons/Report_Icon_red.svg"
import L_F_Icon_red from "../../assets/icons/L_F_Icon_red.svg"
import I_S_Icon_red from "../../assets/icons/I_S_Icon_red.svg"
import About_Us_Icon_red from "../../assets/icons/About_Us_Icon_red.svg"
import yellow_check_Icon from "../../assets/icons/yellow_check_Icon.svg"
import logo_Icon_white from "../../assets/icons/logo_Icon_white.svg"
import Home_Icon_Footer from "../../assets/icons/Home_Icon_Footer.svg"
import Report_Icon_Footer from "../../assets/icons/Report_Icon_Footer.svg"
import L_F_Icon_Footer from "../../assets/icons/L_F_Icon_Footer.svg"
import I_S_Icon_Footer from "../../assets/icons/I_S_Icon_Footer.svg"
import About_Us_Icon_Footer from "../../assets/icons/About_Us_Icon_Footer.svg"
import Hero_Image from "../../assets/images/Hero_Image.png"
import Facebook_Icon from "../../assets/icons/Facebook_Icon.svg"
import GitHub_Icon from "../../assets/icons/GitHub_Icon.svg"
import Google_Icon from "../../assets/icons/Google_Icon.svg"
import LinkedIn_Icon from "../../assets/icons/LinkedIn_Icon.svg"
import Header_Hamburger from "../../assets/icons/Header_Hamburger.svg"
import Header_Logo_Icon from "../../assets/icons/Header_Logo_Icon.svg"

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);
  console.log(data)
  return (
    <div id='Base'>
        <div className="header">
            <div id="Header_Content">
            <div className="header-hamburger">
                <img id="hero_image" alt="menu" src={Header_Hamburger} />
            </div>
            <Link className="header-logo" to="/">
                <img id="hero_image" alt="campus logo" src={Header_Logo_Icon} />
                <div className="header-logo-text">CAMPUS.TRACKR</div>
            </Link>
            </div>
        </div>
        <div id='Body'>
            <div id='Hero'>
                <img id="hero_image" alt="campus" src={Hero_Image}/>
                <div id='Hero_SubHeading' className="SubHeading">
                    <span className="red_text">Find</span> it. <span className="yellow_text">Fix</span> it.<span className="blue_text"> Fast</span>.
                </div>
                <div id='Hero_Heading' className="heading1">
                    <span className="red_text">Empower</span> Your Campus: <span className="yellow_text">Report</span> Issues & <span className="blue_text">Reclaim</span> Lost Items
                </div>
                <div id='Hero_Line'></div>
            </div>
            <div id='Below_Hero_Description' className="BodyText">
                Join fellow students in keeping our campus safe and connected. Easily report infrastructure problems or post about lost and found items—all in one place.
            </div>
            <div id='Options_all'>
                <div className="options">
                    <div id="options_content">
                        <img className="options_icon" alt="Options report icon" src={Report_Icon_red}/>
                        <div className="options_text">   
                            <div>
                                <span className="options_text_title1 heading2">File a </span>
                                <span className="red_text heading2">Report</span>
                            </div>
                            <div className="options_text_body BodyText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </div>
                            <div className="options_text_list">
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon}/>
                                    <div className="options_text_listX_text BodyText">Report Broken Infrastructure</div>
                                </div>
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon}/>
                                    <div className="options_text_listX_text BodyText">Report Lost Item</div>
                                </div>
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon} />
                                    <div className="options_text_listX_text BodyText">Report Found Item</div>
                                </div>
                            </div>
                        </div>
                        <div className="options_button">
                            <div className="blue_text SubHeading">LEARN MORE</div>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div id="options_content">
                        <img className="options_icon" alt="Options report icon" src={L_F_Icon_red}/>
                        <div className="options_text">   
                            <div>
                                <span className="heading2 red_text">Lost </span>
                                <span className="heading2">and </span>
                                <span className="blue_text heading2">Found</span>
                            </div>
                            <div className="options_text_body BodyText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </div>
                            <div className="options_text_list">
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon}/>
                                    <div className="options_text_listX_text BodyText">Find Your Lost Items</div>
                                </div>
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon} />
                                    <div className="options_text_listX_text BodyText">Hassle Free</div>
                                </div>
                            </div>
                        </div>
                        <div className="options_button">
                            <div className="blue_text SubHeading">LEARN MORE</div>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div id="options_content">
                        <img className="options_icon" alt="Options report icon" src={I_S_Icon_red}/>
                        <div className="options_text">   
                            <div>
                                <span className="heading2">Infrastructure </span>
                                <span className="yellow_text heading2">Status</span>
                            </div>
                            <div className="options_text_body BodyText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </div>
                            <div className="options_text_list">
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon}/>
                                    <div className="options_text_listX_text BodyText">Look out for Unstable Infrastructure</div>
                                </div>
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon}/>
                                    <div className="options_text_listX_text BodyText">Spread Awareness</div>
                                </div>
                            </div>
                        </div>
                        <div className="options_button">
                            <div className="blue_text SubHeading">LEARN MORE</div>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div id="options_content">
                        <img className="options_icon" alt="Options report icon" src={About_Us_Icon_red}/>
                        <div className="options_text">   
                            <div>
                                <span className="red_text heading2">About </span>
                                <span className="blue_text heading2">Us</span>
                            </div>
                            <div className="options_text_body BodyText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </div>
                            <div className="options_text_list">
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon}/>
                                    <div className="options_text_listX_text BodyText">Meet the Team</div>
                                </div>
                                <div className="options_text_listX">
                                    <img className="options_text_listX_icon" alt="Options text" src={yellow_check_Icon}/>
                                    <div className="options_text_listX_text BodyText">Feel Free to Reach Out</div>
                                </div>
                            </div>
                        </div>
                        <div className="options_button">
                            <div className="blue_text SubHeading">LEARN MORE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-logo">
                <img className="img" alt="Footer content logo" src={logo_Icon_white}/>

                <div className="text-wrapper heading1">CAMPUS.TRACKR</div>
                </div>

                <div className="div SOCIALS">
                    <img className="footer-content-6" alt="Footer content" src={Google_Icon}/>
                    <img className="footer-content-6" alt="Footer content" src={Facebook_Icon}/>
                    <img className="footer-content-6" alt="Footer content" src={GitHub_Icon}/>
                    <img className="footer-content-6" alt="Footer content" src={LinkedIn_Icon}/>


                </div>

                <div className="footer-content-2">
                    <div className="footer-content-3">
                        <div className="footer-content-4">

                            <Link className="footer-content-5" to="/">
                                <img className="footer-content-6" alt="Footer content" src={Home_Icon_Footer}/>
                                <div className="footer-content-7">Home</div>
                            </Link>
                            <Link className="footer-content-5" to="/lost-and-found">                                <img className="footer-content-6" alt="Footer content" src={L_F_Icon_Footer}/>
                                <div className="footer-content-7">Lost &amp; Found</div>
                            </Link>
                        </div>

                        <div className="footer-content-9">
                            <Link className="footer-content-5" to="/reports">                                <img className="footer-content-6" alt="Footer content" src={Report_Icon_Footer}/>
                                <div className="footer-content-7">Report</div>
                            </Link>
                            <Link className="footer-content-5" to="/infrastructure-status">                                <img className="footer-content-6" alt="Footer content" src={I_S_Icon_Footer} />
                                <div className="footer-content-7">Infrastructure</div>
                            </Link>
                        </div>
                    </div>

                    <Link className="footer-content-5" to="/about">                        <div className="footer-content-5">
                            <img className="footer-content-6" alt="Footer content" src={About_Us_Icon_Footer}/>
                            <div className="footer-content-7">About Us</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Home