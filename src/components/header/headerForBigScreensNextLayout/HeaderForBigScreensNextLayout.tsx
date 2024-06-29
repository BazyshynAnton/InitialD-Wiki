'use client'

import { usePathname, Image, Link } from '../../shared/nextjsImports'

import styles from './HeaderForBigScreensNextLayout.module.scss'

const HeaderForBigScreensNextLayout = () => {
  const pathname = usePathname()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerItems}>
        <Link href="/">
          <Image
            width={500}
            height={500}
            src="/pictures/logoD.webp"
            alt="logoD"
            loading="eager"
            className={styles.logoD}
          />
        </Link>
        <ul>
          <li>
            <Link
              className={`${pathname === '/introduction' ? 'active' : ''}`}
              href="/introduction"
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === '/character' ? 'active' : ''}`}
              href="/character"
            >
              Character
            </Link>
          </li>
          <li>
            <Link className={`${pathname === '/' ? 'active' : ''}`} href="/">
              Initial D -Product-
            </Link>
          </li>
          <li>
            <Link className={`${pathname === '/' ? 'active' : ''}`} href="/">
              Goods
            </Link>
          </li>
          <li>
            <Link className={`${pathname === '/' ? 'active' : ''}`} href="#">
              Youtube
            </Link>
          </li>
          <li>
            <Link className={`${pathname === '/' ? 'active' : ''}`} href="#">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderForBigScreensNextLayout
