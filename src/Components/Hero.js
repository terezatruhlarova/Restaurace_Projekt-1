import React from "react";
import "../Styles/Hero.css";
import img from "../Img/Hero-img.png";

 function Hero(){
    return(
        <div className="hero-content">
          <div className="hero-content-text">
            <h2>Ahoj</h2>
            <p>Jak pak se máme?</p>
          </div>
          <img className="hero-content-img" src={img} width="130px" height="200px" alt=""/>
        </div>
    )
}

export default Hero;