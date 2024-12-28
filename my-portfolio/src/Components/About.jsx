// src/components/About.js
import React from 'react';
import { FaUser , FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons

const About = () => {
    return (
        <div className="aboutme pt-5 bg-light" id="about">
            <div className="container bg-white pt-5 pb-5" style={{ boxShadow: '5px 5px 10px rgb(203, 202, 202)' }}>
                <div className="row">
                    <div className="col-6 col-sm-12 col-lg-6">
                        <div className="row ms-5 ms-sm-0">
                            <div className="col-5 col-sm-7">
                                <b><FaUser  /> Name: </b><span>Aditya Jagdev</span><br /><br />
                                <b><FaEnvelope /> Email: </b><span>adityajagdev0511@gmail.com</span><br /><br />
                                <b><FaPhone /> Phone: </b><span>+91 93288 35113</span>
                            </div>
                            {/* Skills section remains unchanged */}
                        </div>
                    </div>
                    {/* About me section remains unchanged */}
                </div>
            </div>
        </div>
    );
};

export default About;