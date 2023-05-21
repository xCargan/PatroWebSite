import './App.css';
import Navbar from './components/navbar/Navbar';
import logo from '../src/img/patro-logo.png';


function App() {
  return (
    <div className='main_div'>
      <img src={logo} alt="Logo" className="logopatro" />
      <Navbar />
      <div>
        <div id="main_div">
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
          <section id="staff"  >
            <div>
              <p>section3</p>
              <p>Staff</p>
            </div>
          </section>
          <section id="infos"  >
            <div>
              <p>section4</p>
              <p>Informations</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App;
