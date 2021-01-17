import React from 'react';

import OurTechnologyHomeImg from "../assets/img/general/logo.png";
import HardwareImg from "../assets/img/general/hardware.jpg";
import SoftwareImg from "../assets/img/general/software.jpg";
import LogicImg from "../assets/img/general/logic.jpg";

const OurTechnology = () => {
    return (
        <>
   {/* Information Our Technology */}
  <div className="Caja2">

    <div className="row">

      <h1 className="Titulo3" style={{marginBottom: 70}}>What We Do</h1>

      <div className="col-lg-6 col-md-6 col-ms-12  cls2">
       
       <img src={OurTechnologyHomeImg}  className="img4" />

      </div>

      <div  className="col-lg-6 col-md-6 col-ms-12 cls2">

         <h2 className="Titulo">Water Meter</h2>

        <p className="text-sm-start text-md-start text-lg-start">
        Water Meter is a system that provides the control and good management of water, 
        counting on the monitoring of the total to be paid for consumption.
        </p>
      </div>
      
    </div>
 
  </div>


  <div className="cls5">

    <h1 className="Titulo2">Main Elements</h1>
    
  </div>


  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12">
              <h2 className="Titulo">Hardware</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              Use of different types of technologies, which link software and hardware through sensors, 
              microcontrollers for better control and user management.
              </p>
        
      </div>

      <div className="col-lg-6 col-md-6 col-ms-12 ">
        
        <img src={HardwareImg} className="img3 roundedImg" />
                 
      </div>
      
    </div>



  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12">
        
         <h2 className="Titulo">Software</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              For the creation of the software, we integrate pure code for the development of our mobile and web application, 
              using a clean and friendly interface.
              </p>
                 
      </div>

      <div className="col-lg-6 col-md-6 col-ms-12 ">


        <img src={SoftwareImg}  className="img3 roundedImg" />
             
        
      </div>      
      
    </div>


  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12 ">
              <h2 className="Titulo">Logic</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              Management and administration of data through technological components that are sent via Wi-Fi 
              to the cloud that in turn are divided into the web and mobile application.
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
