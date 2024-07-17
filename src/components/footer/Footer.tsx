'use client'

import { Character } from '@/types/character/characterTypes'
import { Image, usePathname } from '../shared/nextjsImports'
import { useEffect, useState } from '../shared/reactImports'

import characters from '../../../data/characters/characters.json'

import styles from '@/styles/footer/Footer.module.scss'

export default function Footer() {
  const currentPath = usePathname()

  const [isHomePage, setIsHomePage] = useState<boolean>()
  const [isCharacterInfoPage, setIsCharacterInfoPage] = useState<boolean>()

  useEffect(() => {
    setIsHomePage(currentPath === '/')
    setIsCharacterInfoPage(
      characters.some(
        (character: Character) => currentPath === `/character/${character.link}`
      )
    )
  }, [currentPath])

  return (
    <div
      className={`${
        isHomePage ? styles.footerContainer : styles.footerContainerNextLayout
      } ${isCharacterInfoPage && styles.hideFooter}`}
    >
      <div
        className={`${
          isHomePage ? styles.footerContent : styles.footerContentNextLayout
        }`}
      >
        <Image
          width={500}
          height={500}
          src="/pictures/userInterface/logoD.webp"
          alt="logoD"
          loading="eager"
          className={styles.footerLogoD}
        />
        <div className={styles.televisionLinks}>
          <Image
            width={500}
            height={500}
            src="/pictures/userInterface/ntvLogo.jpg"
            alt="logoD"
            loading="eager"
          />
          <Image
            width={500}
            height={500}
            src="/pictures/userInterface/netflixLogo.jpg"
            alt="logoD"
            loading="eager"
          />
          <Image
            width={500}
            height={500}
            src="/pictures/userInterface/tbsLogo.png"
            alt="logoD"
            loading="eager"
          />
        </div>
        <h5>Copyright © {new Date().getFullYear()} All rights are reserved.</h5>
      </div>
    </div>
  )
}
