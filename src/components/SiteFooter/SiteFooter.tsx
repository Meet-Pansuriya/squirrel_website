import type { ReactNode } from "react";
import { Container } from "../Container/Container";
import styles from "./SiteFooter.module.css";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type SiteFooterProps = {
  logoLabel?: string;
  description?: string;
  columns: FooterColumn[];
  social?: SocialLink[];
  copyright: string;
};

export const SiteFooter = ({
  logoLabel = "Squirrel",
  description,
  columns,
  social,
  copyright,
}: SiteFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <svg viewBox="0 0 48 48" aria-hidden focusable="false">
              <path
                d="M22.5 4.5a2 2 0 0 1 3 0l18 18a2 2 0 0 1 0 3l-18 18a2 2 0 0 1-3 0l-18-18a2 2 0 0 1 0-3z"
                fill="currentColor"
              />
            </svg>
            <strong>{logoLabel}</strong>
            {description ? <p>{description}</p> : null}
          </div>
          {columns.map((column) => (
            <div key={column.title} className={styles.column}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <span>{copyright}</span>
          {social?.length ? (
            <div className={styles.social}>
              {social.map((link) => (
                <a key={link.href} href={link.href} aria-label={link.label}>
                  {link.icon}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
};

SiteFooter.displayName = "SiteFooter";
