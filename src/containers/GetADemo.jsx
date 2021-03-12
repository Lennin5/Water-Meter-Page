import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import GetADemoHomeImg from "../assets/img/general/get-a-demo.jpg";

const GetADemo = () => {    
    const [t, i18n] = useTranslation("global");

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    return (
        <>
            {/* Informacion Get_Demo */}

            <div className="Caja2">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-ms-12 cls1">

                        <h2 className="Titulo">{t("get-a-demo.get-a-demo-title")}</h2>

                        <p>
                        {t("get-a-demo.get-a-demo-description")}
                        </p>


                        <img src={GetADemoHomeImg} className="img5 roundedImg" />

                    </div>


                    <div className="col-lg-6 col-md-6 col-ms-12 cls1">                        

                        <div className="FormGetDemo">

                            <h4 className="ContactCardTitle">{t("get-a-demo.contact-us-form-label")}</h4>

                            <hr />

                            <label for="nombre">{t("get-a-demo.name-form-label")}</label>
                                <input type="text" id="name" onChange={(e)=>setName(e.target.value)} required="" pattern="[0-9]{10}" autoComplete="off" className="PartsForm" disabled />

                                <label for="email">{t("get-a-demo.email-form-label")}</label>
                                <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} name="Email" maxlength="30" required="" pattern="[0-9]{10}" autoComplete="off" className="PartsForm" disabled />

                                <center><label for="situation" style={{ margin: 15 }}>{t("get-a-demo.tell-us-form-label")}</label></center>
                                <textarea id="comment" onChange={(e)=>setComment(e.target.value)} name="Comment" placeholder={t("get-a-demo.type-here-form")} className="PartsForm" required="" pattern="[0-9]{10}" disabled>

                                </textarea>

                                <center>

                                <button className="btn btn-water" style={{width: "30%"}} disabled>{t("get-a-demo.button-form-label")}</button>                         
                                </center>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default GetADemo
