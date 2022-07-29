import React from 'react';

import Banner1 from '../../src/img/banner6.jpg';
import Banner2 from '../../src/img/banner7.jpg';
import Banner3 from '../../src/img/banner5.jpg';
import Motivacional1 from '../../src/img/motivacional1.jpg';
import Motivacional2 from '../../src/img/motivacional2.jpg';
// import Motivacional3 from '../../src/img/motivacional3.jpg';
import './Home.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-bootstrap/Carousel";
// import Form from './Form';

const Home = () => {
        return (

           <div className="row">     
          <section>
          
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={Banner1} alt="First slide" />
                <Carousel.Caption>
                  <div className="frase">
                    <h2>
                    Porque o bom gosto começa desde cedo.
                    </h2>
                  </div>
                  {/* <div className="carousel-caption d-md-block">
                                                              <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                      </div> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 ftBanner2"
                  src={Banner2}
                  alt="Second slide"
                />
      
                <Carousel.Caption>
                  <h2>Criança bem vestida, é criança confortável</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Banner3} alt="Third slide" />
      
                <Carousel.Caption>
                  <h2>
                  Do básico ao elegante, encontre a melhor peça de roupa infantil.
                  </h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      
            <div class="containerMarketing">
              <p className="identify">
               VENHA NOS VISITAR, PORQUE O BOM COMEÇA DESDE CEDO E TENHOS AS MELHORES OFERTAS E O QUE DE MAIS 
               NOVO NA MODA INFANTIL, PORQUE CRIANÇA BEM VESTIDA É UMA CRIANÇA FELIZ.
              </p>
              <div class="row">
                <div class="col-12">
                  <h3 class="main-title2">Jujubinha Kids é imbátivel</h3>
                  <hr className="line_one" />
                </div>
      
                <div class="col-md-6 left0">
                  <p className="pH lead font">
                  Aqui na Jujubinha Kids, o conforto e a moda andam juntos.
                   Em um mundo de príncipes e princesas a escolha do look é essencial, por isso estamos prontos
                   a te ajudar nessa jornada!     
                  
                  </p>
                  <p className="pH lead">
                  Aqui na nossa loja tem diversão de montão e roupas lindas para aproveitar.
                  Roupas de todos os estilos para seu filho se sentir livre.
                  </p>
                  <p className="pH lead">
                  Nossa prioridade é vestir o seu filho da cabeça aos pés. Moda infantil é na Jujubinha Kids! Tudo o que você precisa, em um único lugar!
                  </p>
                </div>
      
                <div class="col-md-6 ">
                  <img class="img-fluid3" src={Motivacional1} alt="Politica" />
                </div>
              </div>
              <div class="row">
                <hr className="line_two" />
                <div class="col-md-5">
                  <img class="img-fluid4" src={Motivacional2} alt="Experiencia" />
                </div>
      
                <div class="col-md-7 left1">
                  <p className="pH2 lead">
                  Alegria é ver um guarda-roupa do seu filho cheio de roupa que acompanha o seu crescimento.
                  Venha conferir as nossas promoções de peças, pos só a Jujubinha Kids:
                  </p>
                  <ul className="disc">
                    <li className="disc">Melhor atendimento</li>
                    <li className="disc"> Roupas de qualidades</li>
                    <li className="disc"> Roupas para todos os gostos</li>
                    <li className="disc"> Temos tudo o que seu filho ou filha precisam!</li>
                    
                  </ul>
                </div>
                <p className="buttonParagrafo2">
                  <Link
                    to="/Produtos"
                    class="btn btn-secondary"
                  >
                    Saiba mais &raquo;
                  </Link>
                </p>
                <hr className="line_two" />
              </div>
            </div>
          </section>
          </div>
        );
      };
      export default Home;