import './menu.scss'
import { Link } from 'react-router-dom'

export default function Menu({ menuOpen, setMenuOpen }) {
  const links = ['home', 'about', 'projects', 'contact']

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        {
          links.map((link) => {
            return <li onClick={() => setMenuOpen(!menuOpen)}><Link to={'/' + (link === 'home' ? '' : link)}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link></li>
          })
        }
      </ul>
    </div>
  )
}
