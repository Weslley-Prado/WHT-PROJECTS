import React from 'react'
import { Link } from 'react-router-dom'
import Mobile from '../../assets/img/app-mobile.jpg'
import Navbar from '../templates/Nav'
import './Mobile.css'



export default props =>
<div>
    <Navbar />
        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title">Sua empresa na palma da mão de seus clientes </h3>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid" src={Mobile} alt="WHT" />
                    </div>
                    <div class="col-md-6">
                    <h3 class="about-title">Deixe sua empresa acessível a qualquer momento</h3>
                        <p class="lead paragrafo">Projetamos seu aplicativo de acordo com a necessidade de sua empresa.</p>
                        <p class="lead paragrafo">Pensamos em tudo, trabalhamos para desenvolver um app que seja fácil para todo tipo de usuário.</p>
                        <p class="lead paragrafo">Buscamos atrelar a simplicidade de utilização com algo designer arrojado</p>
                        <p class="lead paragrafo">Veja outros diferenciais:</p>
                        <ul id="about-list">
                            <li><i class="fas fa-check"></i> Integração constante da sua empresa com o desenvolvimento</li>
                            <li><i class="fas fa-check"></i> Tecnologias de ponta para aplicação mobile</li>
                            <li><i class="fas fa-check"></i> Sistema de pagamento próprio</li>
                            <li><i class="fas fa-check"></i> Desenvolvimento com metodologia ágil</li>
                        </ul>
                        <p className="buttonParagrafo"><Link to="/contact" class="btn btn-secondary" href="restaurantes.html">Saiba mais &raquo;</Link></p>
                    </div>
                </div>
            </div>
        </div>

        </div>