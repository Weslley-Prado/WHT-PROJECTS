import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../component/about/About";
import Contact from "../component/contact/Contact";
import Home from "../component/home/Home";
import Service from "../component/service/Service";
import Website from "../component/websites/Website";
import Time from "../component/time/Time";
import Mobile from "../component/mobile/Mobile";
import WST from "../component/wst/WST";




export default props => (

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/about' element={<About/>} />
        <Route path= '/services' element={<Service/>} />
        <Route path= '/Time' element={<Time/>} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/website' element={< Website />} />
        <Route path='/mobile' element={< Mobile />} />
        <Route path='/wst' element={< WST />} />



    </Routes>
);  