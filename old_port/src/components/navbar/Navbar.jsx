import Logo from '../../Logo.svg'
import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="FB Logo" />
        </div>
        <div className='nav'>
          <ul>
            <li>
              <Link to="/" class="text" data-text="Home">Home</Link>
            </li>
            <li>
              <Link to="/skills" class="text" data-text="Skills">Skills</Link>
            </li>
            <li>
              <Link to="/work" class="text" data-text="Work">Work</Link>
            </li>
            <li>
              <Link to="/contact" class="text" data-text="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  )
}
