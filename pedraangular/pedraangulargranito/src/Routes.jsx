import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";





export default props => (

    <Routes>
        <Route path='/' element={<Home />}/>
        
    </Routes>
);  