import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <ul>
                <li><a href="#apropos">À Propos</a></li>
                <li><a href="#agenda">Agenda</a></li>
                <li><a href="#staff">Staff</a></li>
                <li><a href="#infos">Infos</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar