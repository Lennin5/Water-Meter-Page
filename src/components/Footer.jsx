import React from 'react';

import FacebookIcon from "../assets/img/general/facebook-icon.png";
import TwitterIcon from "../assets/img/general/twitter-icon.png";
import InstagramIcon from "../assets/img/general/instagram-icon.png";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="row">

                <div className="col-lg-4 col-md-4 col-ms-12 ">

                </div>

                <div className="col-lg-4 col-md-4 col-ms-12 iconosDiv">

                    <a href="" className="enlaceFooter"><img src={FacebookIcon} className="iconos" hidden /></a>
                        <a href="" className="enlaceFooter"><img src={TwitterIcon} className="iconos" hidden /></a>
                            <a href="" className="enlaceFooter"><img src={InstagramIcon} className="iconos" hidden /></a>
				
			</div>

                            <div className="col-lg-4 col-md-4 col-ms-12 ">

                            </div>

		</div>

                        <div className="row">

                            <div className="col-lg-4 col-md-4 col-ms-12 ">

                            </div>

                            <div className="col-lg-4 col-md-4 col-ms-12 ">

                                <p className="informationFooter">© 2019 - 2021 Water Meter</p>
			</div>

                                    <div className="col-lg-4 col-md-4 col-ms-12 ">

                                    </div>
			
		</div>
		
	</footer>
    )
}

export default Footer;


