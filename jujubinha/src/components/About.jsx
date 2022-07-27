import React from 'react'
import './About.css'
import Empresa from '../img/empresa.jpg'


const About = () => 


<div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title">Jujubinha</h3>
                    </div>
                    <div class="col-md-6">
                    <img class="img-fluid empresa" src={Empresa} alt="Empresa" />

                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">Jujubinha Kids é Imbatível! </h3>
                        <p className=" lead">
                        A Jujubinha Baby Kids é uma empresa que veio pra ser a solução no ramo varejista de roupas e calçados de moda infantil , trabalhamos com as melhores marcas de vestuário infantil, a Jujubinha começou a suas atividades na cidade de Maracaju M/S no dia 01/01/2022 entregando produtos de qualidade com menor preço acompanhado de um atendimento exclusivo, temos amor no que fazemos e sentimos muita alegria de poder vestir e calçar crianças de todas as idades e junto com esse trabalho temos um sonho de se tornar a maior franquia de moda infantil do Brasil. 
                             </p>
                        
                    </div>
                </div>
            </div>
        </div>
      
export default About;