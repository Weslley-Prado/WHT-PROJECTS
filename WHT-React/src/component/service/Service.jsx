import React from 'react'
import './Service.css'
import ERP from '../../assets/img/erp.jpg'
import WebSite from '../../assets/img/web-site.jpg'
import Mobile from '../../assets/img/app-mobile.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../templates/Nav'


export default props =>
<div>
   <Navbar />
    <div id="services" >
    <div class="container">
      <h3 class="main-title">Serviços</h3>
      <div class="row">
        <div class="col-lg-4">
          <img src={WebSite} class="bd-placeholder-img rounded-circle" width="140" height="140"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice" focusable="false" />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em"></text>
          <h3 className="titulo">Web Site</h3>
          <p class="lead paragrafo">Torne seu negócio mais vísivel por ter um web site oficial de sua empresa. Um site pode aumentar suas vendas de produtos ou serviços.  </p>
          <p className="buttonParagrafo"><Link to="/website" class="btn btn-secondary">Saiba mais &raquo;</Link></p>
        </div>
        <div class="col-lg-4">
          <img src={Mobile} class="bd-placeholder-img rounded-circle" width="140" height="140"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice" focusable="false" />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em"></text>
          <h3 className="titulo">Mobile App</h3>
          <p class="lead paragrafo">Faça seu negócio ficar na palma das mãos de seus clientes. E, ainda temos modelos que ajuda não gestão da sua empresa.</p>
          <p className="buttonParagrafo"><Link to="/mobile" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>
        </div>
        <div class="col-lg-4">
          <img src={ERP} class="bd-placeholder-img rounded-circle" width="140" height="140"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice" focusable="false" />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em"></text>
          <h3 className="titulo">WST - Sistema de Gestão</h3>
          <p class="lead paragrafo">Utiliza um sistema ERP de qualidade para realizar a gestão da sua empresa, conheça o WST, West Space Tech.</p>
          <p className="buttonParagrafo"><Link to="/wst" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>
        </div>
      </div>
    </div>
  </div>
  </div>
