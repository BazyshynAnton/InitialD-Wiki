'use client'
import { useState } from '../../shared/reactImports'
import { Image } from '../../shared/nextjsImports'

import HeaderItems from './contentOfHeaderForSmallScreens/HeaderItems'

import styles from './HeaderForSmallScreens.module.scss'
import Link from 'next/link'

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
          src="/pictures/logoD.webp"
          alt="logoD"
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
