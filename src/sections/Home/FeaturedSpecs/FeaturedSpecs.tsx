import { Button } from "../../../components/Button/Button";
import { Container } from "../../../components/Container/Container";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { SpecTable } from "../../../components/SpecTable/SpecTable";
import type { SpecRow } from "../../../lib/types";
import styles from "./FeaturedSpecs.module.css";

type SpecHighlight = {
  title: string;
  description: string;
};

type FeatureImage = {
  src: string;
  alt: string;
};

type FeaturedSpecsProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights: SpecHighlight[];
  specs: SpecRow[];
  cta?: { label: string; href: string };
  image?: FeatureImage;
};

export const FeaturedSpecs = ({
  eyebrow,
  title,
  description,
  highlights,
  specs,
  cta,
  image,
}: FeaturedSpecsProps) => {
  return (
    <section className={styles.section} aria-labelledby="featured-specs-title">
      <Container>
        <div className={styles.inner}>
          <div>
            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            <div className={styles.highlights}>
              {highlights.map((highlight) => (
                <article key={highlight.title} className={styles.highlight}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
            {cta ? (
              <div className={styles.cta}>
                <Button as="a" href={cta.href}>
                  {cta.label}
                </Button>
              </div>
            ) : null}
            {image ? (
              <figure className={styles.media}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ) : null}
          </div>
          <SpecTable rows={specs} />
        </div>
      </Container>
    </section>
  );
};

FeaturedSpecs.displayName = "FeaturedSpecs";
