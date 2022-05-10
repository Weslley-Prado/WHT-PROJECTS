import React from 'react';

import image1 from '../../src/img/banner1.png';
import image2 from '../../src/img/banner2.png';
import image3 from '../../src/img/banner3.png';
import image4 from '../../src/img/banner2.png';
import './Home.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Home = () => {
        return (
                <div className="sec__one">
                      <h1></h1>
                      <AliceCarousel className="slide" autoPlay autoPlayInterval="3000">
                                <img src={image1} className="sliderimg" />
                                <img src={image2} className="sliderimg" />
                                <img src={image3} className="sliderimg" />
                                <img src={image4} className="sliderimg" />
                        </AliceCarousel>
                </div>
        )
}
export default Home