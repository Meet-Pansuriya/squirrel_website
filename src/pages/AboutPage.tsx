import { Infinity, Ruler, ShieldCheck } from 'lucide-react'
import PageSection from '../components/common/PageSection'
import SectionHeader from '../components/common/SectionHeader'
import styles from './AboutPage.module.css'

const visionStatements = [
  {
    title: 'Our Vision',
    description:
      'To be the definitive standard for engineering excellence, creating systems so reliable and integrated they become the silent, foundational framework of progress.',
  },
  {
    title: 'Our Mission',
    description:
      'To transform abstract challenges into tangible, enduring solutions through meticulous design, uncompromising quality, and a deep-seated commitment to partnership and innovation.',
  },
]

const pillars = [
  {
    icon: Ruler,
    title: 'Precision',
    description: 'Meticulous design and flawless execution are the cornerstones of our process.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description: 'Rigorous assurance protocols guarantee performance under all conditions.',
  },
  {
    icon: Infinity,
    title: 'Longevity',
    description: 'We engineer robust systems designed to withstand the test of time and utility.',
  },
]

const philosophyCopy = [
  'At Squirrel Engitech, our philosophy is built on a foundation of integrity and a relentless pursuit of innovation. We believe that true engineering is a craft—a balance of art and science. It is about more than function; it is about creating solutions that are elegant, efficient, and inherently trustworthy.',
  'We approach every project as a partnership, collaborating closely with our clients to understand their vision and translate it into reality. This collaborative spirit ensures that our solutions are not only technically superior but also perfectly aligned with strategic goals, delivering value that extends far beyond the initial build.',
]

const AboutPage = () => {
  return (
    <>
      <PageSection>
        <div className={styles.introGrid}>
          <h1 className={styles.introTitle}>Purpose-driven engineering</h1>
          <div className={styles.introBody}>
            {visionStatements.map((statement) => (
              <div key={statement.title} className={styles.subsection}>
                <h3>{statement.title}</h3>
                <p>{statement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="The standards that keep us ahead"
          description="Every product we release carries a consistent signature—precision machining, resilient sourcing, and exhaustive validation."
        />
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className={styles.pillarCard}>
              <div className={styles.pillarIcon} aria-hidden="true">
                <pillar.icon />
              </div>
              <div>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className={styles.philosophySection}>
          <div className={styles.philosophyText}>
            <SectionHeader
              title="The Engitech philosophy"
              description="Engineering should feel effortless for our partners. We obsess over the unseen details so that teams in the field can rely on predictable, repeatable performance."
            />
            {philosophyCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.blueprintPanel}>
            <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometric blueprint">
              <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M30 75a45 45 0 0 1 90 0 45 45 0 0 1-90 0z" />
                <path d="M75 30v90" />
                <path d="M30 75h90" />
                <path d="M170 40h100M170 110h100M170 75h30l40-35M200 75l40 35" />
                <path d="M170 40v70M270 40v70" />
              </g>
            </svg>
          </div>
        </div>
      </PageSection>
    </>
  )
}

export default AboutPage
