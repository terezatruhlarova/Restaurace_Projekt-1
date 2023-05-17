import React from "react";
import "../Styles/Footer.css"
import img from "../Img/Footer-img.png";
import { FaFacebook, FaInstagram, FaSteam, FaTwitch } from "react-icons/fa";

function Footer() {
  return (
      <footer className="footer">
        <div className="footer-content">
          <p>Majitel: Truhlářová Tereza</p>
          <p>Kuchař: Bárta Adam</p>
          <p>Rozvoz: Hovorka Ondřej</p>
          <p>E-mail: papa-joy@gmail.com</p>
          <p>Kontekt: +420 123 456 789</p>
        </div>
        <div className="footer-social">
          <FaFacebook size="20px" className="footer-social-img" />
          <FaInstagram size="20px" className="footer-social-img" />
          <FaSteam size="20px" className="footer-social-img" />
          <FaTwitch size="20px" className="footer-social-img" />
        </div>
        <div className="footer-content-img">
          <img className="footer-img" src={img} width="320px" height="200px" alt=""/>
        </div>
      </footer>
  );
}

export default Footer;
