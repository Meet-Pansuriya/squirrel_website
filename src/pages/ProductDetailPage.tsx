import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageSection from "../components/common/PageSection";
import SectionHeader from "../components/common/SectionHeader";
import type { ProductModel, SpecField } from "../data/products";
import { productCatalogBySlug } from "../data/products";
import styles from "./ProductDetailPage.module.css";

const formatSpecValue = (field: SpecField, model: ProductModel) => {
  const parts = field.entries
    .map((entry) => {
      const rawValue =
        entry.key === "__code"
          ? model.code
          : entry.key === "__title"
            ? model.title
            : (model.specs[entry.key] ?? "");

      if (!rawValue) {
        return "";
      }

      const prefix = entry.prefix ?? "";
      const suffix = entry.suffix ?? "";
      return `${prefix}${rawValue}${suffix}`;
    })
    .filter(Boolean);

  if (parts.length === 0) {
    return "—";
  }

  if (parts.length === 1) {
    return parts[0];
  }

  const joiner = field.joiner ?? " / ";
  return parts.join(joiner);
};

const ProductDetailPage = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const category = productSlug ? productCatalogBySlug[productSlug] : undefined;

  const [activeModelCode, setActiveModelCode] = useState<string>();
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (category?.models.length) {
      setActiveModelCode(category.models[0].code);
    }
  }, [category]);

  useEffect(() => {
    setIsZoomed(false);
  }, [activeModelCode]);

  const selectedModel = useMemo(() => {
    if (!category) {
      return undefined;
    }
    return (
      category.models.find((model) => model.code === activeModelCode) ??
      category.models[0]
    );
  }, [activeModelCode, category]);

  useEffect(() => {
    if (!isZoomed) {
      return;
    }
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZoomed(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isZoomed]);

  if (!category || !selectedModel) {
    return (
      <PageSection align="center">
        <div className={styles.assistCard}>
          <h2>Product range not found</h2>
          <p>
            The product category you are looking for is no longer available.
          </p>
          <Link to="/products">Return to catalog</Link>
        </div>
      </PageSection>
    );
  }

  return (
    <>
      <PageSection>
        <div className={styles.pageIntro}>
          <div className={styles.introHeader}>
            <span className={styles.introEyebrow}>Product Series</span>
            <h1 className={styles.introTitle}>{category.hero.title}</h1>
            <p className={styles.introSubtitle}>{category.hero.subtitle}</p>
          </div>
          <p className={styles.introCopy}>{category.overview}</p>
          <div className={styles.metricGrid}>
            {category.metrics.map((metric) => (
              <div key={metric.label} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span>{metric.label}</span>
                {metric.detail ? (
                  <span className={styles.metricDetail}>{metric.detail}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className={styles.modelLayout}>
          <div className={styles.indexColumn}>
            <div className={styles.indexLabel}>
              <h3>Model Index</h3>
              <span>Select a configuration to view its data.</span>
            </div>
            <div className={styles.modelList}>
              {category.models.map((model) => (
                <button
                  key={model.code}
                  type="button"
                  onClick={() => setActiveModelCode(model.code)}
                  className={clsx(
                    styles.modelButton,
                    model.code === selectedModel.code && styles.modelActive
                  )}
                >
                  {model.code}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.detailColumn}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModel.code}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.modelHero}>
                  <div className={styles.modelCopy}>
                    <h2>{selectedModel.title}</h2>
                    <p className={styles.modelDescription}>
                      {selectedModel.description}
                    </p>
                    {selectedModel.tags.length ? (
                      <div className={styles.tagList}>
                        {selectedModel.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div
                    onClick={() => setIsZoomed(true)}
                    aria-label="Open large product image"
                    className={styles.modelMedia}
                  >
                    <button
                      type="button"
                      className={styles.zoomButton}
                      aria-label="Open large product image"
                    >
                      <img
                        src={selectedModel.image}
                        alt={`${selectedModel.title} render`}
                        loading="lazy"
                      />
                    </button>
                    <span className={styles.zoomHint}>Click to zoom</span>
                  </div>
                </div>

                <div className={styles.specCard}>
                  <h3>Technical specification</h3>
                  <div className={styles.specList}>
                    {category.specFields.map((field) => (
                      <Fragment key={field.label}>
                        <span className={styles.specLabel}>{field.label}</span>
                        <span className={styles.specValue}>
                          {formatSpecValue(field, selectedModel)}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div>
              <SectionHeader
                title="Why engineers choose this series"
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
            </div>

            <div>
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
            </div>

            {category.downloads && category.downloads.length ? (
              <div>
                <SectionHeader
                  title="Downloads"
                  description="Specification packs and documentation."
                />
                <div className={styles.downloadRow}>
                  {category.downloads.map((download) => (
                    <a
                      key={download.label}
                      href={download.url}
                      className={styles.download}
                    >
                      {download.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </PageSection>

      <PageSection align="center">
        <div className={styles.assistCard}>
          <h2>Need assistance choosing a configuration?</h2>
          <p>
            Our engineering team can help match specifications to your
            application.
          </p>
          <a href="mailto:contact@squirrel-engitech.com">
            contact@squirrel-engitech.com
          </a>
        </div>
      </PageSection>

      <AnimatePresence>
        {isZoomed ? (
          <motion.div
            className={styles.zoomOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              className={styles.zoomContainer}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.zoomClose}
                onClick={() => setIsZoomed(false)}
              >
                Close ×
              </button>
              <div className={styles.zoomFrame}>
                <img
                  src={selectedModel.image}
                  alt={`${selectedModel.title} zoomed`}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ProductDetailPage;
