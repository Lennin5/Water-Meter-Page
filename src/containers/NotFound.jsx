import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NotFoundImg from "../assets/img/general/img-en/not-found.png";
import NotFoundImgEs from "../assets/img/general/img-es/not-found.png";

const NotFound = () => {
    const [t, i18n] = useTranslation("global");
    return (
    <>    
    <section className="not__found">    
        <img src={i18n.language == "en" ? NotFoundImg : NotFoundImgEs}  alt="Not Found Image" style={{width: 420, height: 400}} />
        <Link to='/'>
        <a href="html/Get_Demo.html" className="btn btn-water">{t("not-found.button-go-home-title")}</a>
        </Link>
        <br/>
        <br/>        
    </section>    
    <br/>
    </>
    )
}

export default NotFound;