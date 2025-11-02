import clsx from 'clsx'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const SectionHeader = ({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) => {
  return (
    <div className={clsx(align === 'center' && styles.center)}>
      <div className={styles.wrapper}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h2 className={styles.title}>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </div>
  )
}

export default SectionHeader
