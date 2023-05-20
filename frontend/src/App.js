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
          <section id="section1" class="section">
            <div>
              <p>section1</p>
            </div>
          </section>
          <section id="section2" class="section">
            <div>
              <p>section2</p>
            </div>
          </section>
          <section id="section3"  >
            <div>
              <p>section3</p>
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
