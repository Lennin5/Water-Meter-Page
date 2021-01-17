import React from 'react';

import GetADemoHomeImg from "../assets/img/general/get-a-demo.jpg";
const GetADemo = () => {    

    return (
        <>
            {/* Informacion Get_Demo */}

            <div className="Caja2">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-ms-12 cls1">

                        <h2 className="Titulo">Get a Demo of Water Meter</h2>

                        <p>
                        Tell us about your situation by email and we will contact you to give you a presentation of our project through Google Meet or Zoom.
                        </p>


                        <img src={GetADemoHomeImg} className="img5 roundedImg" />

                    </div>


                    <div className="col-lg-6 col-md-6 col-ms-12 cls1">

                        <div className="FormGetDemo">

                            <h4 className="ContactCardTitle">Contact With Us</h4>

                            <hr />

                            <form method="post" action="#" encType="multipart/form-data">

                                <label for="nombre">Name:</label>
                                <input type="text" id="nombre" name="Nombre" maxlength="50" required="off" autoComplete="off" className="PartsForm" />

                                <label for="email">Email:</label>
                                <input type="email" id="email" name="Email" maxlength="30" required="off" autoComplete="off" className="PartsForm" />

                                <center><label for="situation" style={{ margin: 15 }}>Tell Us More About Your Situation</label></center>
                                <textarea id="situation" name="Situation" placeholder="Type Here..." className="PartsForm" required="on">

                                </textarea>

                                <center>

                                <a href="html/Get_Demo.html" className="btn btn-water" style={{width: "30%"}}>Submit</a>
                                </center>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default GetADemo
