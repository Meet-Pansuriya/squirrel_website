import type { FormEvent } from "react";
import { Button } from "../../../components/Button/Button";
import { Container } from "../../../components/Container/Container";
import styles from "./ContactLead.module.css";

type ContactLeadProps = {
  title: string;
  description: string;
  buttonLabel: string;
  placeholder?: string;
  onSubmit?: (value: string) => void;
  hint?: string;
};

export const ContactLead = ({
  title,
  description,
  buttonLabel,
  placeholder = "Enter your email address",
  onSubmit,
  hint,
}: ContactLeadProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    if (typeof email === "string") {
      onSubmit?.(email);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-lead-title">
      <Container>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 id="contact-lead-title">{title}</h2>
            <p>{description}</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <label htmlFor="contact-email" className="visually-hidden">
                Email address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className={styles.input}
                placeholder={placeholder}
                autoComplete="email"
              />
              <Button type="submit">{buttonLabel}</Button>
            </div>
            {hint ? <p className={styles.hint}>{hint}</p> : null}
          </form>
        </div>
      </Container>
    </section>
  );
};

ContactLead.displayName = "ContactLead";
