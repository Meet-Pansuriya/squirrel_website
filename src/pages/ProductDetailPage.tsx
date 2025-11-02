import { Link, useParams } from 'react-router-dom'
import PageSection from '../components/common/PageSection'
import SectionHeader from '../components/common/SectionHeader'
import { productCatalogBySlug } from '../data/products'
import styles from './ProductDetailPage.module.css'

const ProductDetailPage = () => {
  const { productSlug } = useParams<{ productSlug: string }>()
  const category = productSlug ? productCatalogBySlug[productSlug] : undefined

  if (!category) {
    return (
      <PageSection align="center">
        <div className={styles.notFound}>
          <h1>Product range not found</h1>
          <p>The product category you are looking for is no longer available.</p>
          <Link to="/products">Return to catalog</Link>
        </div>
      </PageSection>
    )
  }

  const heroImage = category.hero.blueprintImage ?? category.models[0]?.image

  return (
    <>
      <PageSection>
        <div className={styles.heroShell}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.heroEyebrow}>Product Series</span>
              <h1 className={styles.heroTitle}>{category.hero.title}</h1>
              <p className={styles.heroSubtitle}>{category.hero.subtitle}</p>
              <p className={styles.heroSubtitle}>{category.overview}</p>
            </div>
            {heroImage ? (
              <div className={styles.heroBlueprint}>
                <img src={heroImage} alt={`${category.shortName} schematic`} />
              </div>
            ) : null}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Key performance metrics"
          description="Specs that define the range and help you match performance to your operational targets."
        />
        <div className={styles.metricsGrid}>
          {category.metrics.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
              {metric.detail ? <span className={styles.metricDetail}>{metric.detail}</span> : null}
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="What sets this series apart"
          description="Design principles that make the series dependable in the field."
        />
        <div className={styles.featureGrid}>
          {category.differentiators.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Manufacturing guarantees"
          description="Confidence backed by documented validation and operator-first design."
        />
        <div className={styles.featureGrid}>
          {category.qualityNotes.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Available configurations"
          description="Select the build that aligns with your installation, performance envelope, and service expectations."
        />
        <div className={styles.modelsGrid}>
          {category.models.map((model) => (
            <div key={model.code} className={styles.modelCard}>
              <div className={styles.modelMedia}>
                <img src={model.image} alt={`${model.title} product render`} loading="lazy" />
              </div>
              <div>
                <h3 className={styles.modelTitle}>{model.title}</h3>
                <p className={styles.modelDescription}>{model.description}</p>
              </div>
              <div className={styles.tagStack}>
                {model.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {category.downloads && category.downloads.length > 0 ? (
          <div className={styles.downloadRow}>
            {category.downloads.map((download) => (
              <a key={download.label} href={download.url} className={styles.downloadLink}>
                {download.label}
              </a>
            ))}
          </div>
        ) : null}
      </PageSection>

      <PageSection align="center">
        <div className={styles.notFound}>
          <h2>Need assistance choosing a configuration?</h2>
          <p>Our engineering team can help match specifications to your application.</p>
          <a href="mailto:contact@squirrel-engitech.com">contact@squirrel-engitech.com</a>
        </div>
      </PageSection>
    </>
  )
}

export default ProductDetailPage
