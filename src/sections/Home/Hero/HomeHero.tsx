import type { ReactNode } from "react";
import { Button } from "../../../components/Button/Button";
import { Container } from "../../../components/Container/Container";
import { Stat as StatCard } from "../../../components/Stat/Stat";
import type { Stat } from "../../../lib/types";
import styles from "./HomeHero.module.css";

type HeroFeature = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type HeroMedia = {
  src: string;
  alt: string;
  badge?: string;
  title: string;
  description: string;
  features: HeroFeature[];
};

type HomeHeroProps = {
  kicker?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats: Stat[];
  media: HeroMedia;
};

export const HomeHero = ({
  kicker,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
  media,
}: HomeHeroProps) => {
  return (
    <section className={styles.section} aria-labelledby="home-hero-heading">
      <Container>
        <div className={styles.inner}>
          <div>
            {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
            <h1 id="home-hero-heading" className={styles.heading}>
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
            <div className={styles.stats} aria-label="Company performance stats">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
              ))}
            </div>
          </div>
          <aside className={styles.mediaCard}>
            <figure className={styles.mediaFigure}>
              {media.badge ? <span className={styles.badge}>{media.badge}</span> : null}
              <img src={media.src} alt={media.alt} />
            </figure>
            <div className={styles.mediaContent}>
              <h2 className={styles.mediaTitle}>{media.title}</h2>
              <p className={styles.mediaDescription}>{media.description}</p>
              <ul className={styles.featureList}>
                {media.features.map((feature) => (
                  <li key={feature.title} className={styles.featureItem}>
                    <span className={styles.featureIndicator} aria-hidden>
                      {feature.icon ?? "•"}
                    </span>
                    <span className={styles.featureText}>
                      <span className={styles.featureTitle}>{feature.title}</span>
                      <span className={styles.featureDescription}>{feature.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

HomeHero.displayName = "HomeHero";
