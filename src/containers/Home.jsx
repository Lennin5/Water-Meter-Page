import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom";

import GetADemoBottom from "../components/GetADemoBottom";

import HomeImg from "../assets/img/general/home.jpg"
import PipesImg from "../assets/img/general/pipeline.jpg";
import Customers1Img from "../assets/img/general/CostumerT1.jpeg";
import Customers2Img from "../assets/img/general/CostumerT2.jpeg";
import Customers3Img from "../assets/img/general/CostumerT3.jpeg";
import Customers4Img from "../assets/img/general/CostumerT4.jpeg";
import WebAppImg from "../assets/img/general/web-app.png";
import MovilAppImg from "../assets/img/general/movil-app.png";

const Home = () => {

    return (
      <>
      <Parallax
      // blur={10}
      bgImage={HomeImg}
      bgImageAlt="Home Img"
      strength={100}
      >


<div className="Caja1">
  <br/>
  <br/>
  <br/>  
        
        <div className="row">

            <div className="col-lg-6 col-md-6 col-ms-12  cls1">
                <h2 className="Titulo white-text">Take Control Of Your Water </h2>

                <p className="text-sm-start text-md-start text-lg-start white-text">
                    What if I told you that you can manage consumption
                    of water in your company more efficiently, using
                    measurement technology and innovation.
                    
                </p>

                <Link to='/get-a-demo'className="btn btn-water">Get Demo</Link>
            </div>

            {/* <div  className="col-lg-6 col-md-6 col-ms-12 cls2">                     
                <img src={Register}  className="img1" />
            </div> */}
            
        </div>
 
    </div>

      <div style={{ height: '100px' }} />
      </Parallax>              
                        
        
            <div className="row cls3">
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                      <br/>
                      <br/>
                      
                      <h2 className="Titulo">For Buildings That Use Water In Its Production</h2>
        
                      <p className="text-sm-start text-md-start text-lg-start">
                          There are different companies that use water
                          in its production, which could be used more
                        efficient, through our proposal innovative.
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
        
                    <h1 className="Titulo2">For Costumers</h1>
        
                    <div className="row">
                        
                      <div className="col-lg-3 col-md-3 col-ms-3">
        
                          <img src={Customers1Img} className="imgCostumers" />
                          
                      </div>
        
                      <div className=" col-lg-3 col-md-3 col-ms-3">
                          
                          <img src={Customers2Img} className="imgCostumers" />  
        
                      </div>
        
                      <div className="col-lg-3 col-md-3 col-ms-3">
                          
                         <img src={Customers3Img} className="imgCostumers" />
        
                      </div>
        
                      <div className="col-lg-3 col-md-3 col-ms-3">
                          
                        <img src={Customers4Img} className="imgCostumers" />
        
                      </div>
        
                    </div>
                    
                </div>
        
        
                <div className="row cls3">
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                    
                    <img src={WebAppImg}  className="img1" />
        
                    </div>
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">

                      <br/>
                      <br/>
                      <br/>
        
                      <h2 className="Titulo">Water Meter Web App</h2>
        
                      <p className="text-sm-start text-md-start text-lg-start">
                          Take control of your company's water consumption 
                          thanks to our web application visualizing in a better 
                          way the ups and downs of your water consumption 
                          through Accurate records and graphs in real time.
                      </p>
                        
                         
                    </div>
                    
                </div>
        
        
                <div className="row cls3">
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                    
                    <img src={MovilAppImg}  className="img2" style={{width:"100%"}} />
        
                    </div>
        
                    <div className="col-lg-6 col-md-6 col-ms-12 ">
                      
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
        
                      <h2 className="Titulo">Water Meter Movil App</h2>
        
                      <p className="text-sm-start text-md-start text-lg-start">
                      Check your water consumption in real time with the water meter mobile app, 
                      keep an orderly record of the days with more or less water consumption in the calendar and other options.
                      </p>
                        
                         
                    </div>
                    
                </div>

              <GetADemoBottom />
        </>

    )
}

export default Home;
