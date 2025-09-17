import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { contactInfo } from '../data/siteContent'

const primaryNav = [
  { to: '/', label: 'Accueil' },
  { to: '/offres', label: 'Offres' },
  { to: '/methode-roi', label: 'Méthode & ROI' },
  { to: '/cas', label: 'Cas clients' },
  { to: '/laurent-serre', label: 'À propos' },
  { to: '/financements', label: 'Financements' },
]

const resourceNav = [
  { to: '/blog', label: 'Blog' },
  { to: '/webinaires', label: 'Webinaires' },
]

const legalNav = [
  { to: '/mentions', label: 'Mentions légales' },
  { to: '/confidentialite', label: 'Politique de confidentialité' },
  { to: '/cookies', label: 'Politique cookies' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">LS</span>
          <span className="brand-text">
            Laurent Serre
            <span className="brand-sub">Coaching intensif à la vente</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="sr-only">Ouvrir la navigation</span>
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
        <nav className={`primary-nav ${menuOpen ? 'open' : ''}`} id="primary-navigation">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="resource-nav">
              <NavLink
                to="/ressources"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                Ressources
              </NavLink>
              <ul>
                {resourceNav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <Link className="button primary" to="/diagnostic" onClick={closeMenu}>
            Diagnostic gratuit
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <span className="brand-mark">LS</span>
            <span className="brand-text">
              Laurent Serre
              <span className="brand-sub">Coaching intensif à la vente</span>
            </span>
          </div>
          <p className="footer-lede">
            Coaching hybride et sur-mesure pour accélérer vos ventes en 1 à 3 mois. Basé à Montpellier et Paris.
          </p>
          <div className="footer-contact">
            <p>
              <strong>Téléphone</strong>
              <br />
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            {primaryNav.map((item) => (
              <li key={`footer-${item.to}`}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/ressources">Ressources</Link>
            </li>
            {resourceNav.map((item) => (
              <li key={`footer-${item.to}`}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/diagnostic">Diagnostic gratuit</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Zones servies</h3>
          <ul className="footer-links">
            <li>
              <Link to="/montpellier">Montpellier & Occitanie</Link>
            </li>
            <li>
              <Link to="/paris">Paris & Île-de-France</Link>
            </li>
          </ul>
          <h3 className="footer-title">Ressources</h3>
          <p className="footer-address">
            {contactInfo.company}
            <br />
            {contactInfo.addressMontpellier}
          </p>
          <p className="footer-address">
            {contactInfo.addressParis}
          </p>
        </div>
        <div>
          <h3 className="footer-title">Légal</h3>
          <ul className="footer-links">
            {legalNav.map((item) => (
              <li key={`legal-${item.to}`}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <p className="footer-copy">© {new Date().getFullYear()} Laurent Serre Conseil</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#contenu-principal">
        Aller au contenu principal
      </a>
      <Header />
      <main id="contenu-principal" className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
