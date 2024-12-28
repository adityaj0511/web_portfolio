// src/App.js
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const App = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default App;