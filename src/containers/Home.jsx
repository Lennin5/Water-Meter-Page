import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


import GetADemoBottom from "../components/GetADemoBottom";

import HomeImg from "../assets/img/general/home.jpg"
import PipesImg from "../assets/img/general/pipeline.jpg";

// img-en
import Customers1Img from "../assets/img/general/img-en/CostumerT1.jpeg";
import Customers2Img from "../assets/img/general/img-en/CostumerT2.jpeg";
import Customers3Img from "../assets/img/general/img-en/CostumerT3.jpeg";
import Customers4Img from "../assets/img/general/img-en/CostumerT4.jpeg";

import MobileAppResponsiveImg from "../assets/img/general/img-en/movil-app-responsive.png";

// img-es
import Customers1ImgEs from "../assets/img/general/img-es/CostumerT1.jpeg";
import Customers2ImgEs from "../assets/img/general/img-es/CostumerT2.jpeg";
import Customers3ImgEs from "../assets/img/general/img-es/CostumerT3.jpeg";
import Customers4ImgEs from "../assets/img/general/img-es/CostumerT4.jpeg";

import MobileAppResponsiveImgEs from "../assets/img/general/img-es/movil-app-responsive.png";

// ...

import WebAppResponsiveImg from "../assets/img/general/web-app-responsive.png";

import WebAppImageParallax from "../components/WebAppImageParallax";
import MobileAppImageParallax from "../components/MobileAppImageParallax";

import HomeImg2 from "../assets/img/general/home-small-screen.jpg"


const Home = () => {

  const [t, i18n] = useTranslation("global");

  const FullDesktop = ({ children }) => {    
    const isFullDesktop = useMediaQuery({ minWidth: 1800, maxWidth: 12000 })
    return isFullDesktop ? children : null;    
  }
    
  const Desktop = ({ children }) => {    
    const isDesktop = useMediaQuery({ minWidth: 1150, maxWidth: 1799 })
    return isDesktop ? children : null;    
  }
  const Tablet = ({ children }) => {    
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1149 })
    return isTablet ? children : null;
    
  }
  const Mobile = ({ children }) => {    
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null    
  }
  const Default = ({ children }) => {    
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }


    return (
      <>        

    <Parallax
    // blur={1}
    bgImage={HomeImg}
    bgImageAlt="Home Img"
    strength={100}
    >
    <div className="Caja1">
      <br/><br/><br/>          
        <div className="row">
            <div className="col-lg-6 col-md-6 col-ms-12  cls1">
                <h2 className="Titulo white-text">{t("home.home-title")}</h2>
                <p className="text-sm-start text-md-start text-lg-start white-text">
                {t("home.home-description")}
                </p>
                <Link to='/contact-with-us'className="btn btn-water">{t("get-a-demo.contact-us-form-label")}</Link>
            </div>            
        </div> 
    </div>
      <div style={{ height: '100px' }} />
      
    </Parallax>  
    
                        
        
            <div className="row cls3">
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                      <br/>
                      <br/>
                      
                      <h2 className="Titulo">{t("home.buildings-title")}</h2>
        
                      <p className="text-sm-start text-md-start text-lg-start">
                      {t("home.buildings-description")}
                      </p>
                        
                    </div>
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                        
                        {/* <img src={PipesImg}  className="img1" /> */}
                        <Parallax                        
                        bgImage={PipesImg}
                        bgImageAlt="Pipes"
                        strength={200}
                        style={{borderRadius: 20}}
                        >                        
                        <div style={{ height: '300px' }} />
                      </Parallax>                         
                         
                    </div>
                    
                </div>
        
                {/* Targetas */}
        
                <div className="Caja1">
        
                    <h1 className="Titulo2">{t("home.for-customers-title")}</h1>
        
                    <div className="row">
                        
                      <div className="col-lg-3 col-md-3 col-ms-3">                      
                      <img src={i18n.language == "en" ? Customers1Img : Customers1ImgEs } className="imgCostumers" />  
                          
                      </div>
        
                      <div className=" col-lg-3 col-md-3 col-ms-3">
                          
                      <img src={i18n.language == "en" ? Customers2Img : Customers2ImgEs } className="imgCostumers" /> 
        
                      </div>
        
                      <div className="col-lg-3 col-md-3 col-ms-3">
                          
                      <img src={i18n.language == "en" ? Customers3Img : Customers3ImgEs } className="imgCostumers" /> 
        
                      </div>
        
                      <div className="col-lg-3 col-md-3 col-ms-3">
                          
                      <img src={i18n.language == "en" ? Customers4Img : Customers4ImgEs } className="imgCostumers" /> 
        
                      </div>
        
                    </div>
                    
                </div>
        
                <Desktop><br/><br/></Desktop>
              
                <div className="row cls3">
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                      <FullDesktop><img src={WebAppResponsiveImg}  className="img1" /></FullDesktop>
                      <Desktop><WebAppImageParallax /></Desktop>
                      <Tablet><img src={WebAppResponsiveImg}  className="img1" /></Tablet>
                      <Mobile><img src={WebAppResponsiveImg}  className="img1" /></Mobile>                                                          
                    </div>
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">  
                    <center>
                      <h2 className="Titulo">{t("home.water-meter-web-app-title")}</h2>                            
                      <p className="text-sm-center text-md-center text-lg-center">
                      {t("home.water-meter-web-app-description")}
                      </p>
                      </center>                                                 
                    </div>
                                        
                </div>
                        
              <Desktop><br/><br/><br/><br/><br/><br/></Desktop>
              
                <div className="row cls3">
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                      <FullDesktop><img src={i18n.language == "en" ? MobileAppResponsiveImg : MobileAppResponsiveImgEs}  className="img1" /></FullDesktop>
                      <Desktop><MobileAppImageParallax  /></Desktop>
                      <Tablet><img src={i18n.language == "en" ? MobileAppResponsiveImg : MobileAppResponsiveImgEs}  className="img1" /></Tablet>
                      <Mobile><img src={i18n.language == "en" ? MobileAppResponsiveImg : MobileAppResponsiveImgEs}  className="img1" /></Mobile>                                     
                    </div>
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">   
                    <center>
                      <h2 className="Titulo">{t("home.water-meter-mobile-app-title")}</h2>                                      
                      <p className="text-sm-center text-md-center text-lg-center">
                      {t("home.water-meter-mobile-app-description")}
                      </p>                                                 
                      </center>                 
                    </div>
                    
                </div>

                <Desktop><br/><br/><br/><br/><br/><br/></Desktop>

                <div className="col-lg-12 col-md-12 col-ms-12" style={{padding: 10}}>   
                  <center>                    
                      <p><b>{t("home.note")}</b></p>                                                            
                  </center>                 
                </div>


              {/* <GetADemoBottom /> */}
        </>

    )
}

export default Home;
