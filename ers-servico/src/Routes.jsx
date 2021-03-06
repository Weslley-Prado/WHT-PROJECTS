import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import QuemSomos from "./components/quem-somos/Quem-somos";
import Orcamento from "./components/orcamento/Orcamento";
import TrabalheConosco from "./components/trabalhe-conosco/Trabalhe-conosco";
import Servicos from "./components/servico/Servicos";





export default props => (

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quem-somos' element={<QuemSomos />}/>
        <Route path='/servicos' element={<Servicos />}/> 
        <Route path='/orcamento' element={<Orcamento />}/>      
        <Route path='/trabalhe-conosco' element={<TrabalheConosco />}/>      

        <Route path='/contato' element={<Contact />}/>      
     


    </Routes>
);  