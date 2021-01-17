import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import DropIconDark from "../assets/img/general/drop-icon-dark.png";
import DropIconLight from "../assets/img/general/drop-icon-light.png";
import LogoApp from "../assets/img/general/logo.png";


const Header = () => {

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      console.log("Abajo - Nav Color Verde");
      document.getElementById("btn-login-nav").classList.add("btn-outline-light");
      document.getElementById("btn-login-nav").classList.remove("btn-outline-success");

      document.getElementById("nav").classList.remove("navColorTop");
      document.getElementById("nav").classList.add("navColorBottom");

      document.getElementById("nav").classList.add("navbar-dark");
      document.getElementById("nav").classList.remove("navbar-light");

      document.getElementById("navbar-brand").classList.add("navbar-brand-logo-light");
      document.getElementById("navbar-brand").classList.remove("navbar-brand-logo-dark");

      document.getElementById("dropIcon").src = DropIconDark;

    } else {
      console.log("Arriba - Nav Color Blanco");
      document.getElementById("btn-login-nav").classList.add("btn-outline-success");
      document.getElementById("btn-login-nav").classList.remove("btn-outline-light");

      document.getElementById("nav").classList.add("navColorTop");
      document.getElementById("nav").classList.remove("navColorBottom");

      document.getElementById("nav").classList.add("navbar-light");
      document.getElementById("nav").classList.remove("navbar-dark");

      document.getElementById("navbar-brand").classList.add("navbar-brand-logo-dark");
      document.getElementById("navbar-brand").classList.remove("navbar-brand-logo-light");

      document.getElementById("dropIcon").src = DropIconLight;
    }
  }
 

  return (
    <>
      <nav id="nav" className="navbar sticky-top navbar-expand-sm navbar-light" style={{ paddingRight: 20, paddingLeft: 20 }}>
        {/* Siempre hay quwe colocar navbar cunado  hagamos un navegador con bootstrap */}

        {/* <!--Logo --> */}
        <br />
        
        <Link to='/' className="navbar-brand navbar-brand-logo-dark" id="navbar-brand" style={{ marginTop: -1, fontWeight: "bold", fontSize: 25 }}>
          <img src={DropIconLight} width="60" height="45" style={{ marginTop: -4 }} id="dropIcon" className="d-inline-block align-top"
            alt="Logo Water Meter" /> <b>Water Meter</b>
        
        </Link>

        {/* <!-- Menu Desplegable Elementos  --> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          {/* <!-- Opciones --> */}
          <div className="navbar-nav me-auto text-center">
            <Link to='/' className="nav-link" style={{ margin: 0, marginLeft: 15 }}>Home</Link>
            <Link to='/solutions' className="nav-link " style={{ margin: 0, marginLeft: 15 }}>Solutions</Link>
            <Link to='/our-technology' className="nav-link " style={{ margin: 0, marginLeft: 15 }}>Our Technology</Link>
            <li className="nav-item dropdown" style={{ marginLeft: 15, marginBottom: 5 }}>
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">About Us</a>
              <ul className="dropdown-menu">
                <li><Link to='/contact-with-us' className="dropdown-item"> Contact With Us</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to='/our-company' className="dropdown-item">Our Company</Link></li>
              </ul>
            </li>
          </div>
          <div className="d-flex justify-content-center" >   
            <button type="button" className="btn btn-outline-success" id="btn-login-nav" data-toggle="modal"
              data-target="#exampleModal" style={{ borderRadius: 30, width: 130 }}>Login</button>
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
