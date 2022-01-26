import React, { useState } from 'react';
import $ from 'jquery';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';

import SwitchLanguage from "../components/SwitchLanguage";

import DropIconDark from "../assets/img/general/drop-icon-dark.png";
import DropIconLight from "../assets/img/general/drop-icon-light.png";
import LogoApp from "../assets/img/general/logo.png";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [navbarDark, setNavbarDark] = useState(false);  
  const location = useLocation(); // usar location.pathname para saber la ruta de la página

  // Constante para hacer visible el menú hamburguesa del NAV
  const Mobile = ({ children }) => {    
    const isMobile = useMediaQuery({ maxWidth: 577 })
    return isMobile ? children : null    
  }

  // Función que abre el modal de LOGIN - "No visible por el momento"
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  // Función de programación-diseño al bajar el scroll el NAV cambia de color
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      
      document.getElementById("dropIcon").src = DropIconDark;
      setNavbarDark(true);
      //console.log("Abajo - Nav Color Verde");
      document.getElementById("btn-login-nav").classList.add("btn-outline-light");
      document.getElementById("btn-login-nav").classList.remove("btn-outline-success");

      document.getElementById("nav").classList.remove("navColorTop");
      document.getElementById("nav").classList.add("navColorBottom");

      document.getElementById("nav").classList.add("navbar-dark");
      document.getElementById("nav").classList.remove("navbar-light");

      document.getElementById("navbar-brand").classList.add("navbar-brand-logo-light");
      document.getElementById("navbar-brand").classList.remove("navbar-brand-logo-dark");      

    } else {
      document.getElementById("dropIcon").src = DropIconLight;
      setNavbarDark(false);
      //console.log("Arriba - Nav Color Blanco");
      document.getElementById("btn-login-nav").classList.add("btn-outline-success");
      document.getElementById("btn-login-nav").classList.remove("btn-outline-light");

      document.getElementById("nav").classList.add("navColorTop");
      document.getElementById("nav").classList.remove("navColorBottom");

      document.getElementById("nav").classList.add("navbar-light");
      document.getElementById("nav").classList.remove("navbar-dark");

      document.getElementById("navbar-brand").classList.add("navbar-brand-logo-dark");
      document.getElementById("navbar-brand").classList.remove("navbar-brand-logo-light");      
    }
  }

  function SelectOptionHome(){
    getElmentById("navbar-selection-home", "900");
    getElmentById("navbar-selection-solutions", "100");
    getElmentById("navbar-selection-our-technology", "100");
    getElmentById("navbar-selection-contact-with-us", "100");
    getElmentById("navbar-selection-our-company", "100");
    getElmentById("navbar-selection-about-us", "100");        
  }
  // Función dependiente para SelectOption() [Sirve pa' no repetir el document.getElementById.style.fontWeight]
  function getElmentById(id, param){
    return document.getElementById(id).style.fontWeight = param;
  }  
  // Función para aplicar BOLD a los link's del NAV

  const SelectOption = (selection) => {
    var navbarTogglerButton = document.getElementById("navbar-toggler-button");
    if(navbarTogglerButton){
      switch (selection) {
        case 'home':          
          getElmentById("navbar-selection-home", "900");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "100");      
          document.getElementById("navbar-toggler-button").click();
            
        break;
        case 'solutions':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "900");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "100");
          document.getElementById("navbar-toggler-button").click();        
        break;      
        case 'our-technology':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "900");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "100");
          document.getElementById("navbar-toggler-button").click();        
        break;         
        case 'contact-with-us':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "900");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "900");  
          document.getElementById("navbar-toggler-button").click();    
        break;         
        case 'our-company':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "900");
          getElmentById("navbar-selection-about-us", "900");
          document.getElementById("navbar-toggler-button").click();        
        break;              
      }        
    }else{
      switch (selection) {
        case 'home':
          getElmentById("navbar-selection-home", "900");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "100");                     
            
        break;
        case 'solutions':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "900");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "100");          
        break;      
        case 'our-technology':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "900");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "100");
        break;         
        case 'contact-with-us':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "900");
          getElmentById("navbar-selection-our-company", "100");
          getElmentById("navbar-selection-about-us", "900");  
        break;         
        case 'our-company':
          getElmentById("navbar-selection-home", "100");
          getElmentById("navbar-selection-solutions", "100");
          getElmentById("navbar-selection-our-technology", "100");
          getElmentById("navbar-selection-contact-with-us", "100");
          getElmentById("navbar-selection-our-company", "900");
          getElmentById("navbar-selection-about-us", "900");         
        break;              
      }      
    }
    
  }   
  
  return (
    <>    

      {/* NAVBAR  */}

<nav id="nav" class="navbar sticky-top navbar-expand-sm navbar-light" style={{display: "flex", justifyContent: "center", paddingRight: 20, paddingLeft: 20, backgroundColor: "#fff"}}>
    <div style={{display: "flex", justifyContent: "center", borderWidth: 1, borderColor: "red"}}>
      <section>
        <Link to='/' onClick={() =>SelectOptionHome()} className="navbar-brand navbar-brand-logo-dark" id="navbar-brand" style={{ marginTop: -1, fontWeight: "bold", fontSize: 25,}}>
          <img src={DropIconLight} width="60" height="45" style={{ marginTop: -4 }} id="dropIcon" className="d-inline-block align-top"
            alt="Logo Water Meter" /> <b>Water Meter</b>        
        </Link>
      </section>
      <section>
        <Mobile>
          <button class="navbar-toggler" id="navbar-toggler-button" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>                  
        </Mobile>
      </section>
    </div>        

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <div className="navbar-nav me-auto text-center">                 
      <Link to='/' onClick={() =>SelectOption("home")} className="nav-link" id="navbar-selection-home" style={{ margin: 0, marginLeft: 15, fontWeight: 900, justifyContent: 'center'}}>
        <svg style={{marginTop:-5, marginRight:5}} xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
        </svg>        
          {t("navbar.home")}            
        </Link>                  
        <Link to='./solutions' onClick={()=>SelectOption("solutions")} className="nav-link" id="navbar-selection-solutions" style={{ margin: 0, marginLeft: 15 }}>
        <svg style={{marginTop:-5, marginRight:5}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
        </svg>
          {t("navbar.solutions")}</Link>
        <Link to='/our-technology' onClick={()=>SelectOption("our-technology")} className="nav-link" id="navbar-selection-our-technology" style={{ margin: 0, marginLeft: 15 }}>
        <svg style={{marginTop:-5, marginRight:5}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
        </svg>          
          {t("navbar.our-technology")}</Link>
        <li className="nav-item dropdown" style={{ marginLeft: 15, marginBottom: 5 }}>
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbar-selection-about-us" role="button" aria-expanded="false">
          <svg style={{marginTop:-5, marginRight:5}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
            <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
          </svg>        
            {t("navbar.about-us")}</a>
          <ul className="dropdown-menu">
            <li className="dropdown-nav-active">
              <Link onClick={()=>SelectOption("contact-with-us")} to='/contact-with-us' className="dropdown-item" id="navbar-selection-contact-with-us">
              <svg style={{ marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
              </svg>                
                {t("navbar.contact-with-us")}</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li className="dropdown-nav-active">
              <Link onClick={()=>SelectOption("our-company")} to='/our-company' className="dropdown-item" id="navbar-selection-our-company">
              <svg style={{ marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
              </svg>                
                {t("navbar.our-company")}</Link></li>
          </ul>
        </li>
      </div>
      <div className="d-flex justify-content-center" >     
            <SwitchLanguage navbarDark={navbarDark} />
            <button type="button" className="btn btn-outline-success" id="btn-login-nav" data-toggle="modal"
              data-target="#exampleModal" style={{ borderRadius: 30, width: 130 }} hidden>Login</button>
      </div>      
    </div>    
</nav>      



      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Water Meter Web</h5>
            </div>
            <div className="modal-body">
              <form method="post" action="#" encType="multipart/form-data">

                <center>
                  <img  src={LogoApp} style={{width: 150, height: 150}} />
                </center>
                <label for="email">Email:</label>
                <input type="email" id="email" name="Email" maxlength="30" required="off" autoComplete="off" className="PartsForm" />

                <label for="nombre">Password:</label>
                <input type="password" id="password" name="Password" maxlength="50" required="off" autoComplete="off" className="PartsForm" />                

                <center>

                  <a href="html/Get_Demo.html" className="btn btn-water" style={{ width: "30%" }}>Login</a>
                </center>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>              
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Header;
