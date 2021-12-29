import Logo from '../../Logo.svg'
import './navbar.scss'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="logo">
          <a href="#home"><img src={Logo} alt="FB Logo" /></a>
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
