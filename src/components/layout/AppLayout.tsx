import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import styles from './AppLayout.module.css'

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

const pageTransition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1] as const,
}

const AppLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className={styles.shell}>
      <div className={styles.gridOverlay} aria-hidden="true" />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className={styles.mainOuter}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className={styles.mainInner}>
            <Outlet />
          </div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default AppLayout
