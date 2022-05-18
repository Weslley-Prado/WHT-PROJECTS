import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Menu from './components/templates/Menu';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>

    <div>

        {/* Add Menu Component */}
        <Menu />
        < Home />
       

    </div>
    </BrowserRouter>

  );
}

export default App;

