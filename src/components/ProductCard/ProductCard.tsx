import type { ReactNode } from "react";
import { Button } from "../Button/Button";
import type { Product } from "../../lib/types";
import styles from "./ProductCard.module.css";

type Metric = {
  label: string;
  icon?: ReactNode;
};

type ProductCardProps = {
  product: Product;
  description?: string;
  metrics?: Metric[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageAlt?: string;
  className?: string;
};

const mergeClassNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export const ProductCard = ({
  product,
  description,
  metrics,
  ctaLabel = "View details",
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageAlt,
  className,
}: ProductCardProps) => {
  const href = ctaHref ?? product.href;
  return (
    <article className={mergeClassNames(styles.root, className)}>
      <div className={styles.media}>
        <img src={product.image} alt={imageAlt ?? `${product.name} product photo`} />
      </div>
      <div>
        <span className={styles.series}>{product.series} SERIES</span>
        <h3 className={styles.title}>{product.name}</h3>
        {description ? <p className={styles.meta}>{description}</p> : null}
      </div>
      {product.highlights?.length ? (
        <ul className={styles.highlights}>
          {product.highlights.map((item) => (
            <li key={item} className={styles.highlightItem}>
              <span aria-hidden className={styles.highlightBullet} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {metrics?.length ? (
        <ul className={styles.highlights} aria-label={`${product.name} performance metrics`}>
          {metrics.map((metric) => (
            <li key={metric.label} className={styles.highlightItem}>
              {metric.icon ? <span aria-hidden>{metric.icon}</span> : null}
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className={styles.actions}>
        <Button as="a" href={href}>
          {ctaLabel}
        </Button>
        {secondaryCtaLabel ? (
          <Button as="a" href={secondaryCtaHref ?? href} variant="ghost">
            {secondaryCtaLabel}
          </Button>
        ) : null}
      </div>
    </article>
  );
};

ProductCard.displayName = "ProductCard";
