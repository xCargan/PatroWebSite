import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='main_div'>
      <div>
        Head
      </div>
      <Navbar />
      <div>
        <div>
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
      <div>
        footer
      </div>
    </div>
  )
}

export default App;
