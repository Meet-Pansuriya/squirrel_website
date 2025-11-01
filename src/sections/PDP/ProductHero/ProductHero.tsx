import type { ReactNode } from "react";
import { Button } from "../../../components/Button/Button";
import { Container } from "../../../components/Container/Container";
import styles from "./ProductHero.module.css";

type ProductHighlight = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type ProductMedia = {
  src: string;
  alt: string;
};

type ProductHeroProps = {
  kicker?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  highlights: ProductHighlight[];
  media: ProductMedia;
};

export const ProductHero = ({
  kicker,
  title,
  description,
  primaryCta,
  secondaryCta,
  highlights,
  media,
}: ProductHeroProps) => {
  return (
    <section className={styles.section} aria-labelledby="product-hero-title">
      <Container>
        <div className={styles.inner}>
          <div>
            {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
            <h1 id="product-hero-title" className={styles.title}>
              {title}
            </h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
              <Button as="a" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              {secondaryCta ? (
                <Button as="a" href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
            <ul className={styles.highlights}>
              {highlights.map((highlight) => (
                <li key={highlight.title} className={styles.highlight}>
                  {highlight.icon ? <span aria-hidden>{highlight.icon}</span> : null}
                  <span>
                    <strong>{highlight.title}:</strong> {highlight.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <figure className={styles.media}>
            <img src={media.src} alt={media.alt} />
          </figure>
        </div>
      </Container>
    </section>
  );
};

ProductHero.displayName = "ProductHero";
