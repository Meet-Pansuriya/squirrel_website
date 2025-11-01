import type { ReactNode } from "react";
import styles from "./Stat.module.css";

type StatProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
};

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export const Stat = ({ value, label, icon, className }: StatProps) => {
  return (
    <div className={mergeClassNames(styles.root, className)}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

Stat.displayName = "Stat";
