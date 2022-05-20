import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



import Menu from './components/templates/Menu';
import Home from './components/Home';
import Footer from './components/templates/Footer';
import Routes from './Routes';


function App() {
  return (
    <BrowserRouter>

    <div>
        {/* Add Menu Component */}
        <Menu />
        <Routes />
       < Footer />

    </div>
    </BrowserRouter>

  );
}

export default App;

