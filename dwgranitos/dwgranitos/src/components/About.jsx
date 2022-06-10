import React from 'react'
import './About.css'
import Empresa from '../img/empresa.jpg'
import Menu from './templates/Menu';


const About = () => 


<div id="about">
<Menu />
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title">A DW Granitos</h3>
                    </div>
                    <div class="col-md-6">
                    <img class="img-fluid empresa" src={Empresa} alt="Empresa" />

                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">Empresa de excelência: </h3>
                        <p className=" lead">A empresa DW Granitos e Mármores LTDA ME foi fundada em março de 2000. Desde então, construiu com muito trabalho e esforço uma empresa que presa a qualidade de seus produtos e serviços. </p>
                        <p className=" lead">A empresa já está atuando há mais de 21 anos no mercado, sempre fomentando suas atividades no beneficiamento e distribuição de rochas ornamentais, em chapas e ladrilhos para o mercado interno</p>
                        <p className = "lead">O nosso trabalho ao longo do tempo resultou em reconhecimento por agilidade nos processos de produção e eficiência na qualidade dos produtos oferecidos ao mercado interno. Esse resultado pode ser mensurado pela satisfação e confiança dos nossos clientes.</p>
                        <p className = "lead">A empresa dispões de uma linha de mais de 30 produtos e sua meta é ampliar suas parcerias com fornecedores e atender seus clientes com mais produtos de boa qualidade.</p>
                        
                    </div>
                </div>
            </div>
        </div>
      
export default About;