import React from 'react'
import Banner1 from '../../assests/img/banner1.jpg'
import Banner2 from '../../assests/img/banner2.jpg'
import Banner3 from '../../assests/img/banner3.jpg'
import './Home.css'
import { Link } from 'react-router-dom'
//import Agencia from '../../assets/img/invista.jpeg'
//import Navbar from '../templates/Nav'

import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
        return (
                <Carousel fade>
                        <Carousel.Item>
                                <img className="d-block w-100" src={Banner1} alt="First slide" />
                                <Carousel.Caption>
                                        <div className="frase">
                                        <h2>First slide label</h2>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                       </div>
                                        <div className="carousel-caption d-md-block">
                                                <Link to="/contact" className="main-btn">Entre em contato</Link>
                                        </div>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <img className="d-block w-100" src={Banner2} alt="Second slide" />


                                <Carousel.Caption>
                                        <h2>Second slide label</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="carousel-caption d-md-block">
                                                <Link to="/contact" className="main-btn">Entre em contato</Link>
                                        </div>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <img className="d-block w-100" src={Banner3} alt="Third slide" />

                                <Carousel.Caption>
                                        <h2>Third slide label</h2>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        <div className="carousel-caption d-md-block">
                                                <Link to="/contact" className="main-btn">Entre em contato</Link>
                                        </div>
                                </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
        )
}
export default Home