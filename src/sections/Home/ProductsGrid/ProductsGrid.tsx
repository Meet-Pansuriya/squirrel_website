import type { Product } from "../../../lib/types";
import { Container } from "../../../components/Container/Container";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import styles from "./ProductsGrid.module.css";

type ProductsGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  products: Array<
    Product & {
      description?: string;
      metrics?: Array<{ label: string; icon?: React.ReactNode }>;
      secondaryCtaLabel?: string;
    }
  >;
};

export const ProductsGrid = ({ eyebrow, title, description, products }: ProductsGridProps) => {
  return (
    <section className={styles.section} aria-labelledby="home-products-title">
      <Container>
        <header className={styles.header}>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2 id="home-products-title">{title}</h2>
          {description ? <p>{description}</p> : null}
        </header>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              description={product.description}
              metrics={product.metrics}
              secondaryCtaLabel={product.secondaryCtaLabel}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

ProductsGrid.displayName = "ProductsGrid";
