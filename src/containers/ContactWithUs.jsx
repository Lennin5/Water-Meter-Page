import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { validateEmail } from "../utils/Validation";
import { store } from "../utils/FirebaseConfiguration"

import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GetADemoHomeImg from "../assets/img/general/get-a-demo.jpg";
import transitions from '@material-ui/core/styles/transitions';

const Contact = () => {    

    const [t, i18n] = useTranslation("global");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    function GetFormatHourAmPm(date) {  
        // GET HPUR
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;        
        var actualHour = `${hours}:${minutes} ${ampm}`

        return actualHour;
    }

    function GetDate(){
        // GET DATE
        var date = new Date()            
        var day = date.getDate()
        var month = date.getMonth() + 1
        var year = date.getFullYear();
        var today = `${day}/${month}/${year}`;      

        return today
    }  

    const ToastMessage = (message) => {
        if(message == "The data has been sent successfully." || message == "Se han enviado los datos con exito."){
            toast.error(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,  
                style: {backgroundColor: "#00b8a5", borderRadius: 10 }  
            });;  
        }else{
            toast.error(message, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,                    
                style: {backgroundColor: "#e95151", borderRadius: 10},
            });;  
        }
    }

    const AddContact = async () => {
        console.log(name, email, comment);
        if(!name.trim() || !email){
            ToastMessage(t("form-messages.empty-values"));
        }else if(!validateEmail(email)){
            ToastMessage(t("form-messages.invalid-email"));
        }else{  
            store.collection("WaterMeterComments").add({    
                name: name,
                email: email,
                comment: comment,                
                date: GetDate(),
                hour: GetFormatHourAmPm(new Date),            
                }).then(response => {                                  
                    ToastMessage(t("form-messages.data-successfully"));
                    ClearForm();
                }).catch(error => {
                    ToastMessage(error);
                });
        }
    }

    const ClearForm = () => {
        setName('');
        setEmail('');
        setComment('');

        document.getElementById('name').value = '';
        document.getElementById('e-mail').value = '';
        document.getElementById('comment').value = '';
    }

    return (
        <>
         
        <ToastContainer transition={Bounce} />      

<div className="row cls4">

    <div className="col-lg-6 col-md-6 col-ms-12 ">

    
    <img src={GetADemoHomeImg} className="img5 roundedImg" />

    </div>
    <div className="col-lg-6 col-md-6 col-ms-12">        
                    
    <div style={{display: 'flex', justifyContent: "center", width: "100%", borderWidth: 1, borderColor: "red"}}>
            <div style={{display: 'flex', flexDirection: "column"}}>

            <h4 className="ContactCardTitle">{t("get-a-demo.contact-us-form-label")}</h4>
            <br/>
                <section style={{marginBottom: 25, display: 'flex', alignItems: 'center'}}>
                    <svg style={{color: "#00b8a5", marginRight: 10}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>                    
                    <input type="text" id="name" className="txtInput" placeholder={t("get-a-demo.name-form-label")} onChange={(e)=>setName(e.target.value)} required="" pattern="[0-9]{10}" autoComplete="off" spellcheck="false" />
                </section>

                <section style={{marginBottom: 25, display: 'flex', alignItems: 'center'}} >
                    <svg style={{color: "#00b8a5", marginRight: 10}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>                                        
                    <input type="text" id="e-mail" className="txtInput" placeholder={t("get-a-demo.email-form-label")} onChange={(e)=>setEmail(e.target.value)} required="" pattern="[0-9]{10}" autoComplete="off" spellcheck="false" />
                </section>

                <section style={{marginBottom: 25}}>
                    <center style={{marginBottom: 10, display: 'flex', alignItems: 'center'}}>
                        <svg style={{color: "#00b8a5", marginRight: 10}}  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>                    
                        <label>{t("get-a-demo.tell-us-form-label")}</label>
                    </center>
                    <textarea id="comment" onChange={(e)=>setComment(e.target.value)} className="txtComment" placeholder={t("get-a-demo.type-here-form")} required="" pattern="[0-9]{10}" spellcheck="false"></textarea>                    
                </section>


                <section>
                    <center>
                        <button className="btn btn-water-firebase" onClick={AddContact}>{t("get-a-demo.button-form-label")}</button>                                
                    </center>
                </section>

            </div>
        </div>
                    
    </div>      

</div>

        {/* Informacion Contactanos con Firebase*/}




        </>
    )
}

export default Contact
