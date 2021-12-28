import Logo from '../../Logo.svg'
import './navbar.scss'
import { Mail } from '@material-ui/icons'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="FB Logo" />
          <div className="email">
            <Mail className='icon' />
            <a href="mailto:fesal.n04@hotmail.com">fesal.n04@hotmail.com</a>
          </div>
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
