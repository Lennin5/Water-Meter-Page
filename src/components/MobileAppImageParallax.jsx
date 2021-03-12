import React from 'react'
// import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring';
import { useTranslation } from "react-i18next";

import '../assets/css/style2.css' // // Icons made by Freepik from www.flaticon.com

// Images Enshlish
import MovilAppImg from "../assets/img/general/img-en/movil-app.png";
import SomeFeaturesImg from "../assets/img/general/img-en/some-features-app.png";
import RegisterImg from "../assets/img/general/img-en/register-app.png";
import RealTimeConsumptionImg from "../assets/img/general/img-en/real-time-consumption-app.png";

// Images Spanish
import MovilAppImgEs from "../assets/img/general/img-es/movil-app.png";
import SomeFeaturesImgEs from "../assets/img/general/img-es/some-features-app.png";
import RegisterImgEs from "../assets/img/general/img-es/register-app.png";
import RealTimeConsumptionImgEs from "../assets/img/general/img-es/real-time-consumption-app.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const MovilAppImageParallax = () => {        
        const [t, i18n] = useTranslation("global");
        const [axis, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 800, friction: 100 } }))
        return (
          <div class="container-movil-app" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>  
            <animated.div class="card1-movil-app" style={{ transform: axis.xy.interpolate(trans1), backgroundImage: `url(${i18n.language == "en" ? MovilAppImg : MovilAppImgEs})` }} />
            <animated.div class="card2-movil-app" style={{ transform: axis.xy.interpolate(trans2), backgroundImage: `url(${i18n.language == "en" ? RegisterImg : RegisterImgEs})` }} />
            <animated.div class="card3-movil-app" style={{ transform: axis.xy.interpolate(trans3), backgroundImage: `url(${i18n.language == "en" ? SomeFeaturesImg : SomeFeaturesImgEs})` }} />
            <animated.div class="card4-movil-app" style={{ transform: axis.xy.interpolate(trans4), backgroundImage: `url(${i18n.language == "en" ? RealTimeConsumptionImg : RealTimeConsumptionImgEs})` }} />
          </div>        
        )    
}

export default MovilAppImageParallax;
