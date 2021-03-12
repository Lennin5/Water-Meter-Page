import React from 'react';
import { useTranslation } from "react-i18next";

import OurTechnologyHomeImg from "../assets/img/general/logo.png";
import HardwareImg from "../assets/img/general/hardware.jpg";
import SoftwareImg from "../assets/img/general/software.jpg";
import LogicImg from "../assets/img/general/logic.jpg";

const OurTechnology = () => {
  const [t, i18n] = useTranslation("global");

  return (
  <>
   {/* Information Our Technology */}
  <div className="Caja2">

    <div className="row">

      <h1 className="Titulo3" style={{marginBottom: 70}}>{t("our-technology.our-technology-title")}</h1>

      <div className="col-lg-6 col-md-6 col-ms-12  cls2">
       
       <img src={OurTechnologyHomeImg}  className="img4" />

      </div>

      <div  className="col-lg-6 col-md-6 col-ms-12 cls2">

        <center>
         <h2 className="Titulo">Water Meter</h2>
         
        <p className="text-sm-center text-md-center text-lg-center">
        {t("our-technology.our-technology-description")}
        </p>
        </center>
      </div>
      
    </div>
 
  </div>


  <div className="cls5">

    <h1 className="Titulo2">{t("our-technology.main-elements-title")}</h1>
    
  </div>


  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12">
              <h2 className="Titulo">{t("our-technology.hardware-title")}</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              {t("our-technology.hardware-description")}
              </p>
        
      </div>

      <div className="col-lg-6 col-md-6 col-ms-12 ">
        
        <img src={HardwareImg} className="img3 roundedImg" />
                 
      </div>
      
    </div>



  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12">
        
         <h2 className="Titulo">{t("our-technology.software-title")}</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              {t("our-technology.software-description")}
              </p>
                 
      </div>

      <div className="col-lg-6 col-md-6 col-ms-12 ">


        <img src={SoftwareImg}  className="img3 roundedImg" />
             
        
      </div>      
      
    </div>


  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12 ">
              <h2 className="Titulo">{t("our-technology.logic-title")}</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              {t("our-technology.logic-description")}
              </p>
        
      </div>

      <div className="col-lg-6 col-md-6 col-ms-12">
        
        <img src={LogicImg}  className="img3 roundedImg" />
                 
      </div>
      
    </div>  
    
      
        </>
    )
}

export default OurTechnology
