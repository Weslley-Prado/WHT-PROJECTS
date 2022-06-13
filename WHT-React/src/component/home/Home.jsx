import React from 'react'
import Banner1 from '../../assets/img/banner1.jpg'
import Banner2 from '../../assets/img/banner2.jpg'
import Banner3 from '../../assets/img/banner3.jpg'
import './Home.css'
import { Link } from 'react-router-dom'
import Agencia from '../../assets/img/invista.jpg'
import Navbar from '../templates/Nav'



export default props =>
  <React.Fragment>

    <main>
      <Navbar />
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
      <div class="containerMarketing">
        <div class="row">
          <div class="col-12">
            <h3 class="main-title">Por que investir em tecnologia?</h3>
          </div>
          <div class="col-md-6">
            <img class="img-fluid" src={Agencia} alt="WHT" />
          </div>
          <div class="col-md-6">
            <p className="paragrafo lead font">Consiga clientes das mais diferentes regiões por ter a sua empresa acessível para o mundo.
              A WHT ajuda as empresas a conseguirem clientes por meio de desenvolvimento e divulgação de sites.
            </p>
            <p className="paragrafo lead">A WHT utiliza o que há mais de tecnológicos da atualidade e estamos em constante atualização acompanhando o mercado de TI
              para oferecer um serviço consiste aos nossos clientes. Por isso. incentivamos você a conhecer mais de nossos serviços</p>
            <p className="paragrafo lead">
              Fique a apenas um clique de seus clientes, utilize a tecnologia para expandir seus negócios.
              A tendência é cada vez mais serviços e produtos serem fornecedidos via web, pois traz mais praticidade
              durante todo o processo de compra e venda. O que está esperando? Entre em contato conosco e conheça mais os nossos serviços!
            </p>
            <p className="buttonParagrafo"><Link to="/contact" class="btn btn-secondary" href="restaurantes.html">Saiba mais &raquo;</Link></p>

          </div>
        </div>
      </div>

    </main>
  </React.Fragment>
