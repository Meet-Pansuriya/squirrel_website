import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'
import clsx from 'clsx'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'Vision & About' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="Squirrel Engitech home">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
            <path
              d="M24 2c5.9 0 11.4 2.4 15.5 6.5S46 18.1 46 24c0 9.9-8.1 18-18 18H6.7a2.7 2.7 0 0 1-2.7-2.7V24C4 12.3 12.3 2 24 2Z"
              fill="currentColor"
            />
          </svg>
          Squirrel Engitech
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
