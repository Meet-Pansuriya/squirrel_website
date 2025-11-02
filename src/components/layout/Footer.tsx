import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const footerLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Vision & About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} Squirrel Engitech. All rights reserved.</span>
          <div className={styles.links}>
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <span>Engineering precision systems that deliver reliability, longevity, and measurable value.</span>
      </div>
    </footer>
  )
}

export default Footer
