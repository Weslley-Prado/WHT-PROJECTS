import React from 'react'
import './Footer.css'
import logo from '../../img/logo.png';



export default props =>

    <footer className="footer">

          <div class="col-md-12">
              <div className="Principal"> 
              <img src={logo} alt="logo" /> 
 </div>           
            <div className='pDivFooter' >
            <p className='paragrafoFooter'> Desenvolvido por  <a href="https://westhightechnology.com.br/" target="_blank">  WHT - West High Technology</a> &copy; 2022</p>
            </div>

          </div>
</footer>

        