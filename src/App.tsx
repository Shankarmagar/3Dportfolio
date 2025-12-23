import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedback from './components/Feedback';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Works from './components/Works';

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedback />
        <div className='relative z-0'>
          <Contact />
        </div>

      </div>
      </BrowserRouter>
    </>
  )
}

export default App
