import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import ScrollToTopButton from './components/ScrollToTop';
import Skills from './components/Skills';
import Home from './pages/Home';
import Certifications from './components/Certifications';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements/>
      <Certifications />
      <Contact />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;