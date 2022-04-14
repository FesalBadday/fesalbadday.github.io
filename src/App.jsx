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
      <a href="https://www.web-stat.com">
<img alt="Web-Stat web statistics" src="https://app.ardalio.com/7/3/2097325.png" />
</a>
    </div>
  );
}

export default App
