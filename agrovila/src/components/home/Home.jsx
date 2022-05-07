import React from 'react'
import Banner1 from '../../img/banner1.jpg'
import Banner2 from '../../img/banner2.jpg'
import Banner3 from '../../img/banner3.jpg'
import './Home.css'
import { Link } from 'react-router-dom'



export default props =>
  <React.Fragment>

    <main>
      <div className="container-fluid">
        <div id="mainSlider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#mainSlider" data-slide-to="0" className="active"></li>
            <li data-target="#mainSlider" data-slide-to="1"></li>
            <li data-target="#mainSlider" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100 banner" alt="Projetos de e-commerce" />
              <div className="carousel-caption d-md-block">
                <h2>Quer criar um web site?</h2>
                <p>Conte conosco, temos as melhores soluções.</p>
                <Link to="/contact" className="main-btn">Entre em contato</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Banner2} className="d-block w-100 banner" alt="Engenharia de software" />
              <div className="carousel-caption d-md-block">
                <h2>Está querendo tirar o projeto do papel?</h2>
                <p>Nossa equipe de engenharia de software está pronta para lhe atender.</p>
                <Link to="/contact" className="main-btn">Entre em contato</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100 banner" alt="Manutenção em software" />
              <div className="carousel-caption d-md-block">
                <h2>Quer um app para smartphone de sua loja?</h2>
                <p>A WHT conta com engenheiros altamente qualificados para resolver seu problema.</p>
                <Link to="/contact" className="main-btn">Entre em contato</Link>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#mainSlider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#mainSlider" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> 
    </main>
  </React.Fragment>
