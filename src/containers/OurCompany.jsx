import React from 'react';
import { useTranslation } from "react-i18next";

import OurVisionImg from "../assets/img/general/our-vision.jpg";

import SamuelImg from "../assets/img/team/samuel.jpg";
import LenninImg from "../assets/img/team/lennin.jpg";
import RodrigoImg from "../assets/img/team/rodrigo.jpg";
import MarioImg from "../assets/img/team/mario.jpg";

import SamuelBackgroundImg from "../assets/img/background-team/yellow.jpg";
import LenninBackgroundImg from "../assets/img/background-team/red.jpg";
import RodrigoBackgroundImg from "../assets/img/background-team/green.jpg";
import MarioBackgroundImg from "../assets/img/background-team/blue.jpg";

const OurCompany = () => {
  const [t, i18n] = useTranslation("global");
    return (
        <>
    {/* Information Our_Company */}

  <div className="Caja1">

    <div className="row">

      <div className="col-lg-6 col-md-6 col-ms-12  cls1">
        <h2 className="Titulo">{t("our-company.our-company-title")}</h2>

        <p className="text-sm-start text-md-start text-lg-start">
        {t("our-company.our-company-description")}      
        </p>
      </div>

      <div  className="col-lg-6 col-md-6 col-ms-12 cls2">
        <img src={OurVisionImg}  className="img4 roundedImg" />
      </div>
      
    </div>
 
  </div>



  <div className="cls6">

   <h2 className="Titulo2">{t("our-company.water-meter-team-title")}</h2>

   <div className="row">

   <div className="col-lg-3 col-md-6 col-ms-12">

<div className="CardTeam">

  <img src={RodrigoBackgroundImg} className="TeamImg" />
   
   <img src={RodrigoImg} className="PerfilImgRodrigo" />

   <div className="InformationTeam">

    <h4 className="TituloTeam">CEO & Founder</h4>

   <center><p>Rodrigo Alfaro</p></center>



  </div>

 </div>

</div>


<div className="col-lg-3 col-md-6 col-ms-12">

<div className="CardTeam">

  <img src={MarioBackgroundImg} className="TeamImg" />

  <img src={MarioImg} className="PerfilImgMario" />
  
  <div className="InformationTeam">

    <h4 className="TituloTeam">CTO & Founder</h4>

    <center><p>Mario Mártir</p></center>

 
  </div>

 </div>

</div>



    <div className="col-lg-3 col-md-6 col-ms-12">

      <div className="CardTeam">

        <img src={LenninBackgroundImg} className="TeamImg" />

         <img src={LenninImg} className="PerfilImgLennin" />

        <div className="InformationTeam">

          <h4 className="TituloTeam">CIO & Founder</h4>

          <center><p>Lennin Lemus</p></center>

        </div>
         
       </div>
      
    </div>


    <div className="col-lg-3 col-md-6 col-ms-12">
      
       <div className="CardTeam">
        
        <img src={SamuelBackgroundImg}  className="TeamImg" />
         
         <img src={SamuelImg} className="PerfilImgSamuel" />

         <div className="InformationTeam">
               
               <h4 className="TituloTeam">CMO & Founder</h4>

               <center><p>Samuel Guirola</p></center>
       
        </div>
         
       </div>

    </div>


     
   </div>

   </div>            
        </>
    )
}

export default OurCompany
