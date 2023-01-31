import './menu.scss'
import { Link } from 'react-router-dom'

export default function Menu({ menuOpen, setMenuOpen }) {
  const links = ['home', 'skills', 'work', 'contact']

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        {
          links.map((link) => {
            return <li onClick={() => setMenuOpen(!menuOpen)}><Link to={'/' + (link === 'home' ? '' : link)} data-text={'\u00A0' + link}>{'\u00A0' + link}</Link></li>
          })
        }
      </ul>
    </div>
  )
}
