'use client'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Footer = () => {
  const currentPath = usePathname()

  const [isHomePage, setIsHomePage] = useState<boolean>()

  useEffect(() => {
    if (currentPath !== '/') {
      setIsHomePage(false)
    } else {
      setIsHomePage(true)
    }
  }, [currentPath])

  return (
    <div
      className={`${
        isHomePage ? styles.footerContainer : styles.footerContainerNextLayout
      }`}
    >
      <div
        className={`${
          isHomePage ? styles.footerContent : styles.footerContentNextLayout
        }`}
      >
        <Image
          width={500}
          height={500}
          src="/pictures/logoD.webp"
          alt="logoD"
          loading="eager"
          className={styles.footerLogoD}
        />
        <div className={styles.televisionLinks}>
          <Image
            width={500}
            height={500}
            src="/pictures/ntvLogo.jpg"
            alt="logoD"
            loading="eager"
          />
          <Image
            width={500}
            height={500}
            src="/pictures/netflixLogo.jpg"
            alt="logoD"
            loading="eager"
          />
          <Image
            width={500}
            height={500}
            src="/pictures/tbsLogo.png"
            alt="logoD"
            loading="eager"
          />
        </div>
        <h5>Copyright © {new Date().getFullYear()} All rights are reserved.</h5>
      </div>
    </div>
  )
}

export default Footer
