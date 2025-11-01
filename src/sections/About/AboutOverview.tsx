import type { CSSProperties } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import type { Stat } from "../../lib/types";
import { Stat as StatCard } from "../../components/Stat/Stat";
import styles from "./AboutOverview.module.css";

type AboutHero = {
  title: string;
  subtitle: string;
  image: string;
};

type Pillar = {
  title: string;
  description: string;
};

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

type AboutCTA = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

type AboutOverviewProps = {
  hero: AboutHero;
  mission: { title: string; description: string; pillars: Pillar[] };
  stats: Stat[];
  timeline: TimelineItem[];
  team: TeamMember[];
  cta: AboutCTA;
};

export const AboutOverview = ({
  hero,
  mission,
  stats,
  timeline,
  team,
  cta,
}: AboutOverviewProps) => {
  const heroStyle = {
    "--hero-image": `url(${hero.image})`,
  } as CSSProperties;

  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.hero} style={heroStyle} aria-labelledby="about-hero-title">
          <div className={styles.heroContent}>
            <h1 id="about-hero-title" className={styles.heroTitle}>
              {hero.title}
            </h1>
            <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          </div>
        </header>

        <section className={styles.mission} aria-labelledby="mission-title">
          <SectionTitle
            eyebrow="Our Mission"
            title={mission.title}
            description={mission.description}
            align="center"
          />
          <div className={styles.pillars}>
            {mission.pillars.map((pillar) => (
              <article key={pillar.title} className={styles.pillar}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Company milestones">
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineText}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Company impact statistics">
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </section>

        <section aria-labelledby="team-title">
          <SectionTitle
            eyebrow="Leadership"
            title="Our Leadership Team"
            description="Meet the experts guiding Squirrel toward advanced industrial automation."
            align="center"
          />
          <div className={styles.team}>
            {team.map((member) => (
              <article key={member.name} className={styles.teamMember}>
                <div className={styles.teamImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <span className={styles.teamName}>{member.name}</span>
                <span className={styles.teamRole}>{member.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-cta-title">
          <div className={styles.ctaCard}>
            <h2 id="about-cta-title">{cta.title}</h2>
            <p>{cta.description}</p>
            <div className={styles.ctaActions}>
              <Button as="a" href={cta.primaryCta.href}>
                {cta.primaryCta.label}
              </Button>
              {cta.secondaryCta ? (
                <Button as="a" href={cta.secondaryCta.href} variant="ghost">
                  {cta.secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

AboutOverview.displayName = "AboutOverview";
