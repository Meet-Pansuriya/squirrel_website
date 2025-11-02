import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/about", label: "Vision & About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navId = "primary-navigation";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          to="/"
          className={styles.brand}
          aria-label="Squirrel Engitech home"
        >
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M24 2c5.9 0 11.4 2.4 15.5 6.5S46 18.1 46 24c0 9.9-8.1 18-18 18H6.7a2.7 2.7 0 0 1-2.7-2.7V24C4 12.3 12.3 2 24 2Z"
              fill="currentColor"
            />
          </svg>
          Squirrel Engitech
        </Link>
        <div className={styles.navWrapper}>
          <nav
            id={navId}
            className={clsx(styles.nav, isMenuOpen && styles.navOpen)}
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  clsx(styles.navLink, isActive && styles.active)
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls={navId}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
            <span className={styles.menuLabel}>
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          styles.mobileScrim,
          isMenuOpen && styles.mobileScrimVisible
        )}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
        onClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
