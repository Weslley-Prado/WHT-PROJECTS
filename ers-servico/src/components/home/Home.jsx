import React from 'react'
import Banner1 from '../../assests/img/banner1.jpg'
import Banner2 from '../../assests/img/banner2.jpg'
import Banner3 from '../../assests/img/banner3.jpg'
import './Home.css'
import { Link } from 'react-router-dom'
import PoliticaQualidade from '../../assests/img/politicaqualidade.jpg'
import Experiencia from '../../assests/img/experiencia.jpg'



import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
        return (
                <main>
                        <Carousel fade>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={Banner1} alt="First slide" />
                                        <Carousel.Caption>
                                                <div className="frase">
                                                        <h2>Solução de qualidade e mão de obra especializada</h2>
                                                </div>
                                                <div className="carousel-caption d-md-block">
                                                        <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                </div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={Banner2} alt="Second slide" />


                                        <Carousel.Caption>
                                                <h2>Fornecemos as melhores soluções e elevados padrões de qualidade</h2>
                                                <div className="carousel-caption d-md-block">
                                                        <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                </div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={Banner3} alt="Third slide" />

                                        <Carousel.Caption>
                                                <h2>A nossa empresa que é formada pelos melhores profissionais</h2>
                                                <div className="carousel-caption d-md-block">
                                                        <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                </div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                        </Carousel>
                        <div class="containerMarketing">
                                <div class="row">
                                        <div class="col-12">
                                                <h3 class="main-title2">Por que nos escolher?</h3>
                                        </div>
                                        <div class="col-md-6 ">
                                                <img class="img-fluid3" src={PoliticaQualidade} alt="Politica" />
                                        </div>
                                        <div class="col-md-6 left0">
                                                <h3 className="title1">Política de Qualidade</h3>
                                                <p className="paragrafo lead font">
                                                        Assegurar a satisfação do cliente, através da eficiência operacional, bem como a qualidade dos nossos serviços.
                                                </p>
                                                <p className="paragrafo lead">Respeitar a individualidade do cliente, proporcionando serviços customizados contribuindo para que seja por ele percebida como referência de desempenho.
                                                </p>
                                                <p className="paragrafo lead">
                                                        A ERS serviços entende que o crescimento pessoal e profissional, mais a eficiência organizacional, reflete diretamente na qualidade e proporciona um ambiente favorável ao trabalho em equipe.
                                                </p>
                                                <p className="buttonParagrafo1"><Link to="/contato" class="btn btn-secondary" href="restaurantes.html">Saiba mais &raquo;</Link></p>
                                        </div>
                                </div>
                                <div class="row">
                                        <div class="col-12">
                                        </div>
                                        
                                        <div class="col-md-6 left1">
                                                <h3 className="title1">Experiência e excelência</h3>
                                                <p className="paragrafo lead font">
                                                Contamos com a disposição de “back-ups” para suprir possíveis ausências e também para agilidade de atendimento em serviços que demandam início imediato.
                                                </p>
                                                <p className="paragrafo lead">
                                                Coletamos todas as informações do processo de inspeção como: lote, código da peça, defeito encontrado, quantidade aprovada e reprovadas, geramos os relatórios e enviamos aos clientes via e-mail ou conforme sua solicitação/necessidade.

                                                </p>
                                                <p className="paragrafo lead">
                                                Nos adequamos as adversidades e mudanças de forma assertiva. 
                                                </p>
                                                <p className="buttonParagrafo2"><Link to="/contato" class="btn btn-secondary" href="restaurantes.html">Saiba mais &raquo;</Link></p>
                                         
                                        </div>
                                        <div class="col-md-6">
                                                <img class="img-fluid4" src={Experiencia} alt="Experiencia" />
                                        </div>
                                </div>
                        </div>
                </main>
        )
}
export default Home