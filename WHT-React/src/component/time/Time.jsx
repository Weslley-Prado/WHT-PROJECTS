import React from 'react'

import Developer from '../../assets/img/desenvolvedor.jpg'
import Design from '../../assets/img/design.jpg'
import Suporte from '../../assets/img/suporteaocliente.jpg'
import Navbar from '../templates/Nav'


export default props =>
<div>
      <Navbar />
         <div id="Time" className="container">           
          <h3 class="time-title">Nossa Equipe</h3>
        <div class="row featurette">          
          <div class="col-md-7">            
            <h2  class="featurette-heading">Desenvolvedores: <span class="text-muted">especializados para
            desenvolver soluções.</span></h2>
            <p class="lead paragrafoTime">Contamos com uma equipe especializada de desenvolvimento que busca atender suas
              necessidades, entregando
              um produto de qualidade e com agilidade.
            </p>
          </div>
          <div class="col-md-5">
            <img src={Developer}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false"/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>

          </div>
        </div>

        <hr class="featurette-divider"/>
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading"> Designers: <span class="text-muted"> habilitados a criar estilos inovadores
                e excelente usabilidade.</span></h2>
            <p class="lead paragrafoTime">A nossa proposta é criar um design não apenas bonito, que seja fácil para o seu cliente
              interagir. Para isso, contamos com profissionais especializados e que estão dispostos a trazer a sua ideia
              para o papel também no design do seu software.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img src={Design}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
              focusable="false"/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
          </div>
        </div>

        <hr class="featurette-divider"/>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading"> Suporte: <span class="text-muted"> atendimento 24 horas</span></h2>
            <p class="lead paragrafoTime">Contamos com um suporte especializado que busca interagir ao máximo com nossos clientes para
              trazer melhorias e inovações.</p>
          </div>
          <div class="col-md-5">
            <img src={Suporte}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false"/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
           </div>
          </div>
        </div>
     

</div>