'use client'

import { Character } from '../../app/character/page'
import { useEffect, useState } from '../shared/reactImports'
import { Image, usePathname } from '../shared/nextjsImports'

import characters from '../../../public/data/characters/characters.json'

import styles from './Footer.module.scss'

const Footer = () => {
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
