import {useRef} from "react"
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../../src/img/patro-logo.png';

function Navbar() {
  const navRef = useRef();
  const showNavbar= () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a className="a_link" href="#apropos">À Propos</a>
        <a className="a_link" href="#agenda">Agenda</a>
        <a className="a_link" href="#staff">Staff</a>
        <a className="a_link" href="#infos">Infos</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar;