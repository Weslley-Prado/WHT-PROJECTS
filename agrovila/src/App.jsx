import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import Footer from './components/templates/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'


import Navbarmenu from './components/templates/Menu';

function App() {
  return (
    <BrowserRouter>

      <div>
        <Router basename="/">

          {/* Add Menu Component */}
          <Navbarmenu />

          <Home />
        </Router>
        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;