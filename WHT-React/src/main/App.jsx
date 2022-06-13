import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';

// import Nav from '../component/templates/Nav'
import Routes from './Routes'
import Footer from '../component/templates/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <Nav /> */}
      <Routes />
      <Footer />  
      </div>
      
    </BrowserRouter>

  );
}

export default App;
