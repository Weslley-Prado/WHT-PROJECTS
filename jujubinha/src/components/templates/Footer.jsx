import React from "react";
import './Footer.css'
import Logo from '../../img/logo.png'


const Footer = () => {
  return (
    
    <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h2 class="logo"><img src={Logo} /> </h2>
                </div>
                <div class="col-sm-2">
                    <h5>Inicio</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">Quem somos</a></li>
                        <li><a href="/Contact">Contato</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Produtos</h5>
                    <ul>
                        <li><a href="/Produtos">Moda Infantil Feminina</a></li>
                        <li><a href="/Produtos">Moda Infantil Masculina</a></li>
                       

                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a href="/Contact">Dúvidas</a></li>
                        <li><a href="/Contact">Telefones</a></li>
                        <li><a href="/Contact">E-mail</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="social-networks">
                        <a href="" class="twitter"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/vimarbecombr-104580415612613" class="facebook"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/vimarbe.com.br/" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                    <a href="/Contact">
                        <button type="button" class="btn btn-default">Contato</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© 2022 Copyright: <a href="https://westhightechnology.com.br/" target="_blank">  WHT - West High Technology</a></p>
        </div>
    </footer>
  );
}

export default Footer