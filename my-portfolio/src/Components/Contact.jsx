// src/components/Contact.js
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

import { BsLinkedin } from "react-icons/bs";


const Contact = () => {
    return (
        <div className="last pb-5" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-box">
                            <div className="container">
                                <div className="row p-2">
                                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 mt-5">
                                        <h3>Get in Touch</h3>
                                        <div className="line1"></div>
                                        <p style={{ fontSize: '1.25rem', color: '#4E4E4E' }} className="mt-4">A full-stack developer is a well-rounded professional proficient in both front-end and back-end development.</p>
                                        <div className="icons">
                                            <FaMapMarkerAlt className="text-primary mt-2" />&nbsp;&nbsp;D/204, Sai Avenue Dindoli Surat <br />
                                            <FaPhone className="text-primary mt-2" />&nbsp;&nbsp;+91 93288 35113<br />
                                            <FaEnvelope className="text-primary mt-2" />&nbsp;&nbsp;adityajagdev0511@gmail.com
                                        </div>
                                        <div className="icons1">
                                       
                                            <a href="https://github.com/adityaj0511"><BsGithub  style={{height:"30px",width:"30px"}}/></a>
                                            <a href="https://medium.com/@adityajagdev0511"><BsMedium style={{height:"35px",width:"35px",paddingLeft:"20px"}}/></a>
                                            <a href="https://www.linkedin.com/in/aditya-jagdev-05a646330/"><BsLinkedin style={{height:"35px",width:"35px",paddingLeft:"15px"}}/></a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;