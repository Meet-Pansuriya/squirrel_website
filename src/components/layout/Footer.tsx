import styles from './Footer.module.css'

const contactItems = [
  { label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { label: 'Email', value: 'contact@squirrel-engitech.com', href: 'mailto:contact@squirrel-engitech.com' },
  { label: 'WhatsApp', value: 'Message our engineering team', href: 'https://wa.me/15551234567' },
]

const operationsItems = [
  { label: 'Address', value: '123 Innovation Drive, Suite 404\nTech Park, CA 90210' },
  { label: 'Hours', value: 'Mon–Fri · 9:00 AM – 5:00 PM (PST)' },
  { label: 'Support', value: 'Dedicated project managers on every engagement.' },
]

const knowledgeItems = [
  { label: 'Capabilities Deck', href: '/products' },
  { label: 'Dealer Programme', href: '/contact' },
  { label: 'Service & Maintenance', href: '/contact' },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.cta}>
            <h2>Ready to engineer the future together?</h2>
            <p>
              Precision systems, collaborative delivery, and lifelong support. Share your requirements and we&apos;ll
              design the roadmap from concept to commissioning.
            </p>
            <a href="mailto:contact@squirrel-engitech.com">Schedule a consultation →</a>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3>Talk to us</h3>
              <ul>
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong>
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Operations</h3>
              <ul>
                {operationsItems.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Resources</h3>
              <ul>
                {knowledgeItems.map((item) => (
                  <li key={item.label}>
                    {item.href ? <a href={item.href}>{item.label}</a> : item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Squirrel Engitech. All rights reserved.</span>
          <span>Purpose-built engineering • Precision manufacturing • Trusted partnerships</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
