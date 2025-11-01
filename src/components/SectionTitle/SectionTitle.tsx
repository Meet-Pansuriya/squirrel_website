import type { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  className?: string;
};

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={mergeClassNames(
        styles.root,
        align === "center" ? styles.center : undefined,
        className,
      )}
    >
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
};

SectionTitle.displayName = "SectionTitle";
