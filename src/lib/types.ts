import type { ReactNode } from "react";

export type Stat = {
  icon?: ReactNode;
  label: string;
  value: string;
};

export type ProductSeries = "JET" | "SILENT" | "SPIDER" | "FORCE";

export type Product = {
  id: string;
  name: string;
  series: ProductSeries;
  image: string;
  highlights: string[];
  href: string;
};

export type SpecRow = {
  label: string;
  value: string;
};
