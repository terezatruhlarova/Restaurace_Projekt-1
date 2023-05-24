import React from "react";
import "../Styles/Hero.css";


 function Hero(){
    return(
        <div className="hero-content-page">
            <div className="hero-content">
              <h3>The best pizza you can get</h3>
              <button className="hero-btn-order">Order Online</button>
              <button className="hero-btn-phone">+420 732 164 953</button>  
            </div>
        </div>
    )
}

export default Hero;