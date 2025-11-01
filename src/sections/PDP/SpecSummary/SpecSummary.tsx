import { Container } from "../../../components/Container/Container";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Stat } from "../../../components/Stat/Stat";
import type { Stat as StatType } from "../../../lib/types";
import styles from "./SpecSummary.module.css";

type SpecSummaryProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  stats: StatType[];
};

export const SpecSummary = ({ eyebrow, title, description, stats }: SpecSummaryProps) => {
  return (
    <section className={styles.section} aria-labelledby="spec-summary-title">
      <Container>
        <div className={styles.inner}>
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

SpecSummary.displayName = "SpecSummary";
