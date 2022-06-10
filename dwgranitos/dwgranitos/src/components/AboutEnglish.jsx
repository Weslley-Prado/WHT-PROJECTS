import React from 'react'
import './About.css'
import Empresa from '../img/empresa.jpg'
import MenuEnglish from './templates/MenuEnglish';


const About = () => 


<div id="about">
<MenuEnglish />
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="main-title">A DW Granitos</h3>
                    </div>
                    <div class="col-md-6">
                    <img class="img-fluid empresa" src={Empresa} alt="Empresa" />

                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">EXCELLENT COMPANY: </h3>
                        <p className=" lead">DW Granitos & Mármores LTDA ME was founded in March 2000. Since then, it has built, with hard work and effort, a company that prides itself on the quality of its products and services. </p>
                        <p className=" lead"> The company has been in the market for more than 21 years, always promoting its activities in the processing and distribution of ornamental stones, in slabs and tiles for the domestic market</p>
                        <p className = "lead">Our work over time has resulted in recognition for agility in production processes and efficiency in the quality of products offered to the domestic market. This result can be measured by the satisfaction and trust of our customers.</p>
                        <p className = "lead">The company has a line of more than 30 products and its goal is to expand its partnerships with suppliers and serve its customers with more good quality products.</p>
                        
                    </div>
                </div>
            </div>
        </div>
      
export default About;