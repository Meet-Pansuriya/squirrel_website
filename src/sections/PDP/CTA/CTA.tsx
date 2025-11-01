import { Button } from "../../../components/Button/Button";
import { Container } from "../../../components/Container/Container";
import styles from "./CTA.module.css";

type CTAProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const CTA = ({ title, description, primaryCta, secondaryCta }: CTAProps) => {
  return (
    <section className={styles.section} aria-labelledby="pdp-cta-title">
      <Container>
        <div className={styles.card}>
          <h2 id="pdp-cta-title">{title}</h2>
          <p>{description}</p>
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
        </div>
      </Container>
    </section>
  );
};

CTA.displayName = "CTA";
