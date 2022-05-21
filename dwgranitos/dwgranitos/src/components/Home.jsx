import React from 'react';

import image1 from '../../src/img/banner.png';

import image2 from '../../src/img/banner2.png';
import image3 from '../../src/img/banner3.png';
import image4 from '../../src/img/banner2.png';
import './Home.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Form from './Form';

const Home = () => {
        return (
                <section>
                <div className="sec__one">                       
                      <AliceCarousel className="slide" autoPlay autoPlayInterval="3000">
                                <img src={image1} className="sliderimg" alt=""/>
                                <img src={image2} className="sliderimg" alt=""/>
                                <img src={image3} className="sliderimg" alt="" />
                                <img src={image4} className="sliderimg" alt=""/>
                        </AliceCarousel>
                </div>
                <h2 className="order">FAÇA SEU ORÇAMENTO</h2>
                <Form /> 
                <div>
                    <h2 className="order">Por que escolher a DW Granitos?</h2>
                    <div>
                            <p className="paragrafo lead">
                            A DW está no mercado como compromisso de atender residências, comércios,
indústrias, prédios, condomínios, construtoras, decoradores, arquitetos e engenheiros,
com produtose serviços da mais alta qualidade. </p>
                            
                    </div>
                </div>
                </section>
        )
}
export default Home