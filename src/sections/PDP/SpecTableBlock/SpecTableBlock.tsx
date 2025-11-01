import { Button } from "../../../components/Button/Button";
import { Container } from "../../../components/Container/Container";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { SpecTable } from "../../../components/SpecTable/SpecTable";
import type { SpecRow } from "../../../lib/types";
import styles from "./SpecTableBlock.module.css";

type SpecTableBlockProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  specs: SpecRow[];
  notes?: string[];
  cta?: { label: string; href: string };
};

export const SpecTableBlock = ({
  eyebrow,
  title,
  description,
  specs,
  notes,
  cta,
}: SpecTableBlockProps) => {
  return (
    <section className={styles.section} aria-labelledby="spec-table-title">
      <Container>
        <div className={styles.layout}>
          <div>
            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            <div className={styles.notes}>
              {notes?.map((note) => (
                <p key={note}>{note}</p>
              ))}
              {cta ? (
                <Button as="a" href={cta.href}>
                  {cta.label}
                </Button>
              ) : null}
            </div>
          </div>
          <SpecTable rows={specs} />
        </div>
      </Container>
    </section>
  );
};

SpecTableBlock.displayName = "SpecTableBlock";
