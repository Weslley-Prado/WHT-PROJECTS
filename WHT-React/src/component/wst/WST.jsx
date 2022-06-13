import React from 'react'
import { Link } from 'react-router-dom'
import WST from '../../assets/img/wst.png'
import Navbar from '../templates/Nav'



export default props =>
<div>
<Navbar />
        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title"> WST - Sistema de Gestão </h3>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid" src={WST} alt="WHT" />
                    </div>
                    <div class="col-md-6">
                    <h3 class="about-title">A sua empresa nunca esteve tão bem gerida</h3>
                        <p>O WST é um sistema de gestão que pode ser adaptado de acordo com a suas necessidades.</p>
                        <p>Aplicamos conhecimentos de tecnologia para trazer segurança e agilidade para melhor gerir sua empresa.</p>
                        <p>Um sistema fácil de utilizar no dia a dia, o principal objetivo é termos uma interface gráfica de fácil utilização.</p>
                        <p>Veja outros diferenciais:</p>
                        <ul id="about-list">
                            <li><i class="fas fa-check"></i> Integração constante da sua empresa com o desenvolvimento</li>
                            <li><i class="fas fa-check"></i> Um sistema que não precisa instalar em seu computador</li>
                            <li><i class="fas fa-check"></i> Sistema de pagamento próprio</li>
                            <li><i class="fas fa-check"></i> Desenvolvimento com metodologia ágil</li>
                        </ul>
                        <p className="buttonParagrafo"><Link to="/contact" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>
                    </div>
                </div>
            </div>
        </div>
</div>
