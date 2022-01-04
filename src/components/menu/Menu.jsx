import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
  const links = ['home', 'about', 'projects', 'contact']

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        {
          links.map((link) => {
            return <li onClick={() => setMenuOpen(!menuOpen)}><a href={'#' + link}>{link.charAt(0).toUpperCase() + link.slice(1)}</a></li>
          })
        }
      </ul>
    </div>
  )
}
