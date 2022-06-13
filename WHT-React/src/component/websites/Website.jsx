

import React from 'react'
import './Websites.css'
import Construcao from '../../assets/img/construcao-civil.jpg'
import Restaurante from '../../assets/img/restaurante.jpg'
import Image from '../../assets/img/outros-ramos.png'
import { Link } from 'react-router-dom'
import Navbar from '../templates/Nav'


export default props =>

<div>
<Navbar />


  <div class="container">

    <h3 class="time-title">Mais que um site, uma solução de negócio</h3>
    <div class="row featurette">

      <div class="col-md-7">
        <h2 class="featurette-heading"> Construção Civil </h2>

        <p class="lead paragrafo"> Torne a sua construtora, depósito ou seu escritório mais acessível aos seu clientes.
          Permita que seus clientes possa acessar seu portfólio sem sair de casa. Para isso ofereceremos
          soluções para melhorar a interação de sua empresa com seus clientes.
        </p>
        <p class="lead paragrafo" >Vantagens:</p>
        <ul id="about-list">
          <li><i class="fas fa-check"></i> Sites personalizados com a característica da sua empresa</li>
          <li><i class="fas fa-check"></i> Layout responsivo para todos os dispositivos</li>
          <li><i class="fas fa-check"></i> Integração do site com o What's App</li>
          <li><i class="fas fa-check"></i> Uma hospedagem confiável e segura</li>
          <li><i class="fas fa-check"></i> Apoio especializado</li>
        </ul>
        <p className="buttonParagrafo"><Link to="/contact" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>

      </div>

      <div class="col-md-5">
        <img src={Construcao} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
          height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice" focusable="false" />
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
      </div>

    </div>
    <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading"> Sites para restaurantes </h2>
            <p class="lead paragrafo">Seu restaurante pode ser visto por mais gente em sua cidade, torne conectado a rede.
              Oferecemos um serviço especializado para que seu site represente o nome de sua empresa.
            </p>
              <p class="lead">Vantagens:</p>
              <ul id="about-list">
                <li><i class="fas fa-check"></i> Cardápio on-line</li>
                <li><i class="fas fa-check"></i> Layout responsivo para todos os dispositivos</li>
                <li><i class="fas fa-check"></i> Pedido gerado automáticamente integrado com o What's App</li>
                <li><i class="fas fa-check"></i> Uma hospedagem confiável e segura</li>
                <li><i class="fas fa-check"></i> Apoio especializado</li>
              </ul>    
              <p className="buttonParagrafo"><Link to="/contact" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>
          
          </div>
          <div class="col-md-5 order-md-1">
            <img src={Restaurante}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
              focusable="false"/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
          </div>

          </div>
          <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading"> Outros ramos: </h2>
            <p class="lead paragrafo">Independente do ramo de sua empresa, seja automotivo, moda, saúde e entre outros, garantimos 
             a construção de um site que vai conectar mais ainda sua empresa aos seus clientes, ampliando a visibilidade
             para o mundo.
            </p>
            <p class="lead paragrafo">Vantagens:</p>
            <ul id="about-list">
              <li><i class="fas fa-check"></i> Sites personalizados com a característica da sua empresa</li>
              <li><i class="fas fa-check"></i> Layout responsivo para todos os dispositivos</li>
              <li><i class="fas fa-check"></i> Integração do site com o What's App</li>
              <li><i class="fas fa-check"></i> Uma hospedagem confiável e segura</li>
              <li><i class="fas fa-check"></i> Apoio especializado</li>
            </ul>
            <p className="buttonParagrafo"><Link to="/contact" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>

          </div>
          <div class="col-md-5">
            <img src={Image}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false"/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
          </div>

          </div>

</div>
</div>





