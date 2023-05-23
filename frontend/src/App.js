//import style
import './App.css';

//import component
import Navbar from './components/navbar/Navbar.js';
import PivertNavbar from '../src/img/pivert-navbar.png'
import SocialNetwork from '../src/components/socialNetwork/SocialNetwork'


                                                                  
function App() {
  return (
    <div className='main_div'>
    <Navbar />
    <SocialNetwork />
    <img src={PivertNavbar} alt="Pivert-Logo" className="PivertNavbar" />
    <p id="p1_accueil">Le Patro, ce sont des animatrices et animateurs bénévoles qui s’engagent, prennent des responsabilités et participent à une société plus solidaire. </p>
    <p id="p2_accueil">Ils consacrent de nombreuses heures à cette passion et se forment pour offrir une animation de qualité.</p>
    <div>
      <section id="accueil" class="section">
        <p id="welcome_on_site">Bienvenue dans le monde du</p>
        <p id="main_title">
          Patro de Marbais
        </p>
        <button id="discovert_button" className='accueil_button'>
          <span></span>
          Découvrir
        </button>
        <button id="contact_button" className='accueil_button'>
          <span></span>
          Contact
        </button>
        </section>
        <section id="apropos" class="section">
          <div>
            <p>section1</p>
            <p>A propos</p>
          </div>
        </section>
        <section id="agenda" class="section">
          <div>
            <p>section2</p>
            <p>Agenda</p>
          </div>
        </section>
        <section id="staff">
          <div>
            <p>section3</p>
            <p>Staff</p>
          </div>
        </section>
        <section id="infos">
          <div>
            <p>section4</p>
            <p>Informations</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App;
