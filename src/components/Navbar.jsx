import { navLinks } from '../data'

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top">
        <i>B</i> FITGYM
      </a>
      <nav>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
        <a href="#join" className="nav-link keep">انضم الآن</a>
      </nav>
    </header>
  )
}
