import type { FormEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import styles from "./ContactSection.module.css";

type ContactInfoCard = {
  title: string;
  value: string;
  description: string;
  action?: { label: string; href: string };
};

type ContactSectionProps = {
  title: string;
  description: string;
  info: ContactInfoCard[];
  onSubmit?: (data: FormData) => void;
  mapEmbedSrc: string;
};

export const ContactSection = ({
  title,
  description,
  info,
  onSubmit,
  mapEmbedSrc,
}: ContactSectionProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit?.(formData);
  };

  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <Container>
        <header className={styles.intro}>
          <h1 id="contact-title">{title}</h1>
          <p>{description}</p>
        </header>
        <div className={styles.grid}>
          <div className={styles.infoCards}>
            {info.map((card) => (
              <article key={card.title} className={styles.infoCard}>
                <h3>{card.title}</h3>
                <span className={styles.value}>{card.value}</span>
                <p>{card.description}</p>
                {card.action ? (
                  <Button as="a" href={card.action.href} variant="ghost">
                    {card.action.label}
                  </Button>
                ) : null}
              </article>
            ))}
            <div className={styles.map}>
              <iframe
                src={mapEmbedSrc}
                title="Squirrel global headquarters"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={`${styles.formRow} ${styles.twoColumn}`}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" name="name" type="text" className={styles.input} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="contact-message">How can we help?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={styles.textarea}
                  required
                />
              </div>
            </div>
            <Button type="submit">Submit Enquiry</Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

ContactSection.displayName = "ContactSection";
