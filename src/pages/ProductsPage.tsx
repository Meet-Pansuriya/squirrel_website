import clsx from 'clsx'
import { Link } from 'react-router-dom'
import PageSection from '../components/common/PageSection'
import { productCatalog } from '../data/products'
import styles from './ProductsPage.module.css'

const ProductsPage = () => {
  return (
    <>
      <PageSection>
        <div className={styles.pageIntro}>
          <h1>Product catalog</h1>
          <p>
            Our catalog is organised into focused engineering families so it is easy to match the right specification
            to the job. Explore highlights from each range and drill into model-level detail for configurations, kits,
            and downloadable resources.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className={styles.catalogStack}>
          {productCatalog.map((category, index) => (
            <div
              key={category.slug}
              className={clsx(styles.catalogItem, index % 2 === 1 && styles.reverse)}
            >
              <div className={styles.catalogMedia}>
                <img src={category.models[0]?.image} alt={`${category.shortName} blueprint`} />
              </div>
              <div className={styles.catalogContent}>
                <h3>{category.name}</h3>
                <div className={styles.metrics}>
                  {category.metrics.slice(0, 3).map((metric) => (
                    <span key={metric.label}>
                      {metric.value} · {metric.label}
                    </span>
                  ))}
                </div>
                <p>{category.overview}</p>
                <Link to={`/products/${category.slug}`} className={styles.itemLink}>
                  View models <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  )
}

export default ProductsPage
