import { Container } from "../../../components/Container/Container";
import styles from "./Gallery.module.css";

type GalleryItem = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  tag?: string;
  href?: string;
};

type GalleryProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: GalleryItem[];
};

export const Gallery = ({ eyebrow, title, description, items }: GalleryProps) => {
  return (
    <section className={styles.section} aria-labelledby="home-gallery-title">
      <Container>
        <header className={styles.header}>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2 id="home-gallery-title">{title}</h2>
          {description ? <p>{description}</p> : null}
        </header>
        <div className={styles.grid}>
          {items.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            return (
              <Wrapper
                key={item.title}
                className={styles.item}
                {...(item.href ? { href: item.href } : undefined)}
              >
                <img src={item.image.src} alt={item.image.alt} className={styles.image} />
                <div className={styles.content}>
                  {item.tag ? <span className={styles.tag}>{item.tag}</span> : null}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

Gallery.displayName = "Gallery";
