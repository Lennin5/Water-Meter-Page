import React from 'react';
import { Link } from "react-router-dom";

import NotFoundImg from "../assets/img/general/not-found.png";

const NotFound = () => {
    return (
    <>    
    <section className="not__found">    
        <img src={NotFoundImg} alt="Not Found Image" style={{width: 500, height: 400}} />
        <Link to='/'>
        <a href="html/Get_Demo.html" className="btn btn-water">Go Home</a>
        </Link>
        <br/>
        <br/>        
    </section>    
    </>
    )
}

export default NotFound;