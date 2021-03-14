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
        <Link to='/' className="navbar-brand navbar-brand-logo-dark" id="navbar-brand" style={{ marginTop: -1, fontWeight: "bold", fontSize: 25,}}>
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
        <Link to='/' onClick={() =>SelectOption("home")} className="nav-link" id="navbar-selection-home" style={{ margin: 0, marginLeft: 15, fontWeight: 900}}>{t("navbar.home")}</Link>
        <Link to='./solutions' onClick={()=>SelectOption("solutions")} className="nav-link" id="navbar-selection-solutions" style={{ margin: 0, marginLeft: 15 }}>{t("navbar.solutions")}</Link>
        <Link to='/our-technology' onClick={()=>SelectOption("our-technology")} className="nav-link" id="navbar-selection-our-technology" style={{ margin: 0, marginLeft: 15 }}>{t("navbar.our-technology")}</Link>
        <li className="nav-item dropdown" style={{ marginLeft: 15, marginBottom: 5 }}>
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbar-selection-about-us" role="button" aria-expanded="false">{t("navbar.about-us")}</a>
          <ul className="dropdown-menu">
            <li className="dropdown-nav-active"><Link onClick={()=>SelectOption("contact-with-us")} to='/contact-with-us' className="dropdown-item" id="navbar-selection-contact-with-us">{t("navbar.contact-with-us")}</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li className="dropdown-nav-active"><Link onClick={()=>SelectOption("our-company")} to='/our-company' className="dropdown-item" id="navbar-selection-our-company">{t("navbar.our-company")}</Link></li>
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
