import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import './app.scss'
import { useState } from 'react'
import ReactGa from 'react-ga'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  ReactGa.initialize('UA-216173782-1')
  ReactGa.pageview(window.location.hash)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
