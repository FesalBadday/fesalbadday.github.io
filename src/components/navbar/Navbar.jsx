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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
