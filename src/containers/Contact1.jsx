import React from 'react';

import ContactBussinesImg from "../assets/img/general/contact-bussines.jpg";

import ContactToGetHelpImg from "../assets/img/general/img-en/contact-to-help.jpg";
import GeneralEnquiriesImg from "../assets/img/general/img-en/general-enquires.jpg";

import ContactToGetHelpImgEs from "../assets/img/general/img-es/contact-to-help.jpg";
import GeneralEnquiriesImgEs from "../assets/img/general/img-es/general-enquires.jpg";

import { useTranslation } from "react-i18next";

const ContactWithUs = () => {
  const [t, i18n] = useTranslation("global");
    return (
        <>
         {/* Informacion Contact_With_Us */}

        <div className="Caja2">
         
         <h1 className="Titulo4">{t("contact-with-us.contact-with-us-title")}</h1>
      
         <p className="text_Contact">
         {t("contact-with-us.contact-with-us-description")}
         </p>
         <div className="row">
        
      
         {/* Targeta 1 */}
      
         <div className="col-lg-4 col-md-6 col-ms-12">
        
           <div className="Card_Contact">
      
            <img src={ContactBussinesImg} className="ImgCardContact" />
             
            <div className="InformationContact">
            <h4 className="ContactCardTitle">{t("contact-with-us.contact-business-title")}</h4>
      
            <hr />
            
            <p style={{fontSize: 16}}>
            {t("contact-with-us.contact-business-description")}
            </p>
      
            <b>{i18n.language == "en" ? "Email: " : "Correo: " }</b>
            <p style={{fontSize: 16}}>watermeter04@gmail.com</p>
      
            </div>
             
           </div>
      
         </div>
      
      
          {/* Targeta 2 */}
      
         <div className="col-lg-4 col-md-6 col-ms-12">
      
          <div className="Card_Contact">

          <img src={i18n.language == "en" ? ContactToGetHelpImg : ContactToGetHelpImgEs } className="ImgCardContact" /> 
                  
      
            <div className="InformationContact">
      
            <h4 className="ContactCardTitle">{t("contact-with-us.contact-to-get-help-title")}</h4>
      
            <hr />
            
            <p style={{fontSize: 16}}>
            {t("contact-with-us.contact-to-get-help-description")}
            </p>
      
            <b>{i18n.language == "en" ? "Phone: " : "Teléfono: " }</b>
            <p style={{fontSize: 16}}>(+503) 0000-0000</p>
             
            </div>
      
           </div>
           
         </div>
      
      
          {/* Targeta 3 */}
      
         <div className="col-lg-4 col-md-12 col-ms-12">
           
          <div className="Card_Contact">

          <img src={i18n.language == "en" ? GeneralEnquiriesImg : GeneralEnquiriesImgEs } className="ImgCardContact" />                   
          
            <div className="InformationContact">
      
            <h4 className="ContactCardTitle">{t("contact-with-us.general-enquires-title")}</h4>
      
            <hr />
    
            <p style={{fontSize: 16}}>
            {t("contact-with-us.general-enquires-description")}
            </p>
                              
            <b>{i18n.language == "en" ? "Email: " : "Correo: " }</b>
            <p style={{fontSize: 16}}>watermeter04@gmail.com</p>
        
           </div>
      
         </div>
      
         </div>
          
          </div>
        </div>
        
        </>  
    )
}

export default ContactWithUs
