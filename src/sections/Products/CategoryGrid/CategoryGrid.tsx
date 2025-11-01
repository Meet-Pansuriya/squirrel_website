import { ArrowUpRight } from "lucide-react";
import { Container } from "../../../components/Container/Container";
import styles from "./CategoryGrid.module.css";

type Category = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  highlights: string[];
  href?: string;
  tag?: string;
};

type CategoryGridProps = {
  title: string;
  description?: string;
  categories: Category[];
};

export const CategoryGrid = ({ title, description, categories }: CategoryGridProps) => {
  return (
    <section className={styles.section} aria-labelledby="products-grid-title">
      <Container>
        <header className={styles.header}>
          <h1 id="products-grid-title">{title}</h1>
          {description ? <p>{description}</p> : null}
        </header>
        <div className={styles.grid}>
          {categories.map((category) => {
            const Wrapper = category.href ? "a" : "article";
            return (
              <Wrapper
                key={category.title}
                className={styles.card}
                {...(category.href ? { href: category.href } : undefined)}
              >
                <figure className={styles.media}>
                  <img src={category.image.src} alt={category.image.alt} />
                </figure>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <ul className={styles.meta}>
                  {category.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {category.href ? (
                  <span className={styles.cta}>
                    Explore
                    <ArrowUpRight size={16} aria-hidden />
                  </span>
                ) : null}
              </Wrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

CategoryGrid.displayName = "CategoryGrid";
