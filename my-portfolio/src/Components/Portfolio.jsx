// src/components/Portfolio.js
import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio bg-light pt-5 pb-5" id="port">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pb-5">
                        <h3 style={{ fontSize: '48px' }}>PORTFOLIO</h3>
                        <p style={{ fontSize: '16px', color: '#4E4E4E' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div className="line"></div>
                    </div>
                    <div className="col-4 col-sm-12 mt-sm-5 mt-lg-0">
                        <div className="card p-img">
                            <img src="https://cdn.sanity.io/images/e5o7qwlw/production/21167919160da9bc5f578c160b76e8b66b666860-4500x2989.jpg?w=1920&q=75&auto=format" alt="" style={{ height: '260px' }} />
                        </div>
                        <div className="p-text d-flex bg-white p-3">
                            <div className="p-content">
                                <h4>Aether_Faishon</h4>
                                <span className="text-primary"><a href="https://aether-fashions.netlify.app/" style={{ textDecoration: 'none' }}>Web Design</a></span>
                            </div>
                            <div className="p-icon ms-5">
                                <i className="bi bi-plus-circle text-primary fs-1 ms-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-12 mt-sm-5 mt-lg-0">
                        <div className="card p-img">
                            <img src="https://happenstance.com/storage/media/FZICcC8iyBqLASfKC7ef5U6TQCw6Qn3pTwVtXjnt.webp" alt="" style={{ height: '260px' }} />
                        </div>
                        <div className="p-text d-flex bg-white p-3">
                            <div className="p-content">
                                <h4>Happentance_Clone</h4>
                                <span className="text-primary"><a href="https://github.com/adityaj0511/Happentnace-Web-Clone" style={{ textDecoration: 'none' }}>Web Design</a></span>
                            </div>
                            <div className="p-icon ms-5">
                                <i className="bi bi-plus-circle text-primary fs-1 ms-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-12 mt-sm-5 mt-lg-0">
                        <div className="card p-img">
                            <img src="https://elements-resized.envatousercontent.com/elements-cover-images/4a6ae7e2-3b15-48b6-bb54-b8063535990d?w=2038&cf_fit=scale-down&q=85&format=auto&s=aba2bec5a680205f456c8271bc72c80fea9461df097a6a0444860b552206e9e6" alt="" style={{ height: '260px' }} />
                        </div>
                        <div className="p-text d-flex bg-white p-3">
                            <div className="p-content">
                                <h4>Landing_page</h4>
                                <span className="text-primary"><a href="https://github.com/adityaj0511/landing_page" style={{ textDecoration: 'none' }}>Web Design</a></span>
                            </div>
                            <div className="p-icon ms-5">
                                <i className="bi bi-plus-circle text-primary fs-1 ms-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;