import React from 'react'
import GetADemoBottom from "../components/GetADemoBottom";
import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SolutionsHomeImg from "../assets/img/general/img-en/solution-home.jpg";
import AnalysisImg from "../assets/img/general/analysis.jpg";
import SavingMoneyImg from "../assets/img/general/saving-money.jpg";
import SavingWaterImg from "../assets/img/general/saving-water.jpg";
import AlertsImg from "../assets/img/general/alerts.jpg";

import SolutionsHomeImgEs from "../assets/img/general/img-es/solution-home.jpg";

const Solutions = () => {
  const [t, i18n] = useTranslation("global");

  return (
        <>
    {/* Information Solutions */}
  <div className="Caja1">

    <div className="row">

      <div className="col-lg-6 col-md-6 col-ms-12  cls1">
        <h2 className="Titulo">{t("solutions.solutions-title")}</h2>

        <p className="text-sm-start text-md-start text-lg-start">
        {t("solutions.solutions-description")}
        </p>

        <Link to='/contact-with-us'className="btn btn-water">{t("get-a-demo.contact-us-form-label")}</Link>
      </div>

      {/* <div  className="col-lg-6 col-md-6 col-ms-12 cls2">
        <img src={SolutionsHomeImg}  className="img1 roundedImg" />      
      </div> */}
      
      <div className="col-lg-6 col-md-6 col-ms-12">        
        {/* <img src={AnalysisImg}  className="img3 roundedImg" /> */}
        <Parallax                        
            bgImage={i18n.language == "en" ? SolutionsHomeImg : SolutionsHomeImgEs }
            bgImageAlt="Pipes"
            strength={200}
            style={{borderRadius: 20}}
            >                        
            <div style={{ height: '350px' }} />
          </Parallax>            
                 
      </div>      
      
    </div>
 
  </div>


  <div className="row cls4">      

      <div className="col-lg-6 col-md-6 col-ms-12 ">
        <br/>
              <h2 className="Titulo">{t("solutions.data-analysis-title")}</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              {t("solutions.data-analysis-description")}
              </p>
        
      </div>
      <div className="col-lg-6 col-md-6 col-ms-12">        
        {/* <img src={AnalysisImg}  className="img3 roundedImg" /> */}
        <Parallax                        
            bgImage={AnalysisImg}
            bgImageAlt="Pipes"
            strength={200}
            style={{borderRadius: 20}}
            >                        
            <div style={{ height: '350px' }} />
          </Parallax>            
                 
      </div>
      
    </div>



  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12 ">
        <br/>
              <h2 className="Titulo">{t("solutions.save-money-title")}</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              {t("solutions.save-money-description")}
              </p>        
      </div>
      <div className="col-lg-6 col-md-6 col-ms-12">        
        {/* <img src={SavingMoneyImg}  className="img3 roundedImg" /> */}
        <Parallax                        
          bgImage={SavingMoneyImg}
          bgImageAlt="Pipes"
          strength={200}
          style={{borderRadius: 20}}
          >                        
          <div style={{ height: '350px' }} />
        </Parallax>                  
                 
      </div>      
      
    </div>


  <div className="row cls4">

    <div className="col-lg-6 col-md-6 col-ms-12 ">
        <br/>
              <h2 className="Titulo">{t("solutions.saving-environment-title")}</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              {t("solutions.saving-environment-description")}
              </p>        
    </div>
    <div className="col-lg-6 col-md-6 col-ms-12">        
        {/* <img src={SavingWaterImg}  className="img3 roundedImg" /> */}
        <Parallax                        
          bgImage={SavingWaterImg}
          bgImageAlt="Pipes"
          strength={200}
          style={{borderRadius: 20}}
          >                        
          <div style={{ height: '400px' }} />
        </Parallax>            
                 
      </div>      
      
    </div>

    <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12 ">
              <h2 className="Titulo">{t("solutions.alert-notifications-title")}</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              {t("solutions.alert-notifications-description")}
              </p>        
      </div>
      {/* <div className="col-lg-6 col-md-6 col-ms-12">        
        <img src={AlertsImg} style={{width: "100%", height: "100%"}} className="img3 roundedImg" />                 
      </div>      */}
      <div className="col-lg-6 col-md-6 col-ms-12">                
        <Parallax                        
            bgImage={AlertsImg}
            bgImageAlt="Pipes"
            strength={200}
            style={{borderRadius: 20}}
            >                        
            <div style={{ height: '350px' }} />
          </Parallax>            
                 
      </div>             

      
    </div>            
            {/* <GetADemoBottom /> */}
        </>
    )
}

export default Solutions
