// src/components/Services.js
import React from 'react';
import { FaBriefcase, FaCode, FaMobileAlt } from 'react-icons/fa'; // Import icons

const Services = () => {
    return (
        <div className="services bg-light pt-5 pb-5" id="work">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 style={{ fontSize: '48px' }}>SERVICES</h3>
                        <p style={{ fontSize: '16px', color: '#4E4E4E' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p ><div className="line"></div>
                </div>
                <div className="col-4 col-sm-12 col-lg-4 mt-5">
                    <div className="box bg-white m-sm-auto" style={{ width: '25rem', borderRadius: '10px', padding: '20px 20px', boxShadow: '5px 5px 10px rgb(203, 202, 202)' }}>
                        <FaBriefcase style={{ fontSize: '40px', textAlign: 'center' }} />
                        <div className="box-text text-center">
                            <h3 style={{ fontSize: '22px' }}>WEB DESIGN</h3>
                            <p style={{ fontSize: '16px', color: '#4E4E4E' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-sm-12 col-lg-4 mt-5">
                    <div className="box bg-white m-sm-auto" style={{ width: '25rem', borderRadius: '10px', padding: '20px 20px', boxShadow: '5px 5px 10px rgb(203, 202, 202)' }}>
                        <FaCode style={{ fontSize: '40px', textAlign: 'center' }} />
                        <div className="box-text text-center">
                            <h3 style={{ fontSize: '22px' }}>WEB DEVELOPMENT</h3>
                            <p style={{ fontSize: '16px', color: '#4E4E4E' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-sm-12 col-lg-4 mt-5">
                    <div className="box bg-white m-sm-auto" style={{ width: '25rem', borderRadius: '10px', padding: '20px 20px', boxShadow: '5px 5px 10px rgb(203, 202, 202)' }}>
                        <FaMobileAlt style={{ fontSize: '40px', textAlign: 'center' }} />
                        <div className="box-text text-center">
                            <h3 style={{ fontSize: '22px' }}>RESPONSIVE DESIGN</h3>
                            <p style={{ fontSize: '16px', color: '#4E4E4E' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;