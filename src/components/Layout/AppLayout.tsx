import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SiteHeader } from "../SiteHeader/SiteHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import styles from "./AppLayout.module.css";

type AppLayoutProps = {
  children: ReactNode;
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Product Detail", href: "/products/jet-x500" },
  { label: "Why Squirrel", href: "/why" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "JET Series", href: "/products" },
      { label: "SILENT Series", href: "/products" },
      { label: "SPIDER Series", href: "/products" },
      { label: "FORCE Series", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why Squirrel", href: "/why" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Documentation", href: "#" },
      { label: "Dealer Network", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={16} /> },
  { label: "Twitter", href: "https://x.com", icon: <Twitter size={16} /> },
  { label: "GitHub", href: "https://github.com", icon: <Github size={16} /> },
];

export const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();

  const links = navLinks.map((link) => ({
    ...link,
    isCurrent: location.pathname === link.href,
  }));

  return (
    <div className={styles.root}>
      <SiteHeader
        links={links}
        cta={{ label: "Request a Quote", href: "/contact" }}
      />
      <main className={styles.main}>{children}</main>
      <SiteFooter
        description="Precision-engineered automation systems crafted for peak industrial performance."
        columns={footerColumns}
        social={socialLinks}
        copyright="© 2024 Squirrel Industries. All rights reserved."
      />
    </div>
  );
};

AppLayout.displayName = "AppLayout";
