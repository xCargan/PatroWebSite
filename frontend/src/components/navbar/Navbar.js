import React, { useRef } from "react";
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
  };

  return (
    <header>
      <nav ref={navRef}>
        <a className="a_link" href="#apropos">À Propos</a>
        <a className="a_link" href="#agenda">Agenda</a>
        <a className="a_link" href="#staff">Staff</a>
        <a className="a_link" href="#infos">Infos</a>
        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
