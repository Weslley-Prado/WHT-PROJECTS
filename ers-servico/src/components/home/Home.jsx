import React from 'react'
import Banner1 from '../../assests/img/banner1.jpg'
import Banner2 from '../../assests/img/banner2.jpg'
import Banner3 from '../../assests/img/banner3.jpg'
import './Home.css'
import { Link } from 'react-router-dom'
//import Agencia from '../../assets/img/invista.jpeg'
//import Navbar from '../templates/Nav'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Home = () => {
  return (

          <section>
          <div className="sec__one">                       
                <AliceCarousel className="slide" autoPlay autoPlayInterval="3000">
                          <img src={Banner1} className="sliderimg" alt=""/>
                          <img src={Banner2} className="sliderimg" alt=""/>
                          <img src={Banner3} className="sliderimg" alt="" />
                  </AliceCarousel>
          </div>
          <h2 className="order">FAÇA SEU ORÇAMENTO</h2>
        
          </section>
  )
}
export default Home