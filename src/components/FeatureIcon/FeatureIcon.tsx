import type { ReactNode } from "react";
import styles from "./FeatureIcon.module.css";

type FeatureIconProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export const FeatureIcon = ({
  icon,
  title,
  description,
  className,
}: FeatureIconProps) => {
  return (
    <article className={mergeClassNames(styles.root, className)}>
      <span aria-hidden className={styles.icon}>
        {icon}
      </span>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

FeatureIcon.displayName = "FeatureIcon";
