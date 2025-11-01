import { Download } from "lucide-react";
import { Button } from "../../../components/Button/Button";
import { Container } from "../../../components/Container/Container";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import styles from "./Downloads.module.css";

type DownloadItem = {
  name: string;
  description: string;
  size?: string;
  href: string;
};

type DownloadsProps = {
  title: string;
  description?: string;
  items: DownloadItem[];
};

export const Downloads = ({ title, description, items }: DownloadsProps) => {
  return (
    <section className={styles.section} aria-labelledby="downloads-title">
      <Container>
        <SectionTitle title={title} description={description} />
        <div className={styles.list}>
          {items.map((item) => (
            <article key={item.name} className={styles.item}>
              <div className={styles.meta}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.size ? <p>File size: {item.size}</p> : null}
              </div>
              <Button as="a" href={item.href} variant="ghost">
                <Download size={16} aria-hidden />
                Download
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

Downloads.displayName = "Downloads";
