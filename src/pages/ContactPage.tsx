import type { ReactNode } from 'react'
import PageSection from '../components/common/PageSection'
import styles from './ContactPage.module.css'

const contactEntries: { label: string; value: ReactNode }[] = [
  { label: 'Primary Phone', value: <a href="tel:+15551234567">+1 (555) 123-4567</a> },
  { label: 'Email Address', value: <a href="mailto:contact@squirrel-engitech.com">contact@squirrel-engitech.com</a> },
  { label: 'WhatsApp', value: 'Available at Primary Phone' },
  {
    label: 'Physical Address',
    value: (
      <>
        123 Innovation Drive, Suite 404
        <br />
        Tech Park, CA 90210
      </>
    ),
  },
  { label: 'Working Hours', value: 'Mon–Fri, 9:00 AM – 5:00 PM (PST)' },
]

const ContactPage = () => {
  return (
    <PageSection>
      <div className={styles.contactShell}>
        <div className={styles.dotGrid} aria-hidden="true" />
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Get in touch</h1>
          <p className={styles.contactSubtitle}>Contact information and operational hours.</p>
        </div>
        <div className={styles.infoGrid}>
          {contactEntries.map((entry) => (
            <div key={entry.label} className={styles.infoRow}>
              <span className={styles.infoLabel}>{entry.label}</span>
              <span className={styles.infoValue}>{entry.value}</span>
            </div>
          ))}
        </div>
        <p className={styles.footerNote}>© {new Date().getFullYear()} Squirrel Engitech. All rights reserved.</p>
      </div>
    </PageSection>
  )
}

export default ContactPage
