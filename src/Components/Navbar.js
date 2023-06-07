import React from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react";
import "../Styles/Navbar.css";


function Navbar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return(
        <header>
            <h1 className="title">PAPA-JOY</h1>
            <nav ref={navRef}>
                    <a href="/">Hlavní stránka</a>
                    <a href="/Menu">Menu</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    
                        <FaTimes/>
                    </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}
export default Navbar;