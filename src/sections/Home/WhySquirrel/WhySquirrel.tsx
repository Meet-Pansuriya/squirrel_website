import type { ReactNode } from "react";
import { Container } from "../../../components/Container/Container";
import { FeatureIcon } from "../../../components/FeatureIcon/FeatureIcon";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import styles from "./WhySquirrel.module.css";

type WhySquirrelFeature = {
  icon: ReactNode;
  title: string;
  description: string;
};

type WhySquirrelProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  features: WhySquirrelFeature[];
};

export const WhySquirrel = ({ eyebrow, title, description, features }: WhySquirrelProps) => {
  return (
    <section className={styles.section} aria-labelledby="why-squirrel-title">
      <Container>
        <div className={styles.content}>
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
          />
          <div className={styles.features}>
            {features.map((feature) => (
              <FeatureIcon
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

WhySquirrel.displayName = "WhySquirrel";
