import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring';
import { useTranslation } from "react-i18next";

import '../assets/css/style2.css' // // Icons made by Freepik from www.flaticon.com

// Images Enshlish
import WebAppImg from "../assets/img/general/img-en/web-app.png";

// Images Enshlish
import WebAppImgEs from "../assets/img/general/img-es/web-app.png";

import PinkCircleImg from "../assets/img/general/web-app/pink-circle.png";
import SkyblueCircleImg from "../assets/img/general/web-app/skyblue-circle.png";
import PurpleCircleImg from "../assets/img/general/web-app/purple-circle.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const WebAppImageParallax = () => {     
        const [t, i18n] = useTranslation("global");
        const [axis, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 800, friction: 100 } }))
        return (
        <>
        {/* <p style={{textAlign:"center", marginRight: 50 }}>Hover Me :)</p> */}
          <div id="web-app-component" class="container-web-app" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>          
            <animated.div class="card1-web-app" style={{ transform: axis.xy.interpolate(trans1), backgroundImage: `url(${i18n.language == "en" ? WebAppImg : WebAppImgEs})` }} /> 
            <animated.div class="card2-web-app" style={{ transform: axis.xy.interpolate(trans2), backgroundImage: `url(${SkyblueCircleImg})` }} />
            <animated.div class="card3-web-app" style={{ transform: axis.xy.interpolate(trans3), backgroundImage: `url(${PinkCircleImg})` }} />
            <animated.div class="card4-web-app" style={{ transform: axis.xy.interpolate(trans4), backgroundImage: `url(${PurpleCircleImg})` }} />
          </div>
        </>
        )    
}

export default WebAppImageParallax;
