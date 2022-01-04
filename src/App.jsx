import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import './app.scss'
import { useState } from 'react'

fetch('https://api.countapi.xyz/update/fesal.me/portfolio?amount=1')

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

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

export default App
