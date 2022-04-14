import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Error from './components/404/404'
import './app.scss'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

fetch('https://api.countapi.xyz/update/fesal.me/portfolio?amount=1')

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<About />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
