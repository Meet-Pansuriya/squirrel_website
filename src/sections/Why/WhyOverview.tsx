import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { FeatureIcon } from "../../components/FeatureIcon/FeatureIcon";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import styles from "./WhyOverview.module.css";

type HeroContent = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta: { label: string; href: string };
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type GuaranteeCard = {
  eyebrow?: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
};

type WhyOverviewProps = {
  hero: HeroContent;
  differentiators: { title: string; description: string; features: Feature[] };
  guarantees: GuaranteeCard[];
  cta: { title: string; description: string; button: { label: string; href: string } };
};

export const WhyOverview = ({ hero, differentiators, guarantees, cta }: WhyOverviewProps) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroDescription}>{hero.description}</p>
            <Button as="a" href={hero.cta.href}>
              {hero.cta.label}
            </Button>
          </div>
          <figure className={styles.heroMedia}>
            <img src={hero.image.src} alt={hero.image.alt} />
          </figure>
        </div>

        <section aria-labelledby="differentiators-title">
          <SectionTitle
            eyebrow="Why Squirrel"
            title={differentiators.title}
            description={differentiators.description}
          />
          <div className={styles.featureGrid}>
            {differentiators.features.map((feature) => (
              <FeatureIcon
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className={styles.guarantee} aria-label="Squirrel customer commitments">
          {guarantees.map((item) => (
            <article key={item.title} className={styles.guaranteeCard}>
              <div className={styles.guaranteeText}>
                {item.eyebrow ? <span className="eyebrow">{item.eyebrow}</span> : null}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.cta ? (
                  <Button as="a" href={item.cta.href} variant="ghost">
                    {item.cta.label}
                  </Button>
                ) : null}
              </div>
              <figure className={styles.guaranteeMedia}>
                <img src={item.image.src} alt={item.image.alt} />
              </figure>
            </article>
          ))}
        </section>

        <section className={styles.cta} aria-labelledby="why-cta-title">
          <h2 id="why-cta-title">{cta.title}</h2>
          <p>{cta.description}</p>
          <Button as="a" href={cta.button.href}>
            {cta.button.label}
          </Button>
        </section>
      </Container>
    </section>
  );
};

WhyOverview.displayName = "WhyOverview";
