import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
import Pias from "./components/services/servicos/Pia";
import Bancadas from "./components/services/servicos/Bancadas";
import Pisos from "./components/services/servicos/Pisos";
import Piscinas from "./components/services/servicos/Piscina";
import Escadas from "./components/services/servicos/Escadas";




// import Offline from "./components/Offline";
// import Online from "./components/Online";





export default props => (

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/About' element={<About/>} />
        <Route path= '/Pias' element={<Pias/>} />
        <Route path= '/Bancadas' element={<Bancadas/>} />
        <Route path= '/Pisos' element={<Pisos/>} />
        <Route path= '/Piscinas' element={<Piscinas/>} />
        <Route path= '/Escadas' element={<Escadas/>} />






        {/* <Route path='/Contact' element={< Contact />} />
        <Route path='/Online' element={< Online />} />
        <Route path='/Offline' element={< Offline />} />          */}
    </Routes>
);  
