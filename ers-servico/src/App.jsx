import './App.css';
import Navbar from './components/menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>

  );
}

export default App;
