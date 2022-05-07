import React from 'react'
import Agrovila from '../img/agrovila.jpeg'
const About = () => 
<div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title">Sobre a Mudas Cereza</h3>
                    </div>
                    <div class="col-md-6">
                    <img class="img-fluid agrovilaImage"  src={Agrovila} alt="Agrovila" />

                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">Lorem ipsum dolor sit amet</h3>
                        <p className="paragrafo lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu ante. Nunc eu nisl sed tortor semper rutrum.</p>
                        <p className="paragrafo lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu ante. Nunc eu nisl sed tortor semper rutrum.</p>
                        <p className = "paragrafo lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu ante</p>
                        <p className = "paragrafo lead">Lorem ipsum dolor sit amet:</p>
                        <ul id="about-list">
                            <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur</li>
                            <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur</li>
                            <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur</li>
                            <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
export default About;