'use client'
import HeaderForBigScreensNextLayout from '@/components/header/headerForBigScreensNextLayout/HeaderForBigScreensNextLayout'
import HeaderForSmallScreens from '@/components/header/headerForSmallScreens/HeaderForSmallScreens'
import styles from './ReusablePage.module.scss'
import { usePathname } from 'next/navigation'

interface ContentProps {
  children: React.ReactNode
}

const ReusablePage = ({ children }: ContentProps) => {
  const currentPath = usePathname()

  return (
    <>
      <HeaderForBigScreensNextLayout />
      <HeaderForSmallScreens />

      <span
        className={`${
          currentPath === '/introduction' ? styles.introductionBg : ''
        } ${currentPath === '/character' ? styles.characterBg : ''}`}
      ></span>
      <span className={styles.introBgTexture}></span>
      {children}
    </>
  )
}

export default ReusablePage
