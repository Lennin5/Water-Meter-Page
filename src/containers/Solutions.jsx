import React from 'react'
import GetADemoBottom from "../components/GetADemoBottom";
import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom";

import SolutionsHomeImg from "../assets/img/general/solution-home.jpg";
import AnalysisImg from "../assets/img/general/analysis.jpg";
import SavingMoneyImg from "../assets/img/general/saving-money.jpg";
import SavingWaterImg from "../assets/img/general/saving-water.jpg";
import AlertsImg from "../assets/img/general/alerts.jpg";

const Solutions = () => {
    return (
        <>
    {/* Information Solutions */}
  <div className="Caja1">

    <div className="row">

      <div className="col-lg-6 col-md-6 col-ms-12  cls1">
        <h2 className="Titulo">Solutions By Water Meter</h2>

        <p className="text-sm-start text-md-start text-lg-start">
        With Water Meter take control of graphs and statistics in real time, 
        receiving notifications of your water consumption, in your company.
          
        </p>

        <Link to='/get-a-demo'className="btn btn-water">Get Demo</Link>
      </div>

      <div  className="col-lg-6 col-md-6 col-ms-12 cls2">
        <img src={SolutionsHomeImg}  className="img1 roundedImg" />      
      </div>
      
    </div>
 
  </div>


  <div className="row cls4">

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

      <div className="col-lg-6 col-md-6 col-ms-12 ">
        <br/>
              <h2 className="Titulo">Analysis</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              Water Meter does a data analysis where the cubic meters of water, 
              consumption charges and other interesting data are detailed.
              </p>
        
      </div>
      
    </div>



  <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12 ">
        <br/>
              <h2 className="Titulo">Saving Money</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              Water Meter guarantees its customers to save money, thanks to the real-time view of the water consumption.
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

      <div className="col-lg-6 col-md-6 col-ms-12 ">
        <br/>
              <h2 className="Titulo">Saving Water</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              Managing water consuption in a company insures a better management and distribution of resources.
              </p>
        
      </div>
      
    </div>

    <div className="row cls4">

      <div className="col-lg-6 col-md-6 col-ms-12 ">
              <h2 className="Titulo">Alerts</h2>

              <p className="text-sm-start text-md-start text-lg-start">
              The Water Meter system notifies users of weekly consumption and also offers comparisons 
              of consumption with previous days or months.
              </p>
        
      </div>

      <div className="col-lg-6 col-md-6 col-ms-12">
        
        <img src={AlertsImg} className="img3 roundedImg" />
                 
      </div>
      
    </div>            
            <GetADemoBottom />
        </>
    )
}

export default Solutions
