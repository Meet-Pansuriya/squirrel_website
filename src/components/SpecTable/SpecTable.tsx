import type { ReactNode } from "react";
import type { SpecRow } from "../../lib/types";
import styles from "./SpecTable.module.css";

type SpecTableProps = {
  rows: SpecRow[];
  caption?: ReactNode;
  labelHeading?: string;
  valueHeading?: string;
  className?: string;
};

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export const SpecTable = ({
  rows,
  caption,
  labelHeading = "Specification",
  valueHeading = "Details",
  className,
}: SpecTableProps) => {
  return (
    <div className={mergeClassNames(styles.wrapper, className)}>
      <table>
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            <th scope="col">{labelHeading}</th>
            <th scope="col">{valueHeading}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className={styles.label}>{row.label}</td>
              <td className={styles.value}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SpecTable.displayName = "SpecTable";
