import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./SiteHeader.module.css";

type NavLink = {
  label: string;
  href: string;
  isCurrent?: boolean;
};

type SiteHeaderProps = {
  logoLabel?: string;
  links: NavLink[];
  cta?: { label: string; href: string };
  onMenuClick?: () => void;
};

export const SiteHeader = ({
  logoLabel = "Squirrel",
  links,
  cta,
  onMenuClick,
}: SiteHeaderProps) => {
  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <Link to="/" className={styles.brand}>
          <svg viewBox="0 0 48 48" aria-hidden focusable="false">
            <path
              d="M22.5 4.5a2 2 0 0 1 3 0l18 18a2 2 0 0 1 0 3l-18 18a2 2 0 0 1-3 0l-18-18a2 2 0 0 1 0-3z"
              fill="currentColor"
            />
            <path
              d="M24 14a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
              fill="currentColor"
              opacity={0.2}
            />
          </svg>
          <span>{logoLabel}</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} to={link.href} aria-current={link.isCurrent ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
          {cta ? (
            <Button as={Link} to={cta.href}>
              {cta.label}
            </Button>
          ) : null}
          <button
            type="button"
            className={styles.mobileTrigger}
            aria-label="Open navigation"
            onClick={onMenuClick}
          >
            <Menu size={18} />
          </button>
        </div>
      </Container>
    </header>
  );
};

SiteHeader.displayName = "SiteHeader";
