'use client'
import HeaderItems from './contentOfHeaderForSmallScreens/HeaderItems'

import { useState } from '@/components/shared/reactImports'
import { Link, Image } from '@/components/shared/nextjsImports'

import styles from '@/styles/header/headerForSmallScreens/HeaderForSmallScreens.module.scss'

const HeaderForSmallScreens = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={styles.smallScreensContainer}>
      <Link href="/">
        <Image
          width={500}
          height={500}
          src="/pictures/userInterface/logoD.webp"
          alt="logoD"
          loading="eager"
          className={styles.logoD}
        />
      </Link>

      <div
        className={`${styles.icon4} ${menuOpen ? styles.open : ''}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <HeaderItems menuOpen={menuOpen} />
    </div>
  )
}

export default HeaderForSmallScreens
