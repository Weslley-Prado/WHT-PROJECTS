import './Nav.css'
import logo from '../../assets/img/logwht.png'
import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from "react"



// export default props => 
//         <aside className="menu-area">
//            <nav className="navbar navbar-expand-lg fixed-top navbar-dark menu" >
//            
//            <Link to="/" className="menuStyle">
//            <i className="fa fa-home"></i> Home
//            </Link>      
//            <Link to="/about" className="menuStyle">    
//            <i className="fa fa-building"></i> Empresa
//            </Link>
//            <Link to="/services" className="menuStyle">
//            <i className="fa fa-briefcase" ></i> Serviços
//            </Link>
//            <Link to="/Time" className="menuStyle">
//            <i className="fa fa-handshake-o" ></i> Time
//            </Link>
//            
            
           
//             </nav>     
//         </aside>

export default function Navbar() {
   const [isNavExpanded, setIsNavExpanded] = useState(false)
 
   return (
    <aside className='menu-area'>
     <nav className=" navigation navbar navbar-expand-lg fixed-top navbar-dark menu">
       
       <Link to="/" className="logo navbar-brand">
            <img src = {logo} alt="logo" />
            </Link>
       <button
         className="hamburger"
         onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}
       >
         {/* hamburger svg code... */}
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
       </button>
       <div
         className={
           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
         }
       >
         <ul>
           <li>
             <Link to="/" className="menuStyle">
           <i className="fa fa-home"></i> Home </Link>
           </li>
           <li>
           <Link to="/about" className="menuStyle">    
            <i className="fa fa-building"></i> Empresa
           </Link>
           </li>
           <li>
           <Link to="/services" className="menuStyle">
            <i className="fa fa-briefcase" ></i> Serviços
          </Link>           
          </li>
          <li>
          <Link to="/Time" className="menuStyle">
            <i className="fa fa-handshake-o" ></i> Time
            </Link>
          </li>
          <li>
          <Link to="/contact" className="menuStyle">
           <i className="fa fa-envelope" ></i> Contato
            </Link>           
                      
          </li>
         </ul>
       </div>
     </nav>
     </aside>
   );
 }
        