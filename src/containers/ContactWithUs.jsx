import React from 'react';

import ContactBussinesImg from "../assets/img/general/contact-bussines.jpg";
import ContactToGetHelpImg from "../assets/img/general/contact-to-help.jpg";
import GeneralEnquiriesImg from "../assets/img/general/general-enquires.jpg";



const ContactWithUs = () => {
    return (
        <>
         {/* Informacion Contact_With_Us */}

        <div className="Caja2">
         
         <h1 className="Titulo4">Contact With Us</h1>
      
         <p className="text_Contact">
         To learn more about Water Meter or technical support, Contact us.</p>
          
         <div className="row">
        
      
         {/* Targeta 1 */}
      
         <div className="col-lg-4 col-md-6 col-ms-12">
        
           <div className="Card_Contact">
      
            <img src={ContactBussinesImg} className="ImgCardContact" />
             
            <div className="InformationContact">
            <h4 className="ContactCardTitle">Contact Bussines</h4>
      
            <hr />
            
            <p style={{fontSize: 16}}>
            The Water Meter team seeks to provide a better service and to strengthen the relationship with its customers.
            </p>
      
            <p style={{fontSize: 16}}><b>Email:</b> Prueba1@gmail.com</p>
      
            </div>
             
           </div>
      
         </div>
      
      
          {/* Targeta 2 */}
      
         <div className="col-lg-4 col-md-6 col-ms-12">
      
          <div className="Card_Contact">
      
            <img src={ContactToGetHelpImg} className="ImgCardContact" />
      
            <div className="InformationContact">
      
            <h4 className="ContactCardTitle">Contact To Get Help</h4>
      
            <hr />
            
            <p style={{fontSize: 16}}>
            Our technical team is available to diagnose any problem that may arise and solve it as soon as possible.
            </p>
      
            <p style={{fontSize: 16}}><b>Phone:</b> 0000-0000</p>
      
            <p style={{fontSize: 16}}><b>Email:</b> Prueba1@gmail.com</p>
             
            </div>
      
           </div>
           
         </div>
      
      
          {/* Targeta 3 */}
      
         <div className="col-lg-4 col-md-12 col-ms-12">
           
          <div className="Card_Contact">
      
            <img src={GeneralEnquiriesImg} className="ImgCardContact" />
          
            <div className="InformationContact">
      
            <h4 className="ContactCardTitle">General Enquiries</h4>
      
            <hr />
      
            <p style={{fontSize: 16}}>
            Contact With us for any general enquirie.
            </p>
      
            <p style={{fontSize: 16}}><b>Email:</b> Prueba1@gmail.com</p>
        
           </div>
      
         </div>
      
         </div>
          
          </div>
        </div>
        
        </>  
    )
}

export default ContactWithUs
