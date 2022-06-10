import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import AboutEnglish from "./components/AboutEnglish";

// import Contact from "./components/Contact";
import Home from "./components/Home";
import HomeEnglish from "./components/HomeEnglish";
import Pias from "./components/services/servicos/Pia";
import Bancadas from "./components/services/servicos/Bancadas";
import Pisos from "./components/services/servicos/Pisos";
import Piscinas from "./components/services/servicos/Piscina";
import Escadas from "./components/services/servicos/Escadas";

import Sinks from "./components/services/services/Sinks";
import Countertops from "./components/services/services/Countertops";
import Floors from "./components/services/services/Floors";
import Pools from "./components/services/services/Pools";
import Stairs from "./components/services/services/Stairs";


// import Offline from "./components/Offline";
// import Online from "./components/Online";





export default props => (

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/HomeEnglish' element={<HomeEnglish />}/>
        <Route path= '/About' element={<About/>} />
        <Route path= '/AboutEnglish' element={<AboutEnglish />} />

        <Route path= '/Pias' element={<Pias/>} />
        <Route path= '/Bancadas' element={<Bancadas/>} />
        <Route path= '/Pisos' element={<Pisos/>} />
        <Route path= '/Piscinas' element={<Piscinas/>} />
        <Route path= '/Escadas' element={<Escadas/>} />

        <Route path= '/Sinks' element={<Sinks/>} />
        <Route path= '/Countertops' element={<Countertops/>} />
        <Route path= '/Floors' element={<Floors />} />
        <Route path= '/Pools' element={<Pools/>} />
        <Route path= '/Stairs' element={<Stairs/>} />





        {/* <Route path='/Contact' element={< Contact />} />
        <Route path='/Online' element={< Online />} />
        <Route path='/Offline' element={< Offline />} />          */}
    </Routes>
);  
