import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './PageSection.module.css'

type PageSectionProps = PropsWithChildren<{
  align?: 'left' | 'center'
  bleed?: boolean
  className?: string
}>

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const PageSection = ({ children, align = 'left', bleed = false, className }: PageSectionProps) => {
  return (
    <motion.section
      className={clsx(styles.section, bleed && styles.bleed, align === 'center' && styles.center, className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  )
}

export default PageSection
