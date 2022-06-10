import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Menu from './components/templates/Menu';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>

    <div>

        {/* Add Menu Component */}
        < Routes />
       

    </div>
    </BrowserRouter>

  );
}

export default App;

