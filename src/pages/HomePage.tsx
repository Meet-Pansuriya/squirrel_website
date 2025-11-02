import { Link } from 'react-router-dom'
import PageSection from '../components/common/PageSection'
import SectionHeader from '../components/common/SectionHeader'
import { productCatalog } from '../data/products'
import styles from './HomePage.module.css'

const heroStats = [
  { value: '8 bar', label: 'Max Pressure' },
  { value: '22.8 CFM', label: 'Air Delivery' },
  { value: '0.75–3.0 kW', label: 'Motor Range' },
  { value: '<70 dB', label: 'Silent Series' },
]

const valuePropositions = [
  { title: 'Unmatched Quality', description: 'Built to perform, engineered to last.' },
  { title: 'Comprehensive Range', description: 'Solutions for every industrial application.' },
  { title: 'Ethical Practices', description: 'Integrity in our materials and methods.' },
  { title: 'Competitive Pricing', description: 'Premium engineering at an accessible value.' },
  { title: 'Trust-Driven Relationships', description: 'Partnerships founded on reliability.' },
  { title: '250+ Dealer Network', description: 'Accessible service and support across India.' },
]

const qualityChecklist = [
  'Precision manufacturing with state-of-the-art machinery.',
  'Strict quality checks performed at each stage of production.',
  'High-grade packaging (corrugated + EPS) for secure transit.',
  'Commitment to reliable and timely delivery schedules.',
]

const factoryImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDkt81Z4eUYePBLtCSmQ8fPLkKFOGKLw2LVAOJbGYRAn7hRGr7mO1gZkDuLUzTYL8wT0yyCmOMhWmv49TCpPpNKZaGBC324gmDPEC6CVQ-7Pvs7TkDHQq5Q5kR7a_WKuNEZLbcetrIHO5GhzRW6Tib9IqDInsAgcPnckXKE7liegnoFVEAvsvg6YXuxl-KZZbC5UTNsqN0KA4Jl0VYkv1cxNR2iyZkoWHM-LfAztf7nkUMm9JKcyDnPVLCsZ07hwoLxTyqsG6SeQSM'

const HomePage = () => {
  return (
    <>
      <PageSection className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>Engineering precision. Shaping the future.</h1>
            <p className={styles.heroDescription}>
              We deliver innovative solutions with unparalleled accuracy and craftsmanship, turning complex
              challenges into elegant realities for our partners across industry verticals.
            </p>
            <div className={styles.heroActions}>
              <Link to="/products" className={styles.primaryLink}>
                Explore products
                <span aria-hidden>→</span>
              </Link>
              <Link to="/about" className={styles.secondaryLink}>
                Learn about our approach
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroIllustration}>
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tech blueprint illustration">
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="150" cy="150" r="110" opacity="0.55" />
                <circle cx="150" cy="150" r="70" opacity="0.75" />
                <path d="M40 150h220" opacity="0.6" />
                <path d="M150 40v220" opacity="0.6" />
                <rect x="90" y="90" width="120" height="120" rx="12" opacity="0.65" />
                <path d="M90 150h120M150 90v120" opacity="0.4" />
                <path d="M120 65h60l20 25-20 25h-60l-20-25z" opacity="0.55" />
                <path d="M220 125l25 20v60l-25 20-25-20v-60z" opacity="0.55" />
                <path d="M120 215h60l20 25-20 25h-60l-20-25z" opacity="0.55" />
                <circle cx="150" cy="150" r="10" fill="currentColor" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>
      </PageSection>

      <PageSection className={styles.statsGrid}>
        {heroStats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Product Families"
          description="A curated selection of our core product lines, engineered for reliability and performance."
        />
        <div className={styles.familyList}>
          {productCatalog.map((category) => {
            const primaryMetric = category.metrics[0]
            const secondaryMetric = category.metrics[1]

            return (
              <article key={category.slug} className={styles.familyRow}>
                <div className={styles.familyMedia}>
                  <img src={category.models[0]?.image} alt={`${category.shortName} equipment`} loading="lazy" />
                </div>
                <div className={styles.familyBody}>
                  <header className={styles.familyHeader}>
                    <h3>{category.name}</h3>
                    <p>{category.overview}</p>
                  </header>
                  <ul className={styles.familyMetrics}>
                    {primaryMetric ? (
                      <li>
                        <span>{primaryMetric.label}</span>
                        <strong>{primaryMetric.value}</strong>
                      </li>
                    ) : null}
                    {secondaryMetric ? (
                      <li>
                        <span>{secondaryMetric.label}</span>
                        <strong>{secondaryMetric.value}</strong>
                      </li>
                    ) : null}
                  </ul>
                  <Link to={`/products/${category.slug}`} className={styles.productLink}>
                    Explore models <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Why Choose Us"
          description="Our principles guide every component we build and every relationship we foster."
        />
        <div className={styles.valueGrid}>
          {valuePropositions.map((value) => (
            <div key={value.title} className={styles.valueCard}>
              <span className={styles.valueTitle}>{value.title}</span>
              <span className={styles.valueDescription}>{value.description}</span>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Our Commitment to Excellence"
          description="Rooted in decades of engineering excellence, our work is defined by an unwavering commitment to precision and reliability."
        />
        <p className={styles.commitmentCopy}>
          We design and manufacture products of exceptional durability, building a legacy of quality that is trusted
          across India. Every component reflects our dedication to creating lasting value for our partners, aligning
          engineering integrity with measurable performance in the field.
        </p>
      </PageSection>

      <PageSection className={styles.qualitySection}>
        <div className={styles.qualityMedia}>
          <img src={factoryImage} alt="Factory assembly line" loading="lazy" />
        </div>
        <div>
          <h3 className={styles.heroTitle} style={{ fontSize: '2rem' }}>
            Quality control at every step
          </h3>
          <div className={styles.qualityList}>
            {qualityChecklist.map((item, index) => (
              <div key={item} className={styles.qualityItem}>
                <span className={styles.qualityMarker}>{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection align="center">
        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Let&apos;s build together.</h3>
          <p className={styles.ctaDescription}>
            Have a project in mind or want to learn more about our capabilities? We&apos;d love to hear from you.
          </p>
          <a className={styles.ctaLink} href="mailto:contact@squirrel-engitech.com">
            contact@squirrel-engitech.com
          </a>
        </div>
      </PageSection>
    </>
  )
}

export default HomePage
