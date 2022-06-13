import React from 'react'
import Agencia from '../../assets/img/agencia.jpg'
import Navbar from '../templates/Nav'
import './About.css'


export default props =>
 <div>        <Navbar />

 <div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title">Sobre a WHT - West High Technology</h3>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid" src={Agencia} alt="WHT" />
                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">Uma empresa que pensa no futuro</h3>
                        <p className="paragrafo lead">Nossos projetos são adaptados ao cliente e seu propósito.</p>
                        <p className="paragrafo lead">Após a especificação do projetos os arquitetos de software definirão as melhores tecnologias para seu
                            projeto.</p>
                        <p className = "paragrafo lead">E nossos designers trabalharão na sua interface/layout para impulsionar o negócio.</p>
                        <p className = "paragrafo lead">Veja outros diferenciais:</p>
                        <ul id="about-list">
                            <li><i class="fas fa-check"></i> Layout responsivo para todos os dispositivos</li>
                            <li><i class="fas fa-check"></i> Integração com diversos sistemas do mercado</li>
                            <li><i class="fas fa-check"></i> Sistema de pagamento próprio</li>
                            <li><i class="fas fa-check"></i> Desenvolvimento com metodologia ágil</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

